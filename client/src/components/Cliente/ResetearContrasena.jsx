import React, { useState } from 'react'
import { connect } from 'react-redux'
import { resetPassUser } from '../actions/usuarioAction'

function ResetearContrasena({id,resetPassUser}){

    const [input, setInput] = useState({
        contraUser : null
    })

    const handleInputChange = function(e){
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
    
    const cambiarPass = function(e){
        e.preventDefault()
        const user= {
            idUser: id,
            contraUser: input.contraUser
        }
        resetPassUser(user)
    }

    return(
        <div className="container">
            <form  className="form-signin" onSubmit={(e)=>e.preventDefault()}>
                <h1>Nueva Contraseña </h1>
                <label  htmlFor="contraUser" className="sr-only">Constraseña*</label>
                <input  className="form-control" required type="password" placeholder="Contraseña" name="contraUser"  onChange={handleInputChange}/>
                           
                <button type="submit" className=" btn-lg btn-primary btn-block"  value="Enviar" onClick={cambiarPass} >Cambiar Contraseña</button>
            </form>
            <br/>
        </div>
    )
}

export default connect (null,{resetPassUser})( ResetearContrasena )