import { CheckoutItemButton, CheckoutItemContainer, CheckoutItemForm, CheckoutItemInput } from "./styles";
import { CheckoutCardButton } from "../../styles";
import { Trash } from "phosphor-react";
import { useContext } from "react";
import { CoffesContext } from "../../../../contexts/CoffesContext";

export function SelectedCoffe(props: any) {
    const {setCoffeAmount} = useContext(CoffesContext);

    const imgsrc = `/src/assets/cafe/${props.img}`
    const pricestr = Intl.NumberFormat('pt-br', { minimumFractionDigits: 2 }).format(props.price * props.amount)

    function handleOnChangeCoffeAmount(event: any) {
        setCoffeAmount(props.id, event.target.value);
    }

    function handleOnClickRemoveItem() {
        setCoffeAmount(props.id, 0);
    }

    return (
        <CheckoutItemContainer>
            <img src={imgsrc}></img>

            <div>
                <span>{props.name}</span>
                <CheckoutItemForm>
                    <CheckoutItemInput type="number" min={1} value={props.amount} onChange={handleOnChangeCoffeAmount}></CheckoutItemInput>
                    <CheckoutItemButton onClick={handleOnClickRemoveItem}>
                        <Trash color="#8047F8" size={16}/>
                        REMOVER
                    </CheckoutItemButton>
                </CheckoutItemForm>
            </div>

            <div className="col_sub">
                R$ {pricestr}
            </div>

        </CheckoutItemContainer>
    )
}