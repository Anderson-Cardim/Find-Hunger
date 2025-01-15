import styles from './TelaLogin.module.css'
import { Login } from '../../components/login/login'

export function TelaLogin() {
    return (
        <header className={styles.ContainerLogin}>
                <Login/>
        </header>
    )
}
