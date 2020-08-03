import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/UserActions';
import { IoMdLogOut} from 'react-icons/io';

function BotonLogout({logout,usuario}){
    
    function deslogear(){
        logout(usuario)
    }

    return(
        <div>
            <IoMdLogOut className="btn" type="button" size={60}  onClick={deslogear} color="red" /> 
           
        </div>
    )
} 

function mapStateToProps(state){
    return{
        usuario: state.usuario.usuarioConectado 
   }
}

export default connect (mapStateToProps, {logout})(BotonLogout)