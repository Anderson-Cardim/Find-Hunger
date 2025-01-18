import styles from './PerfilCliente.module.css'
import { HeaderPrincipal } from '../../components/HeaderPrincipal/HeaderPrincipal'
import { FooterPrincipal } from '../../components/FooterPrincipal/FooterPrincipal'
import { Camera } from 'phosphor-react'

export function PerfilCliente() {
    return (
        <>
        <body>
            <header>
                    <HeaderPrincipal/>
            </header>
            <main className={styles.ContainerMain}>
                <label className={styles.Picture}>
                    <input type="file" accept='imagem/*' className={styles.PictureInput}/>
                    <div className={styles.ContainerIconiTexto}>
                        <i><Camera size={40} color="#ff4900" /></i>
                  </div>
                </label>
            </main>

            <footer className={styles.ContainerFooter}>
                <FooterPrincipal/>
            </footer>
        </body>
        </>
    )
}