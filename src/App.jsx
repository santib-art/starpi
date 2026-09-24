import { useState } from 'react'
import Inicio from './components/inicio'
import Coleccion from './components/coleccion'
import Favoritos from './components/favoritos'
import Info from './components/info'
import Usuario from './components/usuario'
import Fakeapi from './components/fakeapi'
import './App.css'

function App() {

  return (
    <>
    <Inicio/>
    <Coleccion/>
    <Favoritos/>
    <Info/>
    <Usuario/>
    <Fakeapi/>
    </>
  )
}

export default App
