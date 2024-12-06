import "./bemVindo.css"

export function BemVindo() {
    return (
        <div className="container-principal">
            <div className="container-button">
                <button className="container-voltar">Voltar</button>
            </div>

            <div className="container-title">
                <h1 >Olá, seja muito bem-vindo ao </h1>
                <h1>Find-Hunger</h1>
                <h4 >Você deseja se cadastrar como:</h4>
            </div>

            <div className="container-comerciante-cliente">
                
                
                <div className="container-nome">
                    <div className="container-comerciante">
                        <img src="" alt="" />
                    </div>
                    <p>Comerciante</p>
                </div>

                <h1>Ou</h1>
                <div className="container-nome">
                    <div className="container-cliente">
                        <img src="" alt="" />
                    </div>
                    <p>Cliente</p>
                </div>

            </div>
        </div>
    )
}
