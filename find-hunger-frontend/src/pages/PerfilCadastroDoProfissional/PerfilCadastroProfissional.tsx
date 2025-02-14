import styles from "./PerfilCadastroProfissional.module.css";
import { HeaderPrincipal } from "../../components/headerPrincipal/HeaderPrincipal";
import { FooterPrincipal } from "../../components/footerPrincipal/FooterPrincipal";
import { Camera } from "phosphor-react";
import { useContext, useState, useRef } from "react";
import { AuthContext } from "../../context/authContext";
import { putLoginComerciante } from "../../services/login";
import { convertFilesToBase64 } from "../../utils/converterFileBase64";

export function PerfilCadastroProfissional() {
  const { usuario } = useContext(AuthContext);

  // Estados para armazenar as imagens em base64
  const [imagemPerfil, setImagemPerfil] = useState<string | null>(null);
  const [imagemCapa, setImagemCapa] = useState<string | null>(null);

  // Referências para os inputs de arquivo
  const inputPerfilRef = useRef<HTMLInputElement>(null);
  const inputCapaRef = useRef<HTMLInputElement>(null);

  // // Função para manipular mudança no input
  // const handleImageChange = async (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const file = event.target.files?.[0];
  //   if (file && usuario) {
  //     const [imagemBase64] = await convertFilesToBase64([file]);
  //     setImagemPerfil(imagemBase64);
  //     await putLoginComerciante(usuario?.id, {
  //       ...usuario,
  //       imagem01: imagemBase64,
  //     });
  //   }
  // };

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && usuario) {
      const [novaImagemBase64] = await convertFilesToBase64([file]);
  
      // Verifica se já existe uma imagem01 e transforma em array
      const imagensAtuais = Array.isArray(usuario.imagem01) ? usuario.imagem01 : [usuario.imagem01];
  
      const novasImagens = [...imagensAtuais, novaImagemBase64]; // Adiciona a nova imagem
  
      setImagemPerfil(novaImagemBase64);
  
      await putLoginComerciante(usuario?.id, {
        ...usuario,
        imagem01: novasImagens, // Salva como um array
      });
    }
  };
  

  const handleImage02Change = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file && usuario) {
      const [imagemBase64] = await convertFilesToBase64([file]);
      setImagemCapa(imagemBase64);
      await putLoginComerciante(usuario?.id, {
        ...usuario,
        imagem02: imagemBase64,
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
          {/* Imagem de Perfil */}
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
                    alt="Imagem de perfil"
                    className={styles.ImagemPreviewPerfil}
                  />
                ) : (
                  <Camera className={styles.iconi} size={40} color="#ff4900" />
                )}
              </div>
            </label>
          </div>

          {/* Imagem de Capa */}
          <div className={styles.blocoimgsair01}>
            <label className={styles.Picture01}>
              <input
                type="file"
                accept="image/*"
                className={styles.PictureInput}
                ref={inputCapaRef}
                onChange={(e) => handleImage02Change(e)}
              />
              <div className={styles.ContainerIconiTexto}>
                {imagemCapa ? (
                  <img
                    src={imagemCapa}
                    alt="Imagem de capa"
                    className={styles.ImagemPreview}
                  />
                ) : (
                  <Camera size={40} color="#ff4900" />
                )}
              </div>
            </label>
          </div>


          {/* Informações Pessoais */}
          <form action="">
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
                <h4>CPF ou CNPJ</h4>
                <p>{usuario?.cpf}</p>
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>

            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <h4>Telefone de contato</h4>
                <p>{usuario?.numero}</p>
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

            <h3 className={styles.Titulos}>Informações de Negócio</h3>
            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <h4>Nome do estabelecimento</h4>
                <p>{usuario?.estabelecimento}</p>
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>

            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <h4>Breve descrição do negócio</h4>
                <p>{usuario?.descricao}</p>
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>

            {/* Localização */}
            <h3 className={styles.Titulos}>Localização</h3>
            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <h4>Endereço ou ponto de venda fixo</h4>
                <p>{usuario?.endereco}</p>
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>

            <h3 className={styles.Titulos}>Métodos de Pagamento Aceitos</h3>

            <h3 className={styles.Titulos}>Horário de Funcionamento</h3>
            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <h4>Dias e horários em que atende os clientes</h4>
                <p></p>
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
