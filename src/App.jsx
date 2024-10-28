import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from "./components/Header/Header"
import {Banner} from "./components/Banner/Banner"
import {Catalog} from "./components/Catalog/Catalog"

function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <Catalog/>
    </>
  )
}

export default App
