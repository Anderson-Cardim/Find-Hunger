import { FooterPrincipal } from "../../components/FooterPrincipal/FooterPrincipal";
import { HeaderPrincipal } from "../../components/HeaderPrincipal/HeaderPrincipal";
import styles from "./PerfilProfissional.module.css";
import { CaretLeft } from "phosphor-react";
import imgemPerfil from "../../assets/Profissional-c1.png";
import imgGaleria1 from "../../assets/imagemDeObra2.png";
import imgGaleria2 from "../../assets/ImagemDeObra4.png";
import imgGaleria3 from "../../assets/ImagemDeObra5.png";
// import { Tabela } from "../../components/Tabela/Tabela";
import { Link } from "react-router-dom";

export function PerfilProfissional() {
  return (
    <>
      <body>
        <header>
          <HeaderPrincipal />
        </header>
 
        <main className={styles.corpo}>
        <Link to="/PaginaSecundaria" className={styles.LinkIconi}>
          <i className={styles.Iconi}><CaretLeft size={32} /></i>
        </Link>
          <label className={styles.Picture}>
            <img className={styles.imagemPerfil} src={imgemPerfil} alt="" />
          </label>
          <h2>Marcio</h2>

          <div className={styles.BioDoPerfil}>
            <h2>Mestre de obras</h2>
            <p>
              Mestre de obra mestre de obra mestre de obra mestre de obra mestre
              de obra mestre de obra mestre de obra
            </p>
          </div>

          <div className={styles.ContainerInputsImagens}>
            <label className={styles.PictureGaleria}>
              <img className={styles.imagemGaleriaG} src={imgGaleria1} alt="" />
            </label>
            <div>
              <label className={styles.PictureMenor}>
                <img
                  className={styles.imagemGaleriaM}
                  src={imgGaleria2}
                  alt=""
                />
              </label>
              <label className={styles.PictureMenor}>
                <img
                  className={styles.imagemGaleriaM}
                  src={imgGaleria3}
                  alt=""
                />
              </label>
            </div>
          </div>

          {/* <Tabela/> */}
        </main>

        <footer>
          <FooterPrincipal />
        </footer>
      </body>
    </>
  );
}
