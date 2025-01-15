import styles from "./Step1.module.css"
import imagemCliente from "../../assets/client 1.png"
import imagemProfissional from "../../assets/market 1.png"

export function Step1() {
  return (
    <>
      <header className={styles.cabecalho}>
        <h2 className={styles.titulo}>Bem-Vindo</h2>
        <p className={styles.subTitulo}>Para obter uma melhor experiência no <br /> EunaService, nós queremos saber um <br /> pouco sobre você!</p>
      </header>
      <main>
        <div className={styles.ContainerComercianteCliente}>
          <div className={styles.DivImagemCliente}>
            <div className={styles.ImagemCliente}>
              <img src={imagemCliente} alt="" />
            </div>
            <p className={styles.paragrafoCliente}>Sou Cliente</p>
          </div>
          <div className={styles.DivImagemDoProfissional}>
            <div className={styles.ImagemProfissional}>
              <img src={imagemProfissional} alt="" />
            </div>
            <p className={styles.paragrafoProfissional}>Sou Profissional</p>
          </div>
        </div>
        <div className={styles.Botoes}>
          <button className={styles.BotaoProximo}>
            Próximo
          </button>
          <button className={styles.BotaoVoltar}>
            Voltar
          </button>
        </div>
      </main>
    </>
  )
}
