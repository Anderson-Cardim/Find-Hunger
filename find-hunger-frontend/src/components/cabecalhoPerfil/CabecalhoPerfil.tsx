import styles from './CabecalhoPerfil.module.css'


export function CabecalhoPerfil() {
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
            <div className={styles.ButtonCabecalhoCadastrar}>
                <button>Cadastrar Produtos</button>
            </div>
        </div>
    )
}
