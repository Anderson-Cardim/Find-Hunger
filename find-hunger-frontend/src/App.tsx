import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CadastroComerciante } from './pages/CadastroComerciante'
import { TelaLogin } from './pages/Login/TelaLogin'
import { Step1 } from './pages/Step1/Step1'
import { CadastroCliente } from './pages/CadastroCliente'
import { Step2 } from './pages/Step2/Step2'

import { CadProduto } from './pages/cadastrarProdutos/cadProduto'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/TelaLogin' element={<TelaLogin />}/>
          <Route path='/ComercianteCliente' element={<Step1 />}/>
          <Route path='/CadastroCliente' element={<CadastroCliente />} />
          <Route path='/CadastroComerciante' element={<CadastroComerciante />} />
          <Route path='/PaginaPrincipal' element={<Step2 />}/>
          <Route path='/CadProduto' element={<CadProduto />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
