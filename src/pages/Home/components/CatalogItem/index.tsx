import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffesContext } from "../../../../contexts/CoffesContext";
import { Coffe } from "../../../../reducers/coffes/reducer";
import { CatalogItemButton, CatalogItemContainer, CatalogItemForm, CatalogItemInput, CatalogItemTag, CatalogTagList } from "./styles";


export function CatalogItem(props: any) {
    const {addCoffeAmount} = useContext(CoffesContext);

    const imgsrc = `/src/assets/cafe/${props.img}`
    const pricestr = Intl.NumberFormat('pt-br', { minimumFractionDigits: 2 }).format(props.price)

    const [localAmount, setLocalAmount] = useState(0);

    function handleOnChangeAmount(event: any) {
        setLocalAmount(event.target.value);
    }

    function handleOnClickAddToCart() {
        if (localAmount > 0) {
            addCoffeAmount(props.id, localAmount)
        }

        setLocalAmount(0);
    }

    return (
        <CatalogItemContainer>
            <img src={imgsrc} />

            <CatalogTagList>
                {props.tags.map(
                    (tag: string) => {
                        return (
                            <CatalogItemTag key={tag}>
                                {tag}
                            </CatalogItemTag>
                        )
                    }
                )}
            </CatalogTagList>

            <strong>{props.name}</strong>

            <p>{props.description}</p>

            <CatalogItemForm>
                <label>R$</label>
                <span>{pricestr}</span>
                <CatalogItemInput
                    type="number"
                    min={0}
                    onChange={handleOnChangeAmount}
                    value={localAmount}
                />
                <CatalogItemButton onClick={handleOnClickAddToCart} title="Adiconar ao Carrinho">
                    <ShoppingCart color="#FFFFFF" size={14} />
                </CatalogItemButton>
            </CatalogItemForm>
        </CatalogItemContainer>
    )
}