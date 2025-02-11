import { Input } from "../../components/input/Input";
import styles from "./cadClient.module.css";
import { User } from "phosphor-react";
import { EnvelopeSimple } from "phosphor-react";
import { Lock } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/login";

export function CadastroCliente() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const navigate = useNavigate();

  async function handleCadastro() {

    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha:", senha);
    console.log("Confirmar Senha:", confirmarSenha);

    if (!nome || !email || !senha || !confirmarSenha) {
      alert("Preencha todos os campos!");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const result = await postLogin({
        nome: nome,
        senha: senha,
        usuario: email,
        tipo: "cliente",
      });

      if (result) {
        console.log("Usuário cadastrado:", { nome, email, senha });
        navigate("/TelaLogin"); // Redirecionar após cadastro
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  }

  return (
    <header className={styles.ContainerClient}>
      <div className={styles.containerCadastro}>
        <h2>Cadastro do Cliente</h2>
        <form className={styles.containerForm}>
          <div className={styles.InputInput}>
            <Input
              type="text"
              placeholder="Nome completo:"
              icons={<User />}
              value={nome}
              onChange={(event) => {
                setNome(event.target.value);
              }}
            />
          </div>
          <div className={styles.InputInput}>
            <Input
              type="email"
              placeholder="Email:"
              icons={<EnvelopeSimple />}
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className={styles.InputInput}>
            <Input
              type="password"
              placeholder="Crie sua senha:"
              icons={<Lock />}
              value={senha}
              onChange={(event) => {
                setSenha(event.target.value);
              }}
            />
          </div>
          <div className={styles.InputInput}>
            <Input
              type="password"
              placeholder="Confirmar senha"
              icons={<Lock />}
              value={confirmarSenha}
              onChange={(event) => {
                setConfirmarSenha(event.target.value);
              }}
            />
          </div>
        </form>
      </div>
      <div className={styles.containerBotoes}>
        <div className={styles.containerCadastrar}>
          <button onClick={handleCadastro}>Cadastrar</button>
        </div>
        <div className={styles.containerVoltar}>
          <button onClick={() => navigate("/ComercianteCliente")}>
            Voltar
          </button>
        </div>
      </div>
    </header>
  );
}
