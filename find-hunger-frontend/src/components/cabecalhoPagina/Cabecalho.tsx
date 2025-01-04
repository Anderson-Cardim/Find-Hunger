import styles from './Cabecalho.module.css'

export function Cabecalho() {
    return (
        <div className={styles.cotainerHeader}> 
            <div className={styles.divContainerHearder}>
                <button className={styles.buttonInicio}>Início</button>
            </div>
            <div className={styles.divContainerHearder}>                    
                <button>Buscar</button>
            </div>
            <div className={styles.divContainerHearder}>
                <button>Ofertas</button>
            </div>           
             <div className={styles.divContainerHearder}>
                <button>Restaurante</button>
            </div>
            <div className={styles.divContainerHearder}>
                <button>Pedidos</button>
            </div>
        </div>
    )
    
}