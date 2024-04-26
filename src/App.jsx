import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HelpPage from './pages/HelpPage'
import SapatilhasPage from './pages/SapatilhasPage'
import EquipamentosPage from './pages/EquipamentosPage'
import AcessoriosPage from './pages/AcessoriosPage'
import ConjuntosPage from './pages/ConjuntosPage'
import MaterialPage from './pages/MaterialPage'
import PerfilPage from './pages/PerfilPage'
import FavoritosPage from './pages/FavoritosPage'
import CarrinhoPage from './pages/CarrinhoPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/help" Component={HelpPage} />
          <Route path="/sapatilhas" Component={SapatilhasPage} />
          <Route path="/equipamentos" Component={EquipamentosPage} />
          <Route path="/acessorios" Component={AcessoriosPage} />
          <Route path="/conjuntos" Component={ConjuntosPage} />
          <Route path="/material" Component={MaterialPage} />
          <Route path="/perfil" Component={PerfilPage} />
          <Route path="/favoritos" Component={FavoritosPage} />
          <Route path="/carrinho" Component={CarrinhoPage} />
          {/*<Route path="/singleProduct/:id" Component={SingleProductPage} />*/}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
