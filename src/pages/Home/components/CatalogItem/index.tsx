import { ShoppingCart } from "phosphor-react";
import { CatalogItemButton, CatalogItemContainer, CatalogItemForm, CatalogItemInput, CatalogItemTag, CatalogTagList } from "./styles";

export function CatalogItem() {
    return (
        <CatalogItemContainer>
            <img src='/src/assets/cafe/americano.png'/>

            <CatalogTagList>
                <CatalogItemTag>TRADICIONAL</CatalogItemTag>
                <CatalogItemTag>COM LEITE</CatalogItemTag>
            </CatalogTagList>

            <strong>Expresso Tradicional</strong>

            <p>O tradicional café feito com água quente e grãos moídos</p>

            <CatalogItemForm>
                <label>R$</label> 
                <span>9,90</span>
                <CatalogItemInput 
                    type="number"
                    min={0} 
                    value="0"
                />
                <CatalogItemButton>
                    <ShoppingCart  color="#FFFFFF" size={14}/>
                </CatalogItemButton>
            </CatalogItemForm>
        </CatalogItemContainer>
    )
}