import { BannerPrincipal2 } from "../../components/BannerPrincipal2/BannerPrincipal2"
import { Contratos } from "../../components/Contratos/Contratos"
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
        <BannerPrincipal2 />
        <Contratos />
      </main>

      <footer>
        <FooterPrincipal />
      </footer>
    </body>
    </>
  )
}
