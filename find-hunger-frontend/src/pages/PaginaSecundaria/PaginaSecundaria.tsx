
import { BannerPrincipal } from "../../components/bannerPrincipal/BannerPrincipal";
import { Contrato01 } from "../../components/contratos/Contrato01";
// import { Contratos } from "../../components/contratos/Contratos";
import { FooterPrincipal } from "../../components/footerPrincipal/FooterPrincipal";
import { HeaderPrincipal } from "../../components/headerPrincipal/HeaderPrincipal";
import { InputPesquisar } from "../../components/inputPesquisar/InputPesquisar";
import styles from "./PaginaSecundaria.module.css";
import fotoPerfil from "../../assets/Profissional-c1.png";
import imagemPipoca01 from '../../assets/imgPipoca01.jpg';
import imagemPipoca02 from '../../assets/imgPipoca02.jpg';
import imgPipoca03 from '../../assets/pimgPipoca03.avif';
import imgPipoca04 from '../../assets/imgPipoca04.png';

import fotoPerfil02 from '../../assets/Profissional-c3.png';
import imgSuco01 from '../../assets/imgSuco01.jpg';
import imgSuco02 from '../../assets/imgSuco02.jpg';
import imgSuco03 from '../../assets/imgSuco03.jpg';
import imgSuco04 from '../../assets/imgSuco04.avif';
import imgSuco05 from '../../assets/imgSuco05.jpg';

import fotoPerfil03 from '../../assets/vendedor01.jpg';
import imgSalgado from '../../assets/imgSalgado01.jpeg';
import imgSalgado02 from '../../assets/imgSalgado02.jpg';
import imgSalgado03 from '../../assets/imgSalgado03.jpg';
import imgSalgado04 from '../../assets/imgSalgado04.jpeg';
import imgSalgado05 from '../../assets/imgSalgado05.jpg';

import imagemPipoca05 from '../../assets/imgPipoca05.jpg';

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
          {/* <Contratos /> */}
          <Contrato01
            fotoPerfil={fotoPerfil03}
            nome="Marcio"
            profissao="Sabor na Rua"
            descricao="Sabor na Rua: Comida deliciosa, acessível e rápida para quem ama sabores autênticos na rua! 🚀🍔"
            preco="Centro"
            localizacao="Eunápolis"
            img1={imgSalgado}
            img2={imgSalgado02}
            img3={imgSalgado03}
            img4={imgSalgado04}
            img5={imgSalgado05}
          />

<Contrato01
            fotoPerfil={fotoPerfil02}
            nome="João"
            profissao="Suco na Hora"
            descricao="Suco na Hora: Sucos naturais, frescos e feitos na hora para refrescar seu dia! 🥭🍊🍹"
            preco="Juca Rosa"
            localizacao="Eunápolis"
            img1={imgSuco01}
            img2={imgSuco02}
            img3={imgSuco03}
            img4={imgSuco04}
            img5={imgSuco05}
          />

<Contrato01
            fotoPerfil={fotoPerfil}
            nome="Marcos"
            profissao="Pipoca Gourmet"
            descricao="Pipoca Gourmet: Pipocas artesanais com sabores irresistíveis para todos os gostos! 🍿✨"
            preco="Dinah Borges"
            localizacao="Eunápolis"
            img1={imagemPipoca01}
            img2={imagemPipoca02}
            img3={imgPipoca03}
            img4={imgPipoca04}
            img5={imagemPipoca05}
          />
        </main>

        <footer>
          <FooterPrincipal />
        </footer>
      </body>
    </>
  );
}
