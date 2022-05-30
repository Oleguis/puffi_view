import React from 'react'
import './PufiRains.css'
import sombrilla from '../../assets/sombrilla.png'

export function PufiRains({id}) {
    return (
      <div className='divPufiRainPpal'>
        <div className='divPufiRainsImg'></div>
        <div className='divPufiRainsOpc'>
          <img className='imgRain' src={sombrilla} alt=""/>
          <h2 className='nombreRain'>Pufi RAIN</h2>
          <div className='divSeparadorRain'></div>
          <p className='descripcionRain'>Descripción del producto. Esto es un texto simulado.</p>
          <p>{">  V E R      M A S"}</p>
        </div>
      </div>
    )
}

export default PufiRains