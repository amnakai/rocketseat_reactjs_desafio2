import { Coffee, Package, ShoppingCart, Watch } from "phosphor-react";
import { HomeContainer, HomeIntro, HomeIntroImage, HomeIntroTitle, HomeIntroTextList, HomeMain, HomeMainTitle, HomeMainCatalog } from "./styles";
import intro_cafe from '../../assets/intro_cafe.png';
import { CatalogItem } from "./components/CatalogItem";
import { useContext } from "react";
import { CoffesContext } from "../../contexts/CoffesContext";

export function Home() {

    const {coffe_list} = useContext(CoffesContext);

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
                    {coffe_list.map(coffe => {
                        return (
                            <CatalogItem
                                key={coffe.id}
                                id={coffe.id}
                                name={coffe.name}
                                description={coffe.description}
                                img={coffe.img}
                                tags={coffe.tags}
                                price={coffe.price}
                                amount={coffe.amount}
                            >
                            </CatalogItem>        
                        )
                    })}
                </HomeMainCatalog>
            </HomeMain>

        </HomeContainer>
    )
}