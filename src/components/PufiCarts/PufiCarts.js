import React from 'react'
import './PufiCarts.css'
import pufiCart from '../../assets/pufi_cart.png'

export function PufiCarts({id}) {
    return (
      <div className='divPufiCartPpal'>
        <div className='divPufiCartsImg'></div>
        <div className='divPufiCartsOpc'>
          <img className='imgCart' src={pufiCart} alt=""/>
          <h2 className='nombreCart'>Pufi CART</h2>
          <div className='divSeparadorCart'></div>
          <p className='descripcionCart'>Descripción del producto. Esto es un texto simulado.</p>
          <p>{">  V E R      M A S"}</p>
        </div>
      </div>
    )
}

export default PufiCarts