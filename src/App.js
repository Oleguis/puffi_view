import React from 'react'
import Navbar from './components/NavBar/Navbar'
import { PufiCarts } from './components/PufiCarts/PufiCarts'
import { PufiPuff } from './components/PufiPuff/PufiPuff';
import { PufiRains } from './components/PufiRains/PufiRains';
import { PufiNap } from './components/PufiNap/PufiNap';
import RedesSociales from './components/RedesSociales/RedesSociales';
import Formulario from './components/Formulario/Formulario';
import footerImg from './assets/footer_img.png'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <PufiRains id={"PufiRain"} />
      <PufiPuff id={"PufiPuff"} />
      <PufiCarts id={"PufiCart"} />
      <PufiNap id={"PufiNap"} />
      <RedesSociales />
      <Formulario />
      <footer className='divFooter'>
        <img src={footerImg} alt=''  />
      </footer>
    </>
  )
}
export default App