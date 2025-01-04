import { BotaoVoltar } from "../../components/botaoVoltar/voltar";
import { Cabecalho } from "../../components/cabecalhoPagina/Cabecalho";
import { Input } from "../../components/Input/Input";
import "./cadClient.css";
import { User } from "phosphor-react";


export function CadastroCliente() {
  return (
    <header>
      <Cabecalho />

      <BotaoVoltar />

      <div className="containerCadastro">
        <h2>Cadastro do Cliente</h2>
        <form className="containerForm" action="">
          <div className="InputInput">
            <Input type="" placeholder="Nome completo:" icons={<User />} />
          </div>
          <div className="InputInput">
            <Input type="" placeholder="Email:" icons={<User />} />
          </div>
          <div className="InputInput">
            <Input type="" placeholder="Crie sua senha:" icons={<User />} />
          </div>
          <div className="InputInput">
            <Input type="" placeholder="Confirmar senha" icons={<User />} />
          </div>
          <div className="InputInput">
            <button className="buttonCad">Cadastre-se</button>
          </div>
        </form>
      </div>
    </header>
  );
}
