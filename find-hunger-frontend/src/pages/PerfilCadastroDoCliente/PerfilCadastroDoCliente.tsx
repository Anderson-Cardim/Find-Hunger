import styles from "./PerfilCadastroDoCliente.module.css";
import { HeaderPrincipal } from "../../components/headerPrincipal/HeaderPrincipal";
import { FooterPrincipal } from "../../components/footerPrincipal/FooterPrincipal";
import { Camera } from "phosphor-react";
// import { ArrowFatLinesRight } from '@phosphor-icons/react'

export function PerfilCadastroDoCliente() {
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
            {/* <div className={styles.ContainerDivButtonSair}>
                            <button>Sair <ArrowFatLinesRight size={20} /></button>
                        </div> */}
          </div>

          {/* <div className={styles.ContainerDivButton}>
                        <button>Chat</button>
                    </div> */}
          <form action="">
          <h3 className={styles.Titulos}>Informações Pessoais</h3>
            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <h4>Nome completo</h4>
                {/* <p>{usuario?.nome}</p> */}
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>

            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <h4>Email</h4>
                {/* <p>{usuario?.usuario}</p> */}
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



