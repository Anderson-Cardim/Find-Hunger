import styles from "./login.module.css";
import { User } from "phosphor-react";
import { Lock } from "phosphor-react";
import { login } from "../../services/login";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { handleUsuario } = useContext(AuthContext);

  const navigate = useNavigate();

  async function getLogin(event: React.FormEvent) {
    event.preventDefault(); // Evita o reload da página

    try {
      const result = await login({
        usuario: email,
        senha: senha,
      });
      
      if (result) {
        handleUsuario({
          id: result.id,
          usuario: result.usuario,
          senha: result.senha,
          tipo: result.tipo as "comerciante" | "cliente",
          cpf: result.cpf,
          endereco: result.endereco,
          estabelecimento: result.estabelecimento,
          numero: result.numero,
          nome: result.nome,
          descricao: result.descricao,
          imagem01: result.imagem01,
          imagem02: result.imagem02,
          imagem03: result.imagem03,
        });

        // Redireciona para a página correta baseado no tipo de usuário
        if (result.tipo === "comerciante") {
          navigate("/PaginaPrincipal");
        } else if (result.tipo === "cliente") {
          navigate("/PaginaPrincipal");
        }
      }
    } catch (error) {
      console.log("Erro no login:", error);
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
        <button
          className={styles.login}
          type="button"
          onClick={() => navigate("/ComercianteCliente")}
        >
          Cadastre-se
        </button>
      </form>
    </div>
  );
}
