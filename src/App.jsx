import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Photo from './components/Photo'
import About from './components/About'
import Footer from './components/Footer'
function App() {

  return (
    <div className='card'>
      <Photo/ >
      <Navbar/ >
      <About/ >
      <Footer/ >
    </div>
  )
}

export default App
