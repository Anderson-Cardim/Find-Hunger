import { PerfilFoto } from "../../components/perfilFoto/PerfilFoto";
import imagemPerfil from "../../assets/Ellipse 290.svg";
import { InputPerfil } from "../../components/inputPerfil/inputPerfil";
import { CabecalhoPerfil } from "../../components/cabecalhoPerfil/CabecalhoPerfil"

import "./PerfilComerciante.css";

export function PerfilComerciante() {
  return (
    <div className="ContainerPerfil">
      <CabecalhoPerfil />
      <div className="PerfilCorpor">
        <h1>Meu Perfil</h1>
        <h3>Dados do usuário</h3>
        <hr />
      </div>
      <div className="PerfilImagem">
        <PerfilFoto img={imagemPerfil} />
      </div>

      <div className="Botoes">
        <div className="Input">
          <InputPerfil
            type="email"
            placeholder="Ex:matheus@gmail.com"
            title="Login"
          />
          <InputPerfil
            type="string"
            placeholder="Ex: 40028922"
            title="Telefone"
          />
          <InputPerfil
            type="name"
            placeholder="Ex:Sonho Doce"
            title="Estabelecimento"
          />
          <div className="ContainerSalvar">
            <button>Salvar</button>
          </div>
        </div>
        
        <div className="InputInput">
          <div className="ContainerAlterarSenha">
            <button className="botoes">Alterar Senha</button>
          </div>
          <InputPerfil type="string" placeholder="CPF/CNPJ" title="CPF/CNPJ" />
        </div>
      </div>
    </div>
  );
}
