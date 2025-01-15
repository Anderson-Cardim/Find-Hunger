import { FooterPrincipal } from '../../components/FooterPrincipal/FooterPrincipal'
import { HeaderPrincipal } from '../../components/HeaderPrincipal/HeaderPrincipal'
import styles from './Step2.module.css'

export function Step2() {
  return (
    <>
      <HeaderPrincipal />
        <main className={styles.corpo}>
          <input type="search" name="PesquisarServicos" id="PesquisarServicos" className={styles.PesquisarServicos} placeholder='Serviços ou Profissionais' />
        </main>
      <FooterPrincipal />
    </>
  )
}