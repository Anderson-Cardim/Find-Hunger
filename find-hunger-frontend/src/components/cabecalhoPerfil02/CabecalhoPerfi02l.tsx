import styles from './CabecalhoPerfil02.module.css'


export function CabecalhoPerfil02() {
    return (
        <div className={styles.ContainerCabecalho}>
            <div className={styles.ButtonCabecalhoInicio}>
                <button>Início</button>
            </div>
            <div className={styles.ButtonCabecalhoLogin}>
                <button>Tela de Login</button>
            </div>
            <div className={styles.ButtonCabecalhoProduto}>
                <button>Meus Produtos</button>
            </div>
            <div className={styles.ButtonCabecalhoProduto}>
                <button>Conversas</button>
            </div>
        </div>
    )
}
