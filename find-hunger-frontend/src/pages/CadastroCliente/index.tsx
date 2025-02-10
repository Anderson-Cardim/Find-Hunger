import { Input } from "../../components/Input/Input02";
import styles from "./cadClient.module.css";
import { User } from "phosphor-react";
import { EnvelopeSimple } from "phosphor-react";
import { Lock } from "phosphor-react";

export function CadastroCliente() {
  return (
    <header className={styles.ContainerClient}>
      <div className={styles.containerCadastro}>
        <h2>Cadastro do Cliente</h2>
        <form className={styles.containerForm} action="">
          <div className={styles.InputInput}>
            <Input type="" placeholder="Nome completo:" icons={<User />} />
          </div>
          <div className={styles.InputInput}>
            <Input type="" placeholder="Email:" icons={<EnvelopeSimple />} />
          </div>
          <div className={styles.InputInput}>
            <Input
              type="password"
              placeholder="Crie sua senha:"
              icons={<Lock />}
            />
          </div>
          <div className={styles.InputInput}>
            <Input
              type="password"
              placeholder="Confirmar senha"
              icons={<Lock />}
            />
          </div>
        </form>
      </div>
      <div className={styles.containerBotoes}>
        <div className={styles.containerCadastrar}>
          <button>Cadastrar</button>
        </div>
        <div className={styles.containerVoltar}>
          <button>Voltar</button>
        </div>
      </div>
    </header>
  );
}
