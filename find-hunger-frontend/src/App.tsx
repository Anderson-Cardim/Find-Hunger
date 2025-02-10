import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CadastroComerciante } from "./pages/CadastroComerciante";
import { TelaLogin } from "./pages/Login/TelaLogin";
import { CadastroCliente } from "./pages/CadastroCliente";

import { FooterPrincipal } from "./components/FooterPrincipal/FooterPrincipal";
import { HeaderPrincipal } from "./components/HeaderPrincipal/HeaderPrincipal";

import { PerfilCadastroProfissional } from "./pages/PerfilCadastroProfissional/PerfilCadastroProfissional";

import { ListaProdutos } from "./pages/ListaDeProdutos/ListaProdutos";
import { PerfilProfissional } from "./pages/PerfilDoProfissional/PerfilProfissional";
import { ComercianteCliente } from "./pages/ComercianteCliente/ComercianteCliente";
import { PaginaPrincipal } from "./pages/PaginaPrincipal/PaginaPrincipal";
import { PaginaSecundaria } from "./pages/PaginaSecundaria/PaginaSecundaria";
import { CadProduto } from "./pages/cadastrarProdutos/cadProduto";
import { Teste } from "./components/teste";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/TelaLogin" element={<TelaLogin />} />
          <Route path="/ComercianteCliente" element={<ComercianteCliente />} />
          <Route path="/CadastroCliente" element={<CadastroCliente />} />
          <Route
            path="/CadastroComerciante"
            element={<CadastroComerciante />}
          />
          <Route path="/CadProduto" element={<CadProduto />} />
          <Route path="/Footer" element={<FooterPrincipal />} />
          <Route path="/Banner" element={<HeaderPrincipal />} />
          <Route
            path="/PerfilCadastroProfissional"
            element={<PerfilCadastroProfissional />}
          />

          <Route path="/">
            <Route path="TelaLogin" element={<TelaLogin />} />
            <Route path="ComercianteCliente" element={<ComercianteCliente />} />
            <Route path="CadastroCliente" element={<CadastroCliente />} />
            <Route
              path="CadastroComerciante"
              element={<CadastroComerciante />}
            />
            <Route path="CadProduto" element={<CadProduto />} />
            <Route path="Footer" element={<FooterPrincipal />} />
            <Route path="Banner" element={<HeaderPrincipal />} />
            <Route path="PaginaPrincipal" element={<PaginaPrincipal />} />
            <Route path="PaginaSecundaria" element={<PaginaSecundaria />} />
            <Route path="ListaProdutos" element={<ListaProdutos />} />
            <Route path="PerfilProfissional" element={<PerfilProfissional />} />
            <Route path="Teste" element={<Teste />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
