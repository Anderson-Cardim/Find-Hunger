import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CadastroComerciante } from './pages/CadastroComerciante'
import { TelaLogin } from './pages/Login/TelaLogin'
import { Step1 } from './pages/Step1/Step1'
import { CadastroCliente } from './pages/CadastroCliente'
import { Step2 } from './pages/Step2/Step2'

import { CadProduto } from './pages/cadastrarProdutos/cadProduto'
import { FooterPrincipal } from './components/FooterPrincipal/FooterPrincipal';
import { HeaderPrincipal } from './components/HeaderPrincipal/HeaderPrincipal';

import { PerfilCliente } from './pages/PerfilCliente/PerfilCliente';

import { MapaEmpresa } from './components/MapaEmpresa/MapaEmpresa'
import { Step3 } from './pages/Step3/Step3'
import { Teste } from './components/teste'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='TelaLogin' element={<TelaLogin />} />
            <Route path='ComercianteCliente' element={<Step1 />} />
            <Route path='CadastroCliente' element={<CadastroCliente />} />
            <Route path='CadastroComerciante' element={<CadastroComerciante />} />
            <Route path='CadProduto' element={<CadProduto />} />
            <Route path='Footer' element={<FooterPrincipal />} />
            <Route path='Banner' element={<HeaderPrincipal />} />
            <Route path='PerfilCliente' element={<PerfilCliente />} />
            <Route path='PaginaPrincipal' element={<Step2 />} />
            <Route path='PaginaSecundaria' element={<Step3 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
