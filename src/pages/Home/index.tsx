import { Coffee, Package, ShoppingCart, Watch } from "phosphor-react";
import { HomeContainer, HomeIntro, HomeIntroImage, HomeIntroTitle, HomeIntroTextList, HomeMain, HomeMainTitle, HomeMainCatalog } from "./styles";
import intro_cafe from '../../assets/intro_cafe.png';
import { CatalogItem } from "./components/CatalogItem";

export function Home() {
    return(
        <HomeContainer>
            <HomeIntro>
                <HomeIntroTitle>
                    <strong>
                        Encontre o café perfeito para qualquer hora do dia
                    </strong>
                    <p>
                        Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora
                    </p>
                    <HomeIntroTextList>
                        <span>
                            <i className="item1"><ShoppingCart color='#FFFFFF' size={20}/></i>
                            Compra simples e segura
                        </span>
                        <span>
                            <i className="item2"><Watch color='#FFFFFF' size={20}/></i>
                            Embalagem mantém o café intacto
                        </span>
                        <span>
                            <i className="item3"><Package color='#FFFFFF' size={20}/></i>
                            Entrega rápida e rastreada
                        </span>
                        <span>
                            <i className="item4"><Coffee color='#FFFFFF' size={20}/></i>
                            O café chega fresquinho até você
                        </span>
                    </HomeIntroTextList>
                </HomeIntroTitle>

                <HomeIntroImage>
                    <img src={intro_cafe} />
                </HomeIntroImage>
            </HomeIntro>


            <HomeMain>
                <HomeMainTitle>Nossos Cafes</HomeMainTitle>

                <HomeMainCatalog>
                    <CatalogItem></CatalogItem>
                    <CatalogItem></CatalogItem>
                    <CatalogItem></CatalogItem>
                    <CatalogItem></CatalogItem>
                    <CatalogItem></CatalogItem>
                    <CatalogItem></CatalogItem>
                </HomeMainCatalog>
            </HomeMain>

        </HomeContainer>
    )
}