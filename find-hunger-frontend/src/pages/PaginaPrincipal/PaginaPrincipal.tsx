import { FooterPrincipal } from "../../components/FooterPrincipal/FooterPrincipal";
import { HeaderPrincipal } from "../../components/HeaderPrincipal/HeaderPrincipal";
import { InputPesquisar } from "../../components/InputPesquisar/InputPesquisar";

import styles from "./PaginaPrincipal.module.css";
import { Carrosel } from "../../components/carrossel/Carrosel";
import { MapaEmpresa } from "../../components/papaEmpresa/MapaEmpresa";
import { BannerPrincipal } from "../../components/BannerPrincipal/BannerPrincipal";

import ImgHamburger from "../../assets/ImgHamburguer2.png";
import ImgPizza from "../../assets/imgPizza1.png";
import ImgBatataFrita from "../../assets/ImgBatataFrita3.png";
import ImgRefrigerants from "../../assets/ImgRefrigerante4.png";

import vendedor01 from "../../assets/vendedor01.jpg";
import vendedor02 from "../../assets/vendedor02.avif";
import vendedor03 from "../../assets/vendedor03.jpg";
import vendendora from "../../assets/vendedora.jpg";

const categorias = [
  { nome: "Hamburguer", image: ImgHamburger },
  { nome: "Pizzas", image: ImgPizza },
  { nome: "Batatas", image: ImgBatataFrita },
  { nome: "Bebidas", image: ImgRefrigerants },
];

const Comerciantes = [
  { nome: "João", image: vendedor01 },
  { nome: "Maria", image: vendendora },
  { nome: "Andrer", image: vendedor02 },
  { nome: "Pedro", image: vendedor03 },
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
          <Carrosel data={categorias} titulo={"Categoria de Produto"} />
          <Carrosel data={Comerciantes} titulo={"Comerciantes"} />
          <MapaEmpresa />
        </main>
        <footer>
          <FooterPrincipal />
        </footer>
      </body>
    </>
  );
}
