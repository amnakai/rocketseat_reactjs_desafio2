import { ConfirmationContainer, ConfirmationDataCard, ConfirmationDataItem, ConfirmationDataPanel, ConfirmationImagePanel } from "./styles";
import  img_entrega from "../../assets/entrega.png";
import { CurrencyDollar, MapPin, Watch } from "phosphor-react";

export function Confirmation() {
    return(
        <ConfirmationContainer>
            <ConfirmationDataPanel>
                <strong>
                    Uhu! Pedido confirmado
                </strong>
                <p>
                    Agora é só aguardar que logo o café chegará até você
                </p>

                <ConfirmationDataCard>
                    <ConfirmationDataItem >
                        <i className="purple">
                        <MapPin color="#FFFFFF" size={16}/>
                        </i>
                        <div>
                            <p>Entrega em <span className="text-bold">Rua João Daniel Martinelli, 102</span></p>
                            <p>Farrapos - Porto Alegre, RS</p>
                        </div>
                    </ConfirmationDataItem>

                    <ConfirmationDataItem>
                        <i className="yellow">
                        <Watch size={16}/>
                        </i>
                        <div>
                            <p>Previsão de entrega</p>
                            <p className="text-bold">20 min - 30 min</p>
                        </div>
                    </ConfirmationDataItem>

                    <ConfirmationDataItem>
                        <i className="yellow-dark">
                        <CurrencyDollar size={16}/>
                        </i>
                        <div>
                            <p>Pagamento na entrega</p>
                            <p className="text-bold">Cartão de Crédito</p>
                        </div>
                    </ConfirmationDataItem>
                </ConfirmationDataCard>
            </ConfirmationDataPanel>

            <ConfirmationImagePanel>
                <img src={img_entrega} />
            </ConfirmationImagePanel>
        </ConfirmationContainer>
    )
}