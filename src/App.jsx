import { BrowserRouter as Router, Route, Routes, Navigate,Link } from 'react-router-dom';

import Inicio from './components/inicio'
import Coleccion from './components/coleccion'
import Favoritos from './components/favoritos'
import Info from './components/info'
import Usuario from './components/usuario'
import Starwars from './components/starwars'
import './App.css'

function App() {

  return (
    <>
    <Router>

        <nav className='c-menu'>
          <Link to="/" >Inicio</Link>
          <Link to="/Coleccion" >Coleccion</Link>
          <Link to="/Favoritos" >Favoritos</Link>
          <Link to="/Info" >Info</Link>
          <Link to="/Usuario" >Usuario</Link>

        </nav>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Coleccion' element={<Coleccion />} />
        <Route path='/Favoritos' element={<Favoritos />} />
        <Route path='/Info' element={<Info />} />
        <Route path='/Usuario' element={<Usuario />} />
        <Route path='/Starwars/:name' element={<Starwars />} />
      </Routes>
    </Router>
 
    </>
  )
}

export default App
