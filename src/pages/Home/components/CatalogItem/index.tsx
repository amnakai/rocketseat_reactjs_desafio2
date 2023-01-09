import { ShoppingCart } from "phosphor-react";
import { Coffe } from "../../../../reducers/coffes/reducer";
import { CatalogItemButton, CatalogItemContainer, CatalogItemForm, CatalogItemInput, CatalogItemTag, CatalogTagList } from "./styles";


export function CatalogItem(props: any) {
    const imgsrc = `/src/assets/cafe/${props.img}`
    const pricestr =Intl.NumberFormat('pt-br', {minimumFractionDigits: 2}).format(props.price)

    function handleOnChangeAmount() {

    }

    return (
        <CatalogItemContainer>
            <img src={imgsrc}/>

            <CatalogTagList>
                {props.tags.map(
                    (tag: string) => {
                        return(
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
                />
                <CatalogItemButton>
                    <ShoppingCart  color="#FFFFFF" size={14}/>
                </CatalogItemButton>
            </CatalogItemForm>
        </CatalogItemContainer>
    )
}