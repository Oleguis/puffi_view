import React from 'react'
import './PufiPuff.css'
import pufiPuff from '../../assets/pufi_puff.png'

export function PufiPuff ({id}) {
    return (
      <div className='divPufiRainPpal'>
        <div className='divPufiPuffOpc'>
          <img className='imgPuff' src={pufiPuff} alt=""/>
          <h2 className='nombrePuff'>Pufi Puff</h2>
          <div className='divSeparadorPuff'></div>
          <p className='descripcionPuff'>Descripción del producto. Esto es un texto simulado.</p>
          <p>{">  V E R      M A S"}</p>
        </div>
        <div className='divPufiPuffsImg'></div>
      </div>
    )
}

export default PufiPuff