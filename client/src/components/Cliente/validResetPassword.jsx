import React, {useEffect} from 'react'
import axios from 'axios'
import { resetPassUser , getValidUser} from '../../actions/resetPasswordActions'


import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

const ValidResetPassword = (props) => {

    const dispatch = useDispatch()
    useEffect(()=>dispatch(getValidUser(id)),[])
    const user = useSelector(store => store.usuario.usuarios)
    const [data, setData] = useState({ code:0,email:'', newPassword:''})

    const id = props.match.params.idUser
    
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setData(state => ({...state, [name]: value}))
        setData(state => ({...state, email:user.email}))
    }

    const handlerClick =() => {
        resetPassUser(data)
    }
    

    return(
        <div className="container">
            <form  className="form-signin" onSubmit={(e)=>e.preventDefault()}>
                <h2>hola {user.firstName}! ingresa el codigo y nueva contraseña</h2>
                <label  htmlFor="contraUser" className="sr-only">Nueva Constraseña</label>
                <input  className="form-control" required type="text" placeholder="Codigo" name="code"  onChange={(e)=>handleInputChange(e)}/>
                <input  className="form-control" required type="password" placeholder="Nueva contraseña" name="newPassword"  onChange={(e)=>handleInputChange(e)}/>
                           
                <button type="submit" className=" btn-lg btn-primary btn-block"  value="Enviar" onClick={() => handlerClick()} >Confirmar cambio</button>
            </form>
            <br/>
        </div>
    )
}

export default ValidResetPassword