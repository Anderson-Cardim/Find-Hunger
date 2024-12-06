import "./cadClient.css"

export function CadastroCliente() {
    return (
        <header className=""> 
            <div className="cotainer-header"> 
                <div className="div-container-hearder">
                    <button className="button-inicio">Início</button>
                </div>
                <div className="div-container-hearder">
                    <button>Buscar</button>
                </div>
                <div className="div-container-hearder">
                    <button>Ofertas</button>
                </div>
                <div className="div-container-hearder">
                    <button>Restaurante</button>
                </div>
                <div className="div-container-hearder">
                    <button>Pedidos</button>
                </div>
            </div>

            <div className="container-button">
                <button className="container-voltar">Voltar</button>
            </div>

            <div className="container-cadastro">
                <h2>Cadastro do Cliente</h2>
                <form className="container-form" action="">
                    <div className="container-email">
                        <img src="" alt="" />
                        <input id="ctrl-email" name="name" placeholder="Nome Completo:" type="name" />
                    </div>

                    <div className="container-email">
                        <img src="" alt="" />
                        <input id="ctrl-senha" name="name" placeholder="E-mail:" type="email" />
                    </div>
                    <div className="container-email">
                        <img src="" alt="" />
                        <input id="ctrl-email" name="name" placeholder="Crie sua senha>>" type="password" />
                    </div>

                    <div className="container-email">
                        <img src="" alt="" />
                        <input id="ctrl-senha" name="name" placeholder="Confirmar senha>" type="password" />
                    </div>
                </form>
                <button className="button-cad">Cadastre-se</button>
            </div>
        </header>

       

    )
}
