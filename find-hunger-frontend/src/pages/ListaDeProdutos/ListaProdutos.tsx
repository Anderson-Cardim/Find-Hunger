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
                    <div>
                        <h1>Lista de serviços</h1>
                    </div>
                    <select name="NPintura" id="NPintura" className={`${styles.selectP} ${styles.selectT}`}>
                        <option value="Pintura">
                            <p className={styles.opcaoServicos}>
                                Pintura
                            </p>
                        </option>
                    </select>
                    <select name="NEngenharia" id="NEngenharia" className={styles.selectP}>
                        <option value="Engenharia">
                            <p className={styles.opcaoServicos}>
                                Engenharia
                            </p>
                        </option>
                    </select>
                    <select name="NEletricista" id="NEletricista" className={styles.selectP}>
                        <option value="Eletricista">
                            <p className={styles.opcaoServicos}>
                                Eletricista
                            </p>
                        </option>
                    </select>
                    <select name="NMarcenaria" id="NMarcenaria" className={styles.selectP}>
                        <option value="Pintura">
                            <p className={styles.opcaoServicos}>
                                Marcenaria
                            </p>
                        </option>
                    </select>
                    <select name="NConsultoria" id="NConsultoria" className={styles.selectP}>
                        <option value="Pintura">
                            <p className={styles.opcaoServicos}>
                                Consultoria
                            </p>
                        </option>
                    </select>
                    <select name="NFaxineira" id="NFaxineira" className={styles.selectP}>
                        <option value="Pintura">
                            <p className={styles.opcaoServicos}>
                                Faxineira
                            </p>
                        </option>
                    </select>
                    <select name="NPedreiro" id="NPedreiro" className={styles.selectP}>
                        <option value="Pintura">
                            <p className={styles.opcaoServicos}>
                                Pedreiro
                            </p>
                        </option>
                    </select>
                    <select name="NEncanador" id="NEncanador" className={styles.selectP}>
                        <option value="Pintura">
                            <p className={styles.opcaoServicos}>
                                Encanador
                            </p>
                        </option>
                    </select>
                    <select name="NDiarista" id="NDiarista" className={styles.selectP}>
                        <option value="Pintura">
                            <p className={styles.opcaoServicos}>
                                Diarista
                            </p>
                        </option>
                    </select>
                    <select name="NArquiteto" id="NArquiteto" className={styles.selectP}>
                        <option value="Pintura">
                            <p className={styles.opcaoServicos}>
                                Arquiteto
                            </p>
                        </option>
                    </select>
                    <select name="NTecnico" id="NTecnico" className={styles.selectP}>
                        <option value="Pintura">
                            <p className={styles.opcaoServicos}>
                                Tecnico
                            </p>
                        </option>
                    </select>
                    <select name="NMontador" id="NMontador" className={styles.selectP}>
                        <option value="Pintura">
                            <p className={styles.opcaoServicos}>
                                Montador
                            </p>
                        </option>
                    </select>
                </main>

                <footer>
                    <FooterPrincipal />
                </footer>
            </body>
        </>
    )
}
