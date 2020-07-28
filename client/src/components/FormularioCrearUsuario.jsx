import React, { useState } from 'react';
import { addUser } from '../actions/AddUserActions'
import '../css/agregarusuario.css'
import { connect } from 'react-redux'

function FormularioUsuario({addUser}){

const [input, setInput] = useState({
    nombreUser : null,
    contraUser : null,
    emailUser : null
})

const handleInputChange = function(e){
    e.preventDefault()
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
}

const enviarFormulario = function(e){
    e.preventDefault();
    addUser(input)
}

const cancelar = function(e){
    window.history.back();
}
    return(
        <div className="container">
            <form className="form-signin" >
                <h1>Crear Usuario </h1>
                <label htmlFor="nombreUser" className ="sr-only">Nombre de Usuario*</label>
                <input className="form-control" required type="text" name="nombreUser" placeholder="Nombre de Usuario" onChange={handleInputChange}/>
                          
                <label htmlFor="emailUser" className ="sr-only">Email*</label>
                <input className="form-control" required type="email" name="emailUser" placeholder="Email" onChange={handleInputChange}/>
                          
                <label htmlFor="contraUser" className ="sr-only">Constraseña*</label>
                <input className="form-control" required type="password" name="contraUser" placeholder="Contraseña" onChange={handleInputChange}/>
                           
                <button type="submit" className=" btn-lg btn-primary btn-block"  value="Enviar" onClick={enviarFormulario} >Crear</button>
                <button type="button" className=" btn-lg btn-danger btn-block"  value="Cancelar" onClick={cancelar} >Cancelar</button>
            </form>
        </div>
    )
}

export default connect(null,{addUser})(FormularioUsuario)
