import styles from "./FooterPrincipal.module.css";
import { House } from "@phosphor-icons/react/dist/ssr";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { Plus } from "@phosphor-icons/react/dist/ssr";
// import { TextColumns } from '@phosphor-icons/react/dist/ssr'
import { User } from "@phosphor-icons/react/dist/ssr";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

export function FooterPrincipal() {
  const { usuario } = useContext(AuthContext);

  return (
    <footer className={styles.rodape}>
      <Link to="/PaginaPrincipal">
        <i className={styles.House}>
          <House size={32} />
        </i>
      </Link>
      <Link to="/PaginaSecundaria">
        <i className={styles.Lupa}>
          <MagnifyingGlass size={32} />
        </i>
      </Link>

      {usuario?.tipo === "comerciante" && (
        <Link to="/CadProduto">
          <i className={styles.Plus}>
            <Plus size={32} />
          </i>
        </Link>
      )}
      {/* <Link to="/ListaProdutos">
          <i className={styles.Colum}><TextColumns size={32} /></i>
        </Link> */}
      <Link
        to={
          usuario?.tipo === "comerciante"
            ? "/PerfilCadastroProfissional"
            : "/PerfilCadastroDoCliente"
        }
      >
        <i className={styles.User}>
          <User size={32} />
        </i>
      </Link>
    </footer>
  );
}
