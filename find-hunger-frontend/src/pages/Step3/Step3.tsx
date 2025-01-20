import { FooterPrincipal } from "../../components/FooterPrincipal/FooterPrincipal"
import { HeaderPrincipal } from "../../components/HeaderPrincipal/HeaderPrincipal"
import { InputPesquisar } from "../../components/InputPesquisar/InputPesquisar"
import styles from "./Step3.module.css"

export function Step3() {
  return (
    <>
    <body>
      <header>
        <HeaderPrincipal />
      </header>
      
      <main className={styles.corpo}>
        <InputPesquisar />
      </main>

      <footer>
        <FooterPrincipal />
      </footer>
    </body>
    </>
  )
}