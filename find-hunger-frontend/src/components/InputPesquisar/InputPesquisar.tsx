import styles from './InputPesquisar.module.css'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr' 

export function InputPesquisar() {
  return (
        <div className={styles.Search}>
          <label htmlFor='searchInput'>
            <span className={styles.MaterialSymbolsOutlined}> <MagnifyingGlass/> </span>
          </label>
          <input type="text" className={styles.searchInput} placeholder='Pesquisar'/>
        </div>
  )
}

