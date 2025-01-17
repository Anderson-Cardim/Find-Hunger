import styles from './cadProduto.module.css'

import { HeaderPrincipal } from '../../components/HeaderPrincipal/HeaderPrincipal';

export function CadProduto() {
  return (
    <>
    <HeaderPrincipal/>
    <main className={styles.ContainerPrincipal}>
      <div className={styles.containerCadastro}>
        <h3>Cadastre seu produto</h3>
        <form className={styles.containerForm} action="">
          <div className={styles.ContainerInput}>
            <p>Nome do produto</p>
            <input type="text" placeholder='Bolo'/>
            <hr />
          </div>
        </form>
      </div>
    </main>
    </>
  );
}
