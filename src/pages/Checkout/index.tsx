import { CreditCard, CurrencyDollar,  MapPinLine, Money } from "phosphor-react";
import { NavLink, useNavigate } from "react-router-dom";
import { SelectedCoffe } from "./components/SelectedCoffe";
import { CheckoutCard, CheckoutAddressCardForm, CheckoutCardHeader, CheckoutAddressCardInput, CheckoutContainer, CheckoutLeftPanel, CheckoutRightPanel, CheckoutCardButton, CheckoutPaymentCardForm, CheckoutConfirmationCard, CheckoutConfirmationCardSubtotalPanel, CheckoutConfirmationButton } from "./styles";

export function Checkout() {
    const navigate = useNavigate();

    function handleConfirmPurchase() {
        navigate("/confirmation");
    }
    
    return(
        <CheckoutContainer>
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

                <CheckoutAddressCardForm>
                    <CheckoutAddressCardInput placeholder="CEP"></CheckoutAddressCardInput>
                    <CheckoutAddressCardInput className="col-full" placeholder="Rua"></CheckoutAddressCardInput>
                    <CheckoutAddressCardInput placeholder="Número"></CheckoutAddressCardInput>
                    <CheckoutAddressCardInput className="col-fill" placeholder="Complemento"></CheckoutAddressCardInput>
                    <CheckoutAddressCardInput placeholder="Bairro"></CheckoutAddressCardInput>
                    <CheckoutAddressCardInput className="col-fill" placeholder="Cidade"></CheckoutAddressCardInput>
                    <CheckoutAddressCardInput className="col-small" placeholder="UF"></CheckoutAddressCardInput>
                </CheckoutAddressCardForm>
                
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
                        <CheckoutCardButton><CreditCard color="#8047F8" size={14}/> CARTÃO DE CRÉDITO</CheckoutCardButton>
                        <CheckoutCardButton><CreditCard color="#8047F8" size={14}/> CARTÃO DE DÉBITO</CheckoutCardButton>
                        <CheckoutCardButton><Money color="#8047F8" size={14}/> DINHEIRO</CheckoutCardButton>
                    </CheckoutPaymentCardForm>
                </CheckoutCard>
            
            
            </CheckoutLeftPanel>

            <CheckoutRightPanel>
                <h1>
                    Cafés selecionados
                </h1>

                <CheckoutConfirmationCard>
                    <SelectedCoffe/>
                    <hr/>
                    <SelectedCoffe/>
                    <hr/>
                    <SelectedCoffe/>
                    <hr/>
                    

                    <CheckoutConfirmationCardSubtotalPanel>
                        <div className="text-small ">Total de itens</div>
                        <div className="col-right ">R$ 29,70</div>
                        <div>Entrega</div>
                        <div className="col-right ">R$ 3,50</div>
                        <div className="text-emph">Total</div>
                        <div className="col-right text-emph">R$ 33,20</div>
                    </CheckoutConfirmationCardSubtotalPanel>    

                    
                    <CheckoutConfirmationButton onClick={handleConfirmPurchase}>
                        CONFIRMAR PEDIDO
                    </CheckoutConfirmationButton>
                    
                    <NavLink to="/success">
                        CONFIRMAR PEDIDO
                    </NavLink>

                </CheckoutConfirmationCard>
            </CheckoutRightPanel>
        </CheckoutContainer>
    )
}
