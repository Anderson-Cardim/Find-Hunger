import styles from "./PerfilCadastroProfissional.module.css";
import { HeaderPrincipal } from "../../components/HeaderPrincipal/HeaderPrincipal";
import { FooterPrincipal } from "../../components/FooterPrincipal/FooterPrincipal";
import { Camera } from "phosphor-react";
// import { ArrowFatLinesRight } from '@phosphor-icons/react'

export function PerfilCadastroProfissional() {
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
            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <p>Nome</p>
                <input type="text" placeholder="adicione aqui" />
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>

            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <p>Produto</p>
                <input type="text" placeholder="adicione aqui" />
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>

            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <p>Descrição do produto seu produto</p>
                <input type="text" placeholder="Descrição do produto..." />
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>

            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <p>Telefone</p>
                <input type="text" placeholder="adicione aqui" />
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>
          </form>

          <div className={styles.ContainerButtons}>
            {/* <div className={styles.ContainerAdicionarNovoProduto}>
                            <button>Adicionar novo produto</button>
                        </div> */}

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
