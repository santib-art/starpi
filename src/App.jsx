import { useState } from 'react'
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
    <Inicio/>
    <Coleccion/>
    <Favoritos/>
    <Info/>
    <Usuario/>
    <Starwars/>
    </>
  )
}

export default App
