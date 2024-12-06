import "./Home.css";

export function Home() {
    return (
        
            <div className="container-home">
                <div className="container-find-hunger">
                    <h3>Bem-Vindo ao</h3>
                    <h3>FIND-HUNGER!</h3>
                    <p>Crie sua conta agora mesmo.</p>
                    <button className="button-cad">Cadastro</button>
                </div>
            
                <div className="container-login">
                    <div className="container-login-auth" >
                        <h3 className="title-container-login">Acesse sua conta</h3>
                        <p className="subtitle-container-login">Preencha seus dados</p>
                        <form className="container-form" action="">
                            <div className="container-email">
                                <img src="" alt="" />
                                <input id="ctrl-email" name="name" placeholder="Email" type="email" />
                            </div>

                            <div className="container-email">
                                <img src="" alt="" />
                                <input id="ctrl-senha" name="name" placeholder="Senha" type="email" />
                            </div>
                        </form>
                        <div className="div-button-open">
                            <button className="button-open">Entrar</button>
                        </div>
                        
                        <a className="link-password" href="">Esqueceu a sua senha?</a>
                    </div>
                </div>
            </div>
    )
}
