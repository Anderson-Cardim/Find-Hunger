import styles from "./cadProduto.module.css";
import { HeaderPrincipal } from "../../components/HeaderPrincipal/HeaderPrincipal";
import { CreditCard, Money, Plus } from "phosphor-react";
import { FooterPrincipal } from "../../components/FooterPrincipal/FooterPrincipal";
import { ChangeEvent, useState } from "react";
import { PixLogo } from "@phosphor-icons/react";

export function CadProduto() {
  const [valor, setValor] = useState<string>("");
  const [desconto, setDesconto] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let valorInput = e.target.value.replace(/[^\d]/g, ""); // Apenas números

    if (valorInput.length > 0) {
      const valorFormatado = (parseFloat(valorInput) / 100).toLocaleString(
        "pt-BR",
        {
          style: "currency",
          currency: "BRL",
        }
      );
      setValor(valorFormatado);
    } else {
      setValor("");
    }
  };

  const handleInputChangeDesconto = (e: ChangeEvent<HTMLInputElement>) => {
    let descontoInput = e.target.value.replace(/[^\d,]/g, "");

    descontoInput = descontoInput.replace("%", "");

    const descontoNumber = parseFloat(descontoInput);

    if (!isNaN(descontoNumber) && descontoNumber > 100) {
      descontoInput = "100";
    }
    if (descontoInput.length > 0) {
      setDesconto(`${descontoInput}%`);
    } else {
      setDesconto("");
    }
  };

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
                <input type="text" placeholder="adicione aqui" />
              </div>
              <div className={styles.ContainerLinha}>
                <hr />
              </div>
            </div>

            <div className={styles.ContainerInput}>
              <div className={styles.ContainerTextoInput}>
                <p>Descrição do produto</p>
                <input type="text" placeholder="Descrição do produto..." />
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
                        value={valor}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className={styles.ContainerLinhaLinha}>
                      <hr />
                    </div>
                  </div>
                  <div className={styles.ContainerDesconto}>
                    <div className={styles.ContainerTextoInput}>
                      <p>Desconto (%)</p>
                      <input
                        type="text"
                        id="desconto"
                        placeholder="10%"
                        value={desconto}
                        onChange={handleInputChangeDesconto}
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
                  <input type="number" placeholder="adicione aqui" />
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
              <button>Finalizar</button>
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
