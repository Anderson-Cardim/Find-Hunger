import './cadProduto.css'
import { Cabecalho } from "../../components/cabecalhoPagina/Cabecalho";
import { BotaoVoltar } from "../../components/botaoVoltar/voltar";
import { Input } from "../../components/Input/Input";
import { Camera } from "phosphor-react";
import { PlusCircle } from "phosphor-react";
import { Money } from "phosphor-react";
import { List } from "phosphor-react";
import { PencilSimple } from "phosphor-react";

export function CadProduto() {
  return (
    <header>
      <Cabecalho />

      <BotaoVoltar />

      <div className="containerCadastro">
        <h2>Cadastre seu produto</h2>
        <form className="containerForm" action="">
          <div className="InputInput">
            <Input type="" placeholder="Nome do produto:" icons={<PencilSimple

/>} />
          </div>
          <div className="InputInput">
            <Input type="" placeholder="Opções de produto:" icons={<List />} />
          </div>
          <div className="InputInput">
            <Input type="" placeholder="Preço do produto:" icons={<Money />} />
          </div>
          <div className="InputInput">
            <Input type="" placeholder="Quantidade disponível:" icons={<PlusCircle

/>} />
          </div>
          <div className="InputInput">
            <Input type="" placeholder="Foto do produto:" icons={<Camera />} />
          </div>
          <div className="InputInput">
            <button className="buttonCad">Cadastrar</button>
          </div>
        </form>
      </div>
    </header>
  );
}
