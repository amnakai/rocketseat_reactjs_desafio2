import { CreditCard, CurrencyDollar,  MapPinLine, Money } from "phosphor-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CoffesContext } from "../../contexts/CoffesContext";
import { CheckoutForm } from "./components/CheckoutForm";
import { SelectedCoffe } from "./components/SelectedCoffe";
import { CheckoutCard, CheckoutCardHeader, CheckoutContainer, CheckoutLeftPanel, CheckoutRightPanel, CheckoutCardButton, CheckoutPaymentCardForm, CheckoutConfirmationCard, CheckoutConfirmationCardSubtotalPanel, CheckoutConfirmationButton, ErrorMessage } from "./styles";
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { DeliveryData } from "../../reducers/coffes/reducer";


const CheckoutFormValidationSchema = zod.object({
    cep: zod
        .string()
        .regex(/^\d+$/, 'CEP inválido')
        .min(8, 'CEP inválido')
        .max(8, 'CEP inválido'),
    street: zod
        .string()
        .min(1, 'Rua: preenchimento obrigatório'),
    number: zod
        .string()
        .regex(/^\d+$/, 'Número inválido')
        .min(1, 'Número: preenchimento obrigatório'),
    district: zod
        .string()
        .min(1, 'Bairro: preenchimento obrigatório'),
    complement: zod.string(),
    county: zod
        .string()
        .min(1, 'Município: preenchimento obrigatório'),
    uf: zod
        .string()
        .min(2, 'Preencha a UF com 2 caracteres')
        .max(2, 'Preencha a UF com 2 caracteres'),
    payment: zod
        .string()
        .min(1, 'Escolha uma forma de pagamento'),
})

type CheckoutFormData = zod.infer<typeof CheckoutFormValidationSchema>;

