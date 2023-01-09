import { CheckoutItemButton, CheckoutItemContainer, CheckoutItemForm, CheckoutItemInput } from "./styles";
import intro_cafe from '../../../../assets/cafe/americano.png';
import { CheckoutCardButton } from "../../styles";
import { Trash } from "phosphor-react";

export function SelectedCoffe() {
    return (
        <CheckoutItemContainer>
            <img src={intro_cafe}></img>

            <div>
                <span>Expresso Tradicional</span>
                <CheckoutItemForm>
                    <CheckoutItemInput type="number" min={1}></CheckoutItemInput>
                    <CheckoutItemButton>
                        <Trash color="#8047F8" size={16}/>
                        REMOVER
                    </CheckoutItemButton>
                </CheckoutItemForm>
            </div>

            <div className="col_sub">
                R$ 9.90
            </div>

        </CheckoutItemContainer>
    )
}