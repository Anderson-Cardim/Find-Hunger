// import { Home } from './pages/Home'
// import { BemVindo } from './pages/BemVindo'
// import { CadastroCliente } from './pages/CadastroCliente'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CadastroComerciante } from './pages/CadastroComerciante'
import { TelaLogin } from './pages/Login/TelaLogin'
import { ComercianteCliente } from './components/botaoComercianteCliente/ComercianteCliente'
import { Step1 } from './pages/Step1/Step1'
import { CadastroCliente } from './pages/CadastroCliente'
import { HeaderPrincipal } from './components/HeaderPrincipal/HeaderPrincipal'
import { FooterPrincipal } from './components/FooterPrincipal/FooterPrincipal'
import { Step2 } from './pages/Step2/Step2'
// import { InputPerfil } from './components/inputPerfil/inputPerfil'
// import { Login } from "./components/login/login"
// import { CorpoPerfil } from "./pages/corpoPerfil/CorpoPerfil"
// import { PerfilComerciante } from "./pages/PerfilComerciante/PerfilComerciante"
// import { PerfilCliente } from "./pages/PerfilCliente/PerfilCliente"
// import { CadProduto } from "./pages/cadastrarProdutos/cadProduto"
// import { Cadastro } from "./components/botaoCadastro/Cadastro"
// import { Home } from "./pages/Home"
// import { CabecalhoPerfil } from './components/cabecaloPerfil/CabecalhoPerfil'

// import { Step1 } from './pages/Step1/Step1'
// import { Step2 } from './pages/Step2/Step2'
// import { TelaLogin } from "./pages/Login/TelaLogin"

// import { ProdutosCadastrados } from "./pages/ProdutosCadastrados/ProdutosCadastrados"

function App() {

  return (
    <>

    {/* <Step1/> */}

    {/* <Step2 /> */}

    {/* {<ProdutosCadastrados/>} */}
    {/* {<PerfilCliente/>} */}
      {/* {<PerfilComerciante/>} */}
      {/* {<CorpoPerfil/>} */}
      {/* <BemVindo /> */}
      {/* <CadastroCliente/> */}
      {/* {<CabecalhoPerfil/>} */}
      {/* {<InputPerfil/>} */}
      {/* {<CadastroComerciante/>} */}
      {/* { <InputPerfil/> } */}
      {/* {<CadProduto/>} */}
      {/* {<Home/>} */}
      {/* { <Cadastro/> } */}
      {/* {<Login/>} */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TelaLogin />}/>
          <Route path='/ComercianteCliente' element={<Step1 />}/>
          <Route path='/CadastroCliente' element={<CadastroCliente />} />
          <Route path='/CadastroComerciante' element={<CadastroComerciante />} />
          <Route path='PaginaPrincipal' element={<Step2 />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
