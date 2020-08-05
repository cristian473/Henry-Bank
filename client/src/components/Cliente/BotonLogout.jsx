import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { logout } from '../../actions/UserActions';
import { IoMdLogOut} from 'react-icons/io';
import axios from 'axios'
import {LOGOUT} from '../../constants/userConstants'

function BotonLogout({logout,usuario, history}){

    const dispatch = useDispatch()

    function desloguear(){
       
        axios.get("http://localhost:3001/auth/logout").then((res) => {
            if (res.status === 200) {
           
             dispatch({ type: LOGOUT }); 
             history.push('/')
             // return dispatch({ type: LOGOUT });

            } else {
              alert("No fue posible desloguearse");
            }
          });

    }

    return(
        <div>
            <IoMdLogOut className="btn" type="button" size={60}  onClick={desloguear} color="red" /> 
           
        </div>
    )
} 

function mapStateToProps(state){
    return{
        usuario: state.usuario.usuarioConectado 
   }
}

export default connect (mapStateToProps, {logout})(BotonLogout)