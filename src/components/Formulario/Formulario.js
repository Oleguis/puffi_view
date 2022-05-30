import React, {useState} from 'react'
import './Formulario.css'

const emailExpReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

function Formulario() {
    const [correo, setCorreo] = useState('')
    const [errorText, setErrorText] = useState('')

    function handletChange(e){
        setCorreo(e.target.value)
        setErrorText('')
    }

    function sendInfo(e){
        e.preventDefault()
        if (emailExpReg.test(correo)) {
            setErrorText("Correo válidado correctamente");
        } else {
            setErrorText("Discupe. Correo no válido. Por favor indique un correo válido");
        }
    }
    return (
    <form className='divFormPpal' onSubmit={sendInfo}>
        <p>NEWSLETTER</p>
        <h1>SUSCRIBETE</h1>
        <p className='texFormDes'>Y enterate de todas las novedades</p>
        <div className='divFormInput'>
            <input type="text" placeholder='Ingresa tu email' onChange={handletChange} value={correo} className='formInputMail'/>
            <input type="submit" value="&rarr;" className='formBtnSubmit'  />
        </div>
        <p className={'texFormValidate' + errorText.includes('no válido') ? ' textInvalido': ''}>{errorText}</p>
    </form>
  )
}

export default Formulario