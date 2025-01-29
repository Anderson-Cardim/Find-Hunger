import styles from './HeaderPrincipal.module.css'
import ImagemLogo from '../../assets//LogoPrincipal.png'

export function HeaderPrincipal() {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.divimglogo}>
        <img className={styles.imagemLogo} src={ImagemLogo} alt="EunaService" />
      </div>
    </header>
  )
}
