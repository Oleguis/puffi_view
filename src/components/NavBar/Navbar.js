import React from 'react'
// import { Link } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import pufIconPuff from '../../assets/pufficon_icon.png'
import pufIconCart from '../../assets/puficart_icon.png'
import pufIconRain from '../../assets/pufirain_icon.png'
import pufIconNap from '../../assets/pufinap_icon.png'
import './NavBar.css'
function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className='divNavbarPpal'>
    <nav className="App">
      <div className="App_Logo" onClick={scrollToTop}>
        <div className="App_Logo">
          <h1 className="Logo">Pufi</h1>
          <h1 className="Logo registrado">&#174;</h1>
        </div>
      </div>
      <div className="divMenu">
        <Link
          activeClass='active'
          to='pufiPuff'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500} 
          className="App_Link">
          <img src={pufIconPuff} alt="" className="Iconos" />
          <h1 className="h1">PUFI PUFF</h1>
        </Link>
        <Link 
          activeClass='active'
          to='pufiRain'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500} 
          className="App_Link">
          <img src={pufIconRain} alt="" className="Iconos" />
          <h1 className="h1">PUFI RAIN</h1>
        </Link>
        <Link 
          to='pufiCart'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500} 
          className="App_Link">
          <img src={pufIconCart} alt="" className="Iconos" />
          <h1 className="h1">PUFI CART</h1>
        </Link>
        <Link 
          to='pufiNap'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500} 
          className="App_Link">
          <img src={pufIconNap} alt="" className="Iconos" />
          <h1 className="h1">PUFI NAP</h1>
        </Link>
      </div> 
      <div className='divSelector'>
        <Link to='#miCuenta' className="linkSelector">
          <select className='selector' defaultValue={"MI CUENTA"}>
            <option >MI CUENTA</option>
          </select>
        </Link>
        <Link to='#' className="linkCarrito"><p>MI COMPRA</p></Link>
      </div>
    </nav>
  </div>
  )
}

export default Navbar