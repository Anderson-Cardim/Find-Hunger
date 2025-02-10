import styles from "./login.module.css";
import { User } from "phosphor-react";
import { Lock } from "phosphor-react";
import { login } from "../../services/login";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { handleUsuario } = useContext(AuthContext);

  async function getLogin() {
    try {
      const result = await login({
        usuario: email,
        senha: senha,
      });

      if (result) {
        handleUsuario({
          usuario: result.usuario,
          senha: result.senha,
          tipo: result.tipo as "comerciante" | "cliente",
        });
        //chamar outra rota
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div className={styles.container}>
      <form action="/ComercianteCliente">
        <h1>Login Find-Hunger</h1>
        <div className={styles.InputBox}>
          <input
            placeholder="Usuario"
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <i>
            <User />
          </i>
        </div>
        <div className={styles.InputBox}>
          <input
            placeholder="Senha"
            type="password"
            onChange={(event) => {
              setSenha(event.target.value);
            }}
          />
          <i>
            <Lock />
          </i>
        </div>

        <div className={styles.rememberForgot}>
          <label htmlFor="">
            <input type="checkbox" />
            Lembrar senha
          </label>
          <a href="#">Esqueci a senha</a>
        </div>

        <button className={styles.login} type="submit" onClick={getLogin}>
          Login
        </button>
        <button className={styles.login} type="submit">
          Cadastre-se
        </button>
      </form>
    </div>
  );
}
