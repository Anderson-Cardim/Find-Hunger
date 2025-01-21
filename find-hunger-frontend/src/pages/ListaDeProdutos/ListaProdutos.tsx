import { FooterPrincipal } from "../../components/FooterPrincipal/FooterPrincipal"
import { HeaderPrincipal } from "../../components/HeaderPrincipal/HeaderPrincipal"
import styles from './ListaProdutos.module.css'

export function ListaProdutos() {
    return (
        <>
        <body>
            <header>
                <HeaderPrincipal />
            </header>
      
            <main className={styles.corpo}>
                <h1>Lista de serviços</h1>
            </main>

            <footer>
                <FooterPrincipal />
            </footer>
        </body>
        </>
    )
}