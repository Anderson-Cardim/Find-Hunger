import './PerfilCliente.css'
import { PerfilFoto } from "../../components/perfilFoto/PerfilFoto"
import imagemPerfil from '../../assets/img mulher.svg'
import { InputPerfil } from "../../components/inputPerfil/inputPerfil"
import { CabecalhoPerfil02 } from "../../components/cabecalhoPerfil02/CabecalhoPerfi02l";

export function PerfilCliente() {
    return (
        <div className="ContainerPerfil">
            <CabecalhoPerfil02/>
            <div className="PerfilCorpor">
                <h1>Meu Perfil</h1>
                <h3>Dados do usuário</h3>
                <hr />
            </div>
            <div className="PerfilImagem">
                <PerfilFoto
                   img={imagemPerfil}
                />
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
                        <button className='botoes'>Alterar Senha</button>
                    </div>
                    <InputPerfil
                        type="string"
                        placeholder="CPF/CNPJ"
                        title="CPF/CNPJ"
                    />

                </div>
            </div>

            </div>
    )
}