import React from 'react'
import './PufiNap.css'
import pufiNap from '../../assets/pufi_nap.png'

export function PufiNap({id}) {
    return (
      <div className='divPufiRainPpal'>
        <div className='divPufiNapOpc'>
          <img className='imgNap' src={pufiNap} alt=""/>
          <h2 className='nombreNap'>Pufi Nap</h2>
          <div className='divSeparadorNap'></div>
          <p className='descripcionNap'>Descripción del producto. Esto es un texto simulado.</p>
          <p>{">  V E R      M A S"}</p>
        </div>
        <div className='divPufiNapsImg'></div>
      </div>
    )
}

export default PufiNap