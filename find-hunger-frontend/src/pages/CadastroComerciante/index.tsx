import "./cadClient.css";
import { Input } from "../../components/Input/Input";
import { Cadastro } from "../../components/botaoCadastro/Cadastro";
import { Cabecalho } from "../../components/cabecalhoPagina/Cabecalho";
import { BotaoVoltar } from "../../components/botaoVoltar/voltar";
import { User } from "phosphor-react";
import { Storefront } from "phosphor-react";
import { Envelope } from "phosphor-react";
import { MapPin } from "phosphor-react";
import { Phone } from "phosphor-react";




export function CadastroComerciante() {
  return (
    <header className="">
      <Cabecalho />
      <BotaoVoltar />

      <div className="conteinerCadastro">
        <h2>Cadastro do Comeciante</h2>
        <form className="containerForm" action="">
          <div className="InputInput">
            <Input type="" placeholder="Nome Completo:" icons={<User />} />
          </div>
          <div className="InputInput">
            <Input className="InputInput" type="" placeholder="Nome do estabelecimento:" icons={<Storefront/>} />

          </div>
          <div className="InputInput">
            <Input className="InputInput" type="" placeholder="CPF ou CNPJ:" icons={<User />} />
          </div>
          <div className="InputInput">
            <Input className="InputInput" type="" placeholder="Número de telefone:" icons={<Phone />} />
          </div>
          <div className="InputInput">
            <Input className="InputInput" type="" placeholder="E-mail:" icons={<Envelope/>} />
          </div>
          <div className="InputInput">
            <Input className="InputInput" type="" placeholder="Ativar localização" icons={<MapPin/>} />
          </div>
            <Cadastro />
        </form>
      </div>
    </header>
  );
}
