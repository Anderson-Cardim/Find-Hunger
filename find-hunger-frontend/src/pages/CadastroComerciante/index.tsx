import styles from "./cadClient.module.css";
import { Input } from "../../components/input/Input";
import { User } from "phosphor-react";
import { Storefront } from "phosphor-react";
import { Phone } from "phosphor-react";
import { EnvelopeSimple } from "phosphor-react";
import { Lock } from "phosphor-react";
import { TrademarkRegistered } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postLoginComerciante } from "../../services/login";

export function CadastroComerciante() {
  const [nome, setNome] = useState("");
  const [estabelecimento, setEstabelecimento] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [numero, setNumero] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const navigate = useNavigate();

  async function handleCadastro() {
  
      console.log("Nome:", nome);
      console.log("Email:", email);
      console.log("Senha:", senha);
      console.log("Confirmar Senha:", confirmarSenha);
      console.log("Estabelecimeto:", estabelecimento);
      console.log("cpf:", cpf);
      console.log("numero:", numero);
  
      if (!nome || !email || !senha || !confirmarSenha || !cpf || !numero || !estabelecimento) {
        alert("Preencha todos os campos!");
        return;
      }
  
      if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return;
      }
  
      try {
        const result = await postLoginComerciante({
          cpf: cpf,
          estabelecimento: estabelecimento,
          numero: numero,
          senha: senha,
          usuario: email,
          tipo: "comerciante",
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
        <div className={styles.containerH2}>
          <h2>Cadastro</h2>
          <h2>Comerciante</h2>
        </div>
        <form className={styles.containerForm} action="">
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
              type="text"
              placeholder="Estabelecimento:"
              icons={<Storefront/>}
              value={estabelecimento}
              onChange={(event) => {
                setEstabelecimento(event.target.value);
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
              type="text"
              placeholder="CPF ou CNPJ:"
              icons={<TrademarkRegistered />}
              value={cpf}
              onChange={(event) => {
                setCpf(event.target.value);
              }}
            />
          </div>
          <div className={styles.InputInput}>
            <Input 
              type="text" 
              placeholder="Telefone:" 
              icons={<Phone />} 
              value={numero}
              onChange={(event) => {
                setNumero(event.target.value);
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
          <button onClick={() => navigate("/ComercianteCliente")}>Voltar</button>
        </div>
      </div>
    </header>
  );
}
