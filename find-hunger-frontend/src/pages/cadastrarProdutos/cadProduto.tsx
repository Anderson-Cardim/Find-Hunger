import styles from "./cadProduto.module.css";
import { HeaderPrincipal } from "../../components/headerPrincipal/HeaderPrincipal";
import { CreditCard, Money, Plus } from "phosphor-react";
import { FooterPrincipal } from "../../components/footerPrincipal/FooterPrincipal";
import { useState } from "react";
import { PixLogo } from "@phosphor-icons/react";
import { postCadastroProduto } from "../../services/produtos";

export function CadProduto() {
  
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  // const [imagens, setImagens] = useState<File[]>([]);

  async function handleCadastro(event) {
    event.preventDefault();
    
    console.log("Nome:", nome);
    console.log("descricao:", descricao);
    console.log("quantidade:", quantidade);
    // console.log("imagem:", imagens);

    if (!nome || !descricao || !quantidade || !preco) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
          const result = await postCadastroProduto({
            nome: nome,
            descricao: descricao,
            preco: preco,
            // imagens: imagens,
            quantidade: quantidade,
          });
          if (result) {
            console.log("Produto cadastrado:", { nome, preco, quantidade });
          }
        } catch (error) {
          console.error("Erro ao cadastrar produto:", error);
        }
  }

  return (
    <>
      <header className={styles.ContainerHeader}>
        <HeaderPrincipal />
      </header>
      <main className={styles.ContainerPrincipal}>
        <div className={styles.containerCadastro}>
          <h3>Cadastre seu produto</h3>
          <form
            className={`${styles.containerForm} ${styles.ContainerFinal}`}
            action=""
          >
            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <p>Nome do produto</p>
                <input 
                  type="text" 
                  placeholder="adicione aqui" 
                  onChange={(event) => {
                    setNome(event.target.value);
                  }}
                />
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>

            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <p>Descrição do produto</p>
                <input 
                  type="text" 
                  placeholder="Descrição do produto..." 
                  onChange={(event) => {
                    setDescricao(event.target.value);
                  }}
                />
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>

            <div className={styles.ContainerSecundario}>
              <h2>Preço</h2>
              <div className={styles.ContainerTabelaPreco}>
                <div className={styles.ContainerPerco}>
                  <div className={styles.ContainerValor}>
                    <div className={styles.ContainerTextoInput}>
                      <p>Valor (R$)</p>
                      <input
                        type="text"
                        id="valor"
                        placeholder="R$ 0,00"
                        value={preco}
                        onChange={(event) => {
                          setPreco(event.target.value);
                        }}
                      />
                    </div>
                    <div className={styles.ContainerLinhaLinha}>
                      <hr />
                    </div>
                  </div>
                </div>

                <div className={styles.ContainerPagamento}>
                  <div className={styles.ContainerTextoInput}>
                    <div className={styles.containerPagamento}>
                      <div className={styles.containerTitulo}>
                        <div className={styles.linha}></div>
                        <p className={styles.titulo}>Pagamento</p>
                        <div className={styles.linha}></div>
                      </div>
                      <div className={styles.divPagamento}>
                        <button
                          className={`${styles.botaopix} ${styles.botao}`}
                        >
                          <PixLogo className={styles.icones} size={32} />
                          <p>PIX</p>
                        </button>
                        <button
                          className={`${styles.botaodinheiro} ${styles.botao}`}
                        >
                          <Money className={styles.icones} size={32} />
                          <p>Dinheiro</p>
                        </button>
                        <button
                          className={`${styles.botaocartao} ${styles.botao}`}
                        >
                          <CreditCard className={styles.icones} size={32} />
                          <p>Cartão C/D</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.ContainerSecundario}>
              <h2>Adicionar quantidade</h2>
              <div className={styles.ContainerQuantidade}>
                <div className={styles.ContainerTextoInput}>
                  <p>Quantidade</p>
                  <input type="number" placeholder="adicione aqui" 
                    onChange={(event) => {
                      setQuantidade(event.target.value);
                    }}
                  />
                </div>
                <div className={styles.ContainerLinha}>
                  <hr />
                </div>
              </div>
            </div>

            <div
              className={`${styles.ContainerSecundario} ${styles.ContainerTodasImagens}`}
            >
              <h2>Adicionar imagens</h2>
              <div className={styles.ContainerInputsImagens}>
                <label className={styles.Picture}>
                  <div className={styles.ContainerIconiTexto}>
                    <input
                      type="file"
                      accept="image/*"
                      className={styles.PictureInput}
                      // onChange={(event) => {
                      //   const files = Array.from(event.target.files);
                      //   setImagens(files);
                      // }}
                    />
                    <i>
                      <Plus size={22} color="#ff4900" />
                    </i>
                    <span className={styles.PictureImagem}>
                      Adicionar nova imagem
                    </span>
                  </div>
                </label>
                <div>
                  <label className={styles.PictureMenor}>
                    <input
                      type="file"
                      accept="image/*"
                      className={styles.PictureInput}
                      // onChange={(event) => {
                      //   const files = Array.from(event.target.files);
                      //   setImagens(files);
                      // }}
                    />
                    <div className={styles.ContainerIconiTexto}>
                      <i>
                        <Plus size={22} color="#ff4900" />
                      </i>
                      <span className={styles.PictureImagem}>
                        Adicionar nova imagem
                      </span>
                    </div>
                  </label>
                  <label className={styles.PictureMenor}>
                    <input
                      type="file"
                      accept="image/*"
                      className={styles.PictureInput}
                      // onChange={(event) => {
                      //   const files = Array.from(event.target.files);
                      //   setImagens(files);
                      // }}
                    />
                    <div className={styles.ContainerIconiTexto}>
                      <i>
                        <Plus size={22} color="#ff4900" />
                      </i>
                      <span className={styles.PictureImagem}>
                        Adicionar nova imagem
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className={styles.ContainerFinalizar}>
              <button onClick={handleCadastro}>Finalizar</button>
            </div>
          </form>
        </div>
      </main>
      <footer className={styles.ContainerFooter}>
        <FooterPrincipal />
      </footer>
    </>
  );
}
