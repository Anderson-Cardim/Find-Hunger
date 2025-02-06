import styles from './cadProduto.module.css';
import { HeaderPrincipal } from '../../components/HeaderPrincipal/HeaderPrincipal';
import { Plus } from 'phosphor-react';
import { FooterPrincipal }  from '../../components/FooterPrincipal/FooterPrincipal';

export function CadProduto() {
  return (
    <>
    <header className={styles.ContainerHeader}>
      <HeaderPrincipal/>
    </header>
    <main className={styles.ContainerPrincipal}>
      <div className={styles.containerCadastro}>
        <h3>Cadastre seu produto</h3>
        <form className={`${styles.containerForm} ${styles.ContainerFinal}`} action="">
          <div className={styles.ContainerInput}>
            <div className={styles.ContainerTextoInput}>
              <p>Nome do produto</p>
              <input type="text" placeholder='adicione aqui'/>
            </div>
            <div className={styles.ContainerLinha}>
              <hr />
            </div>
          </div>
          <div className={styles.ContainerInput}>
            <div className={styles.ContainerTextoInput}>
              <p>Descrição do produto seu produto</p>
              <input type="text" placeholder='Descrição do produto...'/>
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
                    <input type="number" placeholder='adicione aqui'/>
                  </div>
                  <div className={styles.ContainerLinhaLinha}>
                    <hr />
                  </div>
                </div>
                <div className={styles.ContainerDesconto}>
                    <div className={styles.ContainerTextoInput}>
                      <p>Desconto (%)</p>
                      <input type="number" placeholder='adicione aqui'/>
                    </div>
                    <div className={styles.ContainerLinhaLinha}>
                      <hr />
                    </div>
                </div>
              </div>
  
              <div className={styles.ContainerPagamento}>
                <div className={styles.ContainerTextoInput}>
                  <p>Pagamento</p>
                  <input type="text" placeholder='adicione aqui'/>
                </div>
                  <div className={styles.ContainerLinha}>
                      <hr />
                  </div>
              </div>
            </div>
          </div>


          <div className={styles.ContainerSecundario}>
          <h2>Adicionar quantidade</h2>
          <div className={styles.ContainerQuantidade}>
                <div className={styles.ContainerTextoInput}>
                  <p>Quantidade</p>
                  <input type="number" placeholder='adicione aqui'/>
                </div>
                  <div className={styles.ContainerLinha}>
                      <hr />
                  </div>
              </div>
          </div>
              
          <div className={ `${styles.ContainerSecundario} ${styles.ContainerTodasImagens}` }>
          <h2>Adicionar quantidade</h2>
            <div className={styles.ContainerInputsImagens}>
              <label className={styles.Picture}>
              <div className={styles.ContainerIconiTexto}>
                    <input type="file" accept='imagem/*' className={styles.PictureInput}/>
                    <i><Plus size={22} color="#ff4900" /></i>
                    <span className={styles.PictureImagem}>Adiciona nova imagem</span>
                  </div>
              </label>
              <div>
                <label className={styles.PictureMenor}>
                <input type="file" accept='imagem/*' className={styles.PictureInput}/>
                <div className={styles.ContainerIconiTexto}>
                    <i><Plus size={22} color="#ff4900" /></i>
                    <span className={styles.PictureImagem}>Adiciona nova imagem</span>
                  </div>
                </label>
                <label className={styles.PictureMenor}>
                  <input type="file" accept='imagem/*' className={styles.PictureInput}/>
                  <div className={styles.ContainerIconiTexto}>
                    <i><Plus size={22} color="#ff4900" /></i>
                    <span className={styles.PictureImagem}>Adiciona nova imagem</span>
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
        <FooterPrincipal/>
      </footer>
    </>
  );
}