export function Checkout() {
    const {coffe_list, resetCoffeAmount, setDeliveryData} = useContext(CoffesContext);
    
    const selected_coffe_list = coffe_list.filter(
        coffe => {
            return coffe.amount && coffe.amount > 0;
        }
    )

    const valorItems = selected_coffe_list.reduce(
        (total, coffe) => {
            if (coffe.amount) {
                return total + (coffe.amount * coffe.price);
            } else {
                return total;
            }
        }, 0
    )

    const valorEntrega = valorItems > 0 ? 3.5 : 0;

    const valorTotal = valorItems + valorEntrega;

    const valorItemsStr = Intl.NumberFormat('pt-br', { minimumFractionDigits: 2 }).format(valorItems);
    const valorEntregaStr = Intl.NumberFormat('pt-br', { minimumFractionDigits: 2 }).format(valorEntrega);
    const valorTotalStr = Intl.NumberFormat('pt-br', { minimumFractionDigits: 2 }).format(valorTotal);
    
    const navigate = useNavigate();
    
    //----------------------------
    //FORM
    const checkoutForm = useForm<CheckoutFormData>({
        resolver: zodResolver(CheckoutFormValidationSchema),
        defaultValues: {
            cep: '',
            street: '',
            number: '',
            district: '',
            county: '',
            uf: '',
            payment: ''
        }

    })

    const { handleSubmit, reset, formState: { errors }, getValues, setValue, watch, trigger } = checkoutForm;

    const payment = watch('payment');

    function setPaymentMethodCreditCard(event:any) {
        setValue('payment', 'Cartão de Crédito');
        trigger('payment');
    }

    function setPaymentMethodDebitCard(event:any) {
        setValue('payment', 'Cartão de Débito');
        trigger('payment');
    }

    function setPaymentMethodCash(event:any) {
        setValue('payment', 'Dinheiro');
        trigger('payment');
    }

    function handleConfirmPurchase() {
        setDeliveryData(getValues());
        resetCoffeAmount();
        reset();
        navigate("/confirmation");
    }
    


    return(

        <CheckoutContainer>
            <FormProvider {...checkoutForm}>
                <CheckoutLeftPanel>
                <h1>
                    Complete seu pedido
                </h1>
                <CheckoutCard>
                    <CheckoutCardHeader>
                        <MapPinLine color="#C47F17" size={22} />
                        <div>
                            <strong>
                                Endereço de Entrega
                            </strong>
                            <p>
                                Informe o endereço onde deseja receber o seu pedido
                            </p>
                        </div>
                    </CheckoutCardHeader>
                    
                    <CheckoutForm/>
                    
                    <ErrorMessage>
                        <p>{errors.cep && errors.cep?.message}</p>
                        <p>{errors.street && errors.street?.message}</p>
                        <p>{errors.number && errors.number?.message}</p>
                        <p>{errors.district && errors.district?.message}</p>
                        <p>{errors.county && errors.county?.message}</p>
                        <p>{errors.uf && errors.uf?.message}       </p>
                    </ErrorMessage>
                    
                </CheckoutCard>

                    <CheckoutCard>
                        <CheckoutCardHeader>
                            <CurrencyDollar color="#8047F8" size={22}/>
                            <div>
                                <strong>
                                    Pagamento
                                </strong>
                                <p>
                                    O pagamento é feito na entrega. Escolha a forma que deseja pagar
                                </p>
                            </div>
                        </CheckoutCardHeader>

                        <CheckoutPaymentCardForm>
                            <CheckoutCardButton type="button" onClick={setPaymentMethodCreditCard} className={`${payment === 'Cartão de Crédito' && 'selected'}`}>
                                <CreditCard color="#8047F8" size={14}/> 
                                CARTÃO DE CRÉDITO
                            </CheckoutCardButton>
                            
                            <CheckoutCardButton type="button" onClick={setPaymentMethodDebitCard} className={`${payment === 'Cartão de Débito' && 'selected'}`}>
                                <CreditCard color="#8047F8" size={14}/> 
                                CARTÃO DE DÉBITO
                            </CheckoutCardButton>
                            
                            <CheckoutCardButton type="button" onClick={setPaymentMethodCash} className={`${payment === 'Dinheiro' && 'selected'}`}>
                                <Money color="#8047F8" size={14}/> 
                                DINHEIRO
                            </CheckoutCardButton>
                        </CheckoutPaymentCardForm>

                        <ErrorMessage>
                        <p>{errors.payment && errors.payment?.message}</p>
                        </ErrorMessage>
                    </CheckoutCard>
                
                
                </CheckoutLeftPanel>

                <CheckoutRightPanel>
                    <h1>
                        Cafés selecionados
                    </h1>

                    <CheckoutConfirmationCard>
                        {
                            selected_coffe_list.map(
                                coffe => {
                                    return (
                                        <div key = {coffe.id}>
                                            <SelectedCoffe
                                                id = {coffe.id}
                                                name = {coffe.name}
                                                price = {coffe.price}
                                                amount = {coffe.amount}
                                                img = {coffe.img}
                                            />
                                            <hr/>
                                        </div>
                                    )
                                }
                            )
                        }
                                        

                        <CheckoutConfirmationCardSubtotalPanel>
                            <div className="text-small ">Total de itens</div>
                            <div className="col-right ">R$ {valorItemsStr}</div>
                            <div>Entrega</div>
                            <div className="col-right ">R$ {valorEntregaStr}</div>
                            <div className="text-emph">Total</div>
                            <div className="col-right text-emph">R$ {valorTotalStr}</div>
                        </CheckoutConfirmationCardSubtotalPanel>    

                        
                        <CheckoutConfirmationButton disabled={selected_coffe_list.length == 0} onClick={handleSubmit(handleConfirmPurchase)} >
                            CONFIRMAR PEDIDO 
                        </CheckoutConfirmationButton>

                    </CheckoutConfirmationCard>
                </CheckoutRightPanel>
            </FormProvider>
        </CheckoutContainer>
    
    )
}
