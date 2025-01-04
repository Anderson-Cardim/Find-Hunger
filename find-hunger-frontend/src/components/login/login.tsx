import styles from './login.module.css'
import { User } from 'phosphor-react'
import { Lock } from '@phosphor-icons/react'


export function Login() {
    return(
        <div className={styles.container}>
            <form action="">
                <h1>Login Find-Hunger</h1>
                <div className={styles.InputBox}>
                    <input placeholder='Usuario' type='email'/>
                    <i><User/></i>
                    
                </div>
                <div className={styles.InputBox}>
                    <input placeholder="Senha" type='password'/>
                    <i><Lock/></i>
                </div>

                <div className={styles.rememberForgot}>
                    <label htmlFor="">
                        <input type="checkbox" />
                        Lembrar senha
                    </label>
                    <a href="#">Esqueci a senha</a>
                </div>

                <button className={styles.login} type='submit'>Login</button>

                <div className={styles.registerLink}>
                    <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
                </div>
            </form>
        </div>
    )
}

