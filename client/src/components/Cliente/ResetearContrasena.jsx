import React, { useState } from 'react'
import { validEmailUser } from '../../actions/resetPasswordActions'

const ResetearContrasena = () => {

    var email = '';

    const handleInputChange = (e) => {
        email = e.target.value;
    }

    const handlerClick =() => {
        validEmailUser(email)
    }
    

    return(
        <div className="container">
            <form  className="form-signin" onSubmit={(e)=>e.preventDefault()}>
                <h1>Ingrese su email:  </h1>
                <label  htmlFor="contraUser" className="sr-only">Constraseña*</label>
                <input  className="form-control" required type="email" placeholder="Email" name="email"  onChange={(e)=>handleInputChange(e)}/>
                           
                <button type="submit" className=" btn-lg btn-primary btn-block"  value="Enviar" onClick={() => handlerClick()} >¡Recibir codigo de validación!</button>
            </form>
            <br/>
        </div>
    )
}

export default ResetearContrasena