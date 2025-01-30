import { FooterPrincipal } from "../../components/FooterPrincipal/FooterPrincipal";
import { HeaderPrincipal } from "../../components/HeaderPrincipal/HeaderPrincipal";
import styles from "./PerfilProfissional.module.css";
import { CaretLeft } from "phosphor-react";
// import imgemPerfil from "../../assets/Profissional-c1.png";
import imgGaleria1 from "../../assets/imagemDeObra2.png";
import imgGaleria2 from "../../assets/ImagemDeObra4.png";
import imgGaleria3 from "../../assets/ImagemDeObra5.png";
import { Tabela } from "../../components/Tabela/Tabela";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfissionalById, PerfilProfissionalApiResponse } from "../../services/profissional";



export function PerfilProfissional() {
  const params = useParams();
  const [data, setData] = useState<PerfilProfissionalApiResponse>();
  const [isLoading, setIsLoading] = useState(false);


  const getData = async () => {
    setIsLoading(true);
    try {
      if (!params?.id) return;
      const result: PerfilProfissionalApiResponse | null = await getProfissionalById(Number(params?.id));
      if (!result) return;
      setData(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    console.log(params);
    getData();
  }, []);

  return (
    <>
      {isLoading ? <p>Carregando...</p> : (

      <body>
        <header>
          <HeaderPrincipal />
        </header>
 
        <main className={styles.corpo}>
        <Link to="/PaginaSecundaria" className={styles.LinkIconi}>
          <i className={styles.Iconi}><CaretLeft size={32} /></i>
        </Link>
          <label className={styles.Picture}>
            <img className={styles.imagemPerfil} src={data?.urlImagem ?? ""} alt="" />
          </label>
          <h2>{data?.nome ?? ""}</h2>

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

          <Tabela/>
        </main>

        <footer>
          <FooterPrincipal />
        </footer>
      </body>
      )}
    </>
  );
}
