import React from 'react'


let listadoFotos=[]


function Instagram() {

    const viewDisplay = !listadoFotos.length > 0 
        ?
        "<h1>No hay Fotos que listar</h1>"
        :
        `
            {listadoFotos.map( data =>{
                return (
                    <img className="InstagramImg" src={data} alt=´#´/>
                )
            })}
        `
        return (
    <div className='divInstagramPpal'>
        {viewDisplay}
    </div>
  )
}

export default Instagram