
import { BannerPrincipal } from "../../components/bannerPrincipal/BannerPrincipal";
import { Contratos } from "../../components/contratos/Contratos";
import { FooterPrincipal } from "../../components/footerPrincipal/FooterPrincipal";
import { HeaderPrincipal } from "../../components/headerPrincipal/HeaderPrincipal";
import { InputPesquisar } from "../../components/inputPesquisar/InputPesquisar";
import styles from "./PaginaSecundaria.module.css";

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
  );
}
