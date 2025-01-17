import styles from './FooterPrincipal.module.css'
import { House } from '@phosphor-icons/react/dist/ssr'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr' 
import { Plus } from '@phosphor-icons/react/dist/ssr'
import { TextColumns } from '@phosphor-icons/react/dist/ssr'
import { User } from '@phosphor-icons/react/dist/ssr'

export function FooterPrincipal() {         
  return (
    <footer className={styles.rodape}>
        <a href="#">
          <i className={styles.House}><House size={32} /></i>
        </a>
        <a href="#">
          <i className={styles.Lupa}><MagnifyingGlass size={32} /></i>
        </a>
        <a href="#">
          <i className={styles.Plus}><Plus size={32} /></i>
        </a>
        <a href="#">
          <i className={styles.Colum}><TextColumns size={32} /></i>
        </a>
        <a href="#">
          <i className={styles.User}><User size={32} /></i>
        </a>
    </footer>
  )
}
