import "./bemVindo.css"

import { ComercianteCliente } from "../../components/botaoComercianteCliente/ComercianteCliente";
import { BotaoVoltar } from "../../components/botaoVoltar/voltar";
import client from "../../assets/client 1.png"
import market from "../../assets/market 1.png"

export function BemVindo() {
    return (
        <div className="container-principal">
            <BotaoVoltar/>

            <div className="container-title">
                <h1 >Olá, seja muito bem-vindo ao </h1>
                <h1>Find-Hunger</h1>
                <h4 >Você deseja se cadastrar como:</h4>
            </div>

            <div className="container-comerciante-cliente">
                <ComercianteCliente
                    title="Comerciante"
                    img={market}                   
                />
                <h1>Ou</h1>
                <ComercianteCliente
                    title="Cliente"
                    img={client}
                />
            </div>
        </div>
    )
}
