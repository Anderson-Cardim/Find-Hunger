import styles from "./PerfilCadastroDoCliente.module.css";
import { HeaderPrincipal } from "../../components/headerPrincipal/HeaderPrincipal";
import { FooterPrincipal } from "../../components/footerPrincipal/FooterPrincipal";
import { Camera } from "phosphor-react";
import { useState, useRef } from "react";

export function PerfilCadastroDoCliente() {
  const [imagemPerfil, setImagemPerfil] = useState<string | null>(null);
  const inputPerfilRef = useRef<HTMLInputElement>(null);

  // Função para converter um arquivo em base64
  const convertFileToBase64 = (file: File, setImage: (base64: string | null) => void) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.onerror = () => {
      console.error("Erro ao carregar a imagem.");
      setImage(null);
    };
    reader.readAsDataURL(file);
  };

  // Função para lidar com a seleção da imagem
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      convertFileToBase64(file, setImagemPerfil);
    }
  };

  return (
    <>
      <body>
        <header>
          <HeaderPrincipal />
        </header>
        <main className={styles.ContainerMain}>
          <div className={styles.blocoimgsair}>
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
                  <img src={imagemPerfil} alt="Imagem de perfil" className={styles.ImagemPreview} />
                ) : (
                  <Camera size={40} color="#ff4900" />
                )}
              </div>
            </label>
          </div>

          <form>
            <h3 className={styles.Titulos}>Informações Pessoais</h3>

            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <h4>Nome completo</h4>
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>

            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <h4>Email</h4>
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
