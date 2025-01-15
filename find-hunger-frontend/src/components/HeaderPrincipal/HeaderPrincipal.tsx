import styles from './HeaderPrincipal.module.css'
import ImagemLogo from '../../assets//Logo.png'

export function HeaderPrincipal() {
  return (
    <header className={styles.cabecalho}>
      <img className={styles.imagemLogo} src={ImagemLogo} alt="EunaService" />
    </header>
  )
}