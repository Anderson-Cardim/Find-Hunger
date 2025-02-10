import { BannerPrincipal } from "../../components/BannerPrincipal/BannerPrincipal"
import { Contratos } from "../../components/Contratos/Contratos"
import { FooterPrincipal } from "../../components/FooterPrincipal/FooterPrincipal"
import { HeaderPrincipal } from "../../components/HeaderPrincipal/HeaderPrincipal"
import { InputPesquisar } from "../../components/InputPesquisar/InputPesquisar"
import styles from "./PaginaSecundaria.module.css"

export function PaginaSecundaria() {
  return (
    <>
    <body>
      <header>
        <HeaderPrincipal />
      </header>
      
      <main className={styles.corpo}>
        <InputPesquisar />
        <BannerPrincipal />
        <Contratos />
      </main>

      <footer>
        <FooterPrincipal />
      </footer>
    </body>
    </>
  )
}
