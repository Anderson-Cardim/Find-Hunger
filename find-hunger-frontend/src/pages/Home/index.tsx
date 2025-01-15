import { Input } from "../../components/Input/Input";
import "./Home.css";
import { User } from "phosphor-react";
import { Lock } from "phosphor-react";

export function Home() {
  return (
    <section className="container-home">
      <div className="container-find-hunger">
        <h2>
          Bem-Vindo ao <br /> FIND-HUNGER!
        </h2>
        <h5>Crie sua conta agora mesmo.</h5>
        <button className="button-cad">Cadastro</button>
      </div>

      <div className="container-login">
        <div className="container-login-auth">
          <h3 className="title-container-login">Acesse sua conta</h3>
          <p className="subtitle-container-login">Preencha seus dados</p>
          <form className="container-form" action="">
            <div className="input-email-senha">
              <div className="input-email">
                <Input type="" placeholder="Email" icons={<User />} />
              </div>

              <div className="input-senha">
                <Input type="" placeholder="Senha" icons={<Lock />} />
              </div>
            </div>
          </form>
          <div className="div-button-open">
            <button className="button-open">Entrar</button>
          </div>

          <a className="link-password" href="">
            Esqueceu a sua senha?
          </a>
        </div>
      </div>
    </section>
  );
}
