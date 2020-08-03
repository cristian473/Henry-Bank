import React, { useState } from 'react'
import { connect } from 'react-redux'
import { loggin, getUser  } from '../../actions/UserActions'


function Login({loggin, getUser}){

    const [input, setInput] = useState({
        email : null,
        password: null
    })

    const handleInputChange = function(e){
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
    
    const enviarFormulario = function(e){
        e.preventDefault()
        const user= {
            email: input.email,
            password: input.password
        }
        getUser(user.email)
        .then(datos=>{
            if(datos===undefined){
                alert("el Usuario no existe")
            }
             else{
                    loggin(user)
                }
            }
        ,)
    }

    const cancelar = function(e){
        window.history.back();
       
    }

    return(
        <div className="container">
            <form  className="form-signin" onSubmit={(e)=>e.preventDefault()}>
                <h1>Ingresar </h1>
                <label htmlFor="nombreUser" className ="sr-only" >Nombre de Usuario*</label>
                <input className="form-control" required type="text" placeholder="E-mail" name="email"  onChange={handleInputChange}/>
                      
                <label  htmlFor="contraUser" className="sr-only">Constraseña*</label>
                <input  className="form-control" required type="password" placeholder="Contraseña" name="password"  onChange={handleInputChange}/>
                      
                <button type="submit" className=" btn-lg btn-primary btn-block"  value="Enviar" onClick={enviarFormulario} >Ingresar</button>
                <button type="button" className=" btn-lg btn-danger btn-block"  value="Cancelar" onClick={cancelar} >Cancelar</button>
            </form>
           
        </div>
    )
}

function mapStateToProps(state){
    return {
        usuarioConectado : state.usuario.usuarioConectado
    }
}

export default connect (mapStateToProps,{loggin, getUser})( Login )