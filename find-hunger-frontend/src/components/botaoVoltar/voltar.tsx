import styles from './voltar.module.css'

export function BotaoVoltar() {
    return (
        <div className={styles.containerBotao}>
            <button className={styles.containerVoltar}>Voltar</button>
        </div>
    );
}