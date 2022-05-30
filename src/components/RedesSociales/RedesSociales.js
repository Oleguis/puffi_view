import React, {useState} from 'react'
import Instagram from '../Instagram/Instagram'
import fotoPufi from '../../assets/img_3.png'
import './RedesSociales.css'


function RedesSociales() {
    const [mostrarFotos, setmostrarFotos] = useState(false)
    function onHandletChange(){
        setmostrarFotos(!mostrarFotos)
    }

  return (
    <div className='divRedesSocialesPpal'>
        <h5>INSTAGRAM</h5>
        <div className='divBoton' onClick={onHandletChange}>#ESPUFI</div>
        {mostrarFotos ? <Instagram /> : <img className='initialImg' src={fotoPufi} alt="" />}
    </div>
  )
}

export default RedesSociales