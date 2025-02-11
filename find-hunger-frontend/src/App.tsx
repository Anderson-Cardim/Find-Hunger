import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CadastroComerciante } from "./pages/cadastroComerciante";
import { TelaLogin } from "./pages/login/TelaLogin";
import { CadastroCliente } from "./pages/cadastroCliente";

import { PerfilProfissional } from "./pages/perfilDoProfissional/PerfilProfissional";
import { ComercianteCliente } from "./pages/comercianteCliente/ComercianteCliente";
import { PaginaPrincipal } from "./pages/paginaPrincipal/PaginaPrincipal";
import { PaginaSecundaria } from "./pages/paginaSecundaria/PaginaSecundaria";
import { CadProduto } from "./pages/cadastrarProdutos/cadProduto";
import { PerfilCadastroDoCliente } from "./pages/perfilCadastroDoCliente/PerfilCadastroDoCliente";
import { PerfilCadastroProfissional } from "./pages/perfilCadastroDoProfissional/PerfilCadastroProfissional";
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
                path="PerfilProfissional"
                element={<PerfilProfissional />}
              />

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
              <Route path="/PaginaPrincipal" element={<PaginaPrincipal />} />
              <Route path="/PaginaSecundaria" element={<PaginaSecundaria />} />

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
