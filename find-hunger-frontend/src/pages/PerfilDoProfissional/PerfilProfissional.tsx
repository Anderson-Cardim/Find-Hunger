import { FooterPrincipal } from "../../components/FooterPrincipal/FooterPrincipal"
import { HeaderPrincipal } from "../../components/HeaderPrincipal/HeaderPrincipal"
import styles from './PerfilProfissional.module.css'
import { CaretLeft } from "phosphor-react"  
// import imgemPerfil from '../../assets/Profissional-c1.png'
import imagem from '../../assets/image 4.svg'

export function PerfilProfissional() {
    return (
        <>
        <body>
            <header>
                <HeaderPrincipal />
            </header>

            <main className={styles.corpo}>
                    <i><CaretLeft size={32} /></i>
                    <label className={styles.Picture}>
                        {/* <img src={imgemPerfil} alt="" /> */}
                    </label>
                <h2>Marcio</h2>

                <div className={styles.BioDoPerfil}>
                    <h2>Mestre de obras</h2>
                    <p>Mestre de obra mestre de obra mestre de obra mestre de obra mestre de obra mestre de obra mestre de obra</p>
                </div>

                <div className={ `${styles.ContainerSecundario} ${styles.ContainerTodasImagens}` }>
                <h2>Adicionar quantidade</h2>
                    <div className={styles.ContainerInputsImagens}>
                        <label className={styles.Picture}>
                            <div className={styles.ContainerIconiTexto}>
                                <img src={imagem} alt="" />
                            </div>
                        </label>
                        <div>
                            <label className={styles.PictureMenor}>
                                <div className={styles.ContainerIconiTexto}></div>
                            </label>
                        <label className={styles.PictureMenor}>
                            <div className={styles.ContainerIconiTexto}></div>
                        </label>
                        </div>
                    </div>
                </div>

            </main>

            <footer>
                <FooterPrincipal />
            </footer>
        </body>
        </>
    )
}