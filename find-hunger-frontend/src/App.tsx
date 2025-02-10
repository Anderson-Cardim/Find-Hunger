import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CadastroComerciante } from "./pages/CadastroComerciante";
import { TelaLogin } from "./pages/Login/TelaLogin";
import { CadastroCliente } from "./pages/CadastroCliente";

import { PerfilProfissional } from "./pages/PerfilDoProfissional/PerfilProfissional";
import { ComercianteCliente } from "./pages/ComercianteCliente/ComercianteCliente";
import { PaginaPrincipal } from "./pages/PaginaPrincipal/PaginaPrincipal";
import { PaginaSecundaria } from "./pages/PaginaSecundaria/PaginaSecundaria";
import { CadProduto } from "./pages/cadastrarProdutos/cadProduto";
import { PerfilCadastroDoCliente } from "./pages/PerfilCadastroDoCliente/PerfilCadastroDoCliente";
import { PerfilCadastroProfissional } from "./pages/PerfilCadastroDoProfissional/PerfilCadastroProfissional";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

function App() {
  const { usuario } = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ROTAS PÚBLICAS*/}
          <Route path="/TelaLogin" element={<TelaLogin />} />
          <Route path="/ComercianteCliente" element={<ComercianteCliente />} />
          <Route path="/CadastroCliente" element={<CadastroCliente />} />
          <Route
            path="/CadastroComerciante"
            element={<CadastroComerciante />}
          />
          {/* ROTAS PRIVADAS */}
          {usuario && (
            <>
              <Route
                path="PerfilProfissional"
                element={<PerfilProfissional />}
              />
              <Route path="PaginaPrincipal" element={<PaginaPrincipal />} />
              <Route path="PaginaSecundaria" element={<PaginaSecundaria />} />

              {/* COMERCIANTE */}
              {usuario.tipo === "comerciante" && (
                <>
                  <Route path="/CadProduto" element={<CadProduto />} />
                  <Route
                    path="/PerfilCadastroProfissional"
                    element={<PerfilCadastroProfissional />}
                  />
                </>
              )}

              {/* CLIENTE */}
              {usuario.tipo === "comerciante" && (
                <Route
                  path="/PerfilCadastroDoCliente"
                  element={<PerfilCadastroDoCliente />}
                />
              )}
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
