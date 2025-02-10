import styles from "./cadClient.module.css";
import { Input } from "../../components/Input/Input02";
import { User } from "phosphor-react";
import { Storefront } from "phosphor-react";
import { Phone } from "phosphor-react";
import { EnvelopeSimple } from "phosphor-react";
import { Lock } from "phosphor-react";
import { TrademarkRegistered } from "phosphor-react";

export function CadastroComerciante() {
  return (
    <header className={styles.ContainerClient}>
      <div className={styles.containerCadastro}>
        <div className={styles.containerH2}>
          <h2>Cadastro</h2>
          <h2>Comerciante</h2>
        </div>
        <form className={styles.containerForm} action="">
          <div className={styles.InputInput}>
            <Input type="" placeholder="Nome completo:" icons={<User />} />
          </div>
          <div className={styles.InputInput}>
            <Input
              type=""
              placeholder="Estabelecimento:"
              icons={<Storefront />}
            />
          </div>
          <div className={styles.InputInput}>
            <Input type="" placeholder="Email:" icons={<EnvelopeSimple />} />
          </div>
          <div className={styles.InputInput}>
            <Input
              type=""
              placeholder="CPF ou CNPJ:"
              icons={<TrademarkRegistered />}
            />
          </div>
          <div className={styles.InputInput}>
            <Input type="" placeholder="Telefone:" icons={<Phone />} />
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
