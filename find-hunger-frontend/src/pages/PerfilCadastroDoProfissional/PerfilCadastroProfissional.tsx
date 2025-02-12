import styles from "./PerfilCadastroProfissional.module.css";
import { HeaderPrincipal } from "../../components/headerPrincipal/HeaderPrincipal";
import { FooterPrincipal } from "../../components/footerPrincipal/FooterPrincipal";
import { Camera } from "phosphor-react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
// import { ArrowFatLinesRight } from '@phosphor-icons/react'

export function PerfilCadastroProfissional() {
  const { usuario } = useContext(AuthContext);

  return (
    <>
      <body>
        <header>
          <HeaderPrincipal />
        </header>
        <main className={styles.ContainerMain}>
          
          <div className={styles.blocoimgsair}>
            <label className={styles.Picture}>
              <input
                type="file"
                accept="imagem/*"
                className={styles.PictureInput}
              />
              <div className={styles.ContainerIconiTexto}>
                <i>
                  <Camera size={40} color="#ff4900" />
                </i>
              </div>
            </label>
          </div>    

          <div className={styles.blocoimgsair01}>
            <label className={styles.Picture01}>
              <input
                type="file"
                accept="imagem/*"
                className={styles.PictureInput}
              />
              <div className={styles.ContainerIconiTexto}>
                <i>
                  <Camera size={40} color="#ff4900" />
                </i>
              </div>
            </label>
          </div>


          <form action="">
            <h3 className={styles.Titulos}>Informações Pessoais</h3>
            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <h4>Nome completo</h4>
                <p>{usuario?.nome}</p>
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>

            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <h4>CPF ou CNPJ</h4>
                <p>{usuario?.cpf}</p>
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>

            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <h4>Telefone de contato</h4>
                <p>{usuario?.numero}</p>
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>

            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <h4>Email</h4>
                <p>{usuario?.usuario}</p>
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>


            <h3 className={styles.Titulos}>Informações de Negócio</h3>
            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <h4>Nome do estabelecimento</h4>
                <p>{usuario?.estabelecimento}</p>
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>

            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <h4>Breve descrição do negócio</h4>
                <p>{usuario?.descricao}</p>
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>

            {/* Localização */}
            <h3 className={styles.Titulos}>Localização</h3>
            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <h4>Endereço ou ponto de venda fixo</h4>
                <p>{usuario?.endereco}</p>
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>

            {/* Métodos de Pagamento Aceitos */}
            <h3 className={styles.Titulos}>Métodos de Pagamento Aceitos</h3>

            {/* Horário de Funcionamento */}
            <h3 className={styles.Titulos}>Horário de Funcionamento</h3>
            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <h4>Dias e horários em que atende os clientes</h4>
                <p></p>
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>
          </form>

          <div className={styles.ContainerButtons}>
            <div className={styles.ContainerSalvar}>
              <button>Salvar</button>
            </div>
          </div>
        </main>

        <footer className={styles.ContainerFooter}>
          <FooterPrincipal />
        </footer>
      </body>
    </>
  );
}
