import React, {useEffect} from 'react'
import axios from 'axios'
import { resetPassUser , getValidUser} from '../../actions/resetPasswordActions'


import { useSelector, useDispatch } from 'react-redux'

const ValidResetPassword = (props) => {

    const dispatch = useDispatch()
    const user = useSelector(store => store.usuario.usuarios)
    
    var data = {
        email: user.email,
        code: '',
        newPassword: ''
    }

    const id = props.match.params.idUser
    
    

    useEffect(()=>dispatch(getValidUser(id)),[])

    const handleKeyChange = (e) => {
        data.code = e.target.value
    }

    const handlePassChange = (e) => {
        data.newPassword = e.target.value
    }

    const handlerClick =() => {
        console.log(data)
        resetPassUser(data)
    }
    

    return(
        <div className="container">
            <form  className="form-signin" onSubmit={(e)=>e.preventDefault()}>
                <h2>hola {user.firstName}! ingresa el codigo y nueva contraseña</h2>
                <label  htmlFor="contraUser" className="sr-only">Nueva Constraseña</label>
                <input  className="form-control" required type="text" placeholder="Codigo" name="codigo"  onChange={(e)=>handleKeyChange(e)}/>
                <input  className="form-control" required type="password" placeholder="Nueva contraseña" name="password"  onChange={(e)=>handlePassChange(e)}/>
                           
                <button type="submit" className=" btn-lg btn-primary btn-block"  value="Enviar" onClick={() => handlerClick()} >Confirmar cambio</button>
            </form>
            <br/>
        </div>
    )
}

export default ValidResetPassword