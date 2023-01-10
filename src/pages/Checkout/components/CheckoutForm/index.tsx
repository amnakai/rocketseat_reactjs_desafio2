import { ErrorResponse } from "@remix-run/router";
import { useFormContext } from "react-hook-form";
import { CheckoutAddressCardForm, CheckoutAddressCardInput } from "./styles";

export function CheckoutForm() {

    const { register } = useFormContext()


    return (
    <CheckoutAddressCardForm>
        <CheckoutAddressCardInput 
            placeholder="CEP"
            {...register('cep')}
        />
        <CheckoutAddressCardInput 
            className="col-full" 
            placeholder="Rua"
            {...register('street')}
        />
        <CheckoutAddressCardInput 
            placeholder="Número"
            {...register('number')}
        />
        <CheckoutAddressCardInput 
            className="col-fill" 
            placeholder="Complemento"
            {...register('complement')}
        />
        <CheckoutAddressCardInput 
            placeholder="Bairro"
            {...register('district')}
        />
        <CheckoutAddressCardInput 
            className="col-fill" 
            placeholder="Cidade"
            {...register('county')}
        />
        <CheckoutAddressCardInput 
            className="col-small" 
            placeholder="UF"
            {...register('uf')}
        />
        <CheckoutAddressCardInput 
            type="hidden"
            {...register('payment')}
        />
    </CheckoutAddressCardForm>
    )
}