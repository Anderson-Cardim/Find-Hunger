import { FooterPrincipal } from "../../components/FooterPrincipal/FooterPrincipal";
import { HeaderPrincipal } from "../../components/HeaderPrincipal/HeaderPrincipal";
import { InputPesquisar } from "../../components/InputPesquisar/InputPesquisar";

import styles from "./PaginaPrincipal.module.css";
import { Carrosel } from "../../components/Carrossel1/Carrosel";
import { MapaEmpresa } from "../../components/MapaEmpresa/MapaEmpresa";
import { BannerPrincipal } from "../../components/BannerPrincipal/BannerPrincipal";

import ImgHamburger  from "../../assets/ImgHamburguer2.png";
import ImgPizza  from "../../assets/imgPizza1.png";
import ImgBatataFrita from "../../assets/ImgBatataFrita3.png";
import ImgRefrigerants from "../../assets/ImgRefrigerante4.png";

const categorias = [
  { nome: "Hamburguer", image: ImgHamburger },
  { nome: "Pizzas", image: ImgPizza },
  { nome: "Batatas", image: ImgBatataFrita },
  { nome: "Bebidas", image: ImgRefrigerants },
];

export function PaginaPrincipal() {
  return (
    <>
      <body>
        <header>
          <HeaderPrincipal />
        </header>
        <main className={styles.corpo}>
          <InputPesquisar />
          <BannerPrincipal />
          <Carrosel data={categorias} />
          <MapaEmpresa />
        </main>
        <footer>
          <FooterPrincipal />
        </footer>
      </body>
    </>
  );
}
