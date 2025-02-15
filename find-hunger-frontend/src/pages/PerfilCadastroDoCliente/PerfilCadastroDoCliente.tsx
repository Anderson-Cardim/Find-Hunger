import styles from "./PerfilCadastroDoCliente.module.css";
import { HeaderPrincipal } from "../../components/headerPrincipal/HeaderPrincipal";
import { FooterPrincipal } from "../../components/footerPrincipal/FooterPrincipal";
import { Camera } from "phosphor-react";
import { useState, useRef, useContext } from "react";
import { convertFilesToBase64 } from "../../utils/converterFileBase64";
import { AuthContext } from "../../context/authContext";
import { putLoginCliente } from "../../services/login";

export function PerfilCadastroDoCliente() {
    const { usuario } = useContext(AuthContext);
  
  const [imagemPerfil, setImagemPerfil] = useState<string | null>(null);
  const inputPerfilRef = useRef<HTMLInputElement>(null);
  
  const handleImageChange = async (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const file = event.target.files?.[0];
      if (file && usuario) {
        const [imagemBase64] = await convertFilesToBase64([file]);
        setImagemPerfil(imagemBase64);
        await putLoginCliente(usuario?.id, {
          ...usuario,
          imagem03: imagemBase64,
        });
      }
    };

  return (
    <>
      <body>
        <header>
          <HeaderPrincipal />
        </header>
        <main className={styles.ContainerMain}>
          
          {/* <div className={styles.blocoimgsair}>
            <label className={styles.Picture}>
              <input
                type="file"
                accept="image/*"
                className={styles.PictureInput}
                ref={inputPerfilRef}
                onChange={handleImageChange}
              />
              <div className={styles.ContainerIconiTexto}>
                {imagemPerfil ? (
                  <img 
                  src={imagemPerfil} 
                  alt="Imagem de perfil" 
                  className={styles.ImagemPreview} />
                ) : (
                  <Camera className={styles.iconi} size={40} color="#ff4900" />
                )}
              </div>
            </label>
          </div> */}

          <div className={styles.blocoimgsair}>
            <label className={styles.Picture}>
              <input
                type="file"
                accept="image/*"
                className={styles.PictureInput}
                ref={inputPerfilRef}
                onChange={(e) => handleImageChange(e)}
              />
              <div className={styles.ContainerIconiTexto}>
                {imagemPerfil ? (
                  <img
                    src={imagemPerfil}
                    alt="Imagem de capa"
                    className={styles.ImagemPreview}
                  />
                ) : (
                  <Camera className={styles.iconi} size={40} color="#ff4900" />
                )}
              </div>
            </label>
          </div>

          <form>
            <h3 className={styles.Titulos}>Informações Pessoais</h3>

            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <h4>Nome completo</h4>
                <p>{usuario?.nome}</p>
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>

            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <h4>Email</h4>
                <p>{usuario?.usuario}</p>
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>
          </form>

          <div className={styles.ContainerButtons}>
            <div className={styles.ContainerSalvar}>
              <button>Salvar</button>
            </div>
          </div>
        </main>

        <footer className={styles.ContainerFooter}>
          <FooterPrincipal />
        </footer>
      </body>
    </>
  );
}
