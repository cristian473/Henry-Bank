import React, { useEffect } from 'react';
import General from '../General/General.jsx'; 
import NavBar from '../NavBar/NavBar.jsx';
import './CSS/client.css';
import { connect } from 'react-redux';
import { getProfile, getWallet } from "../../actions/UserActions";

function Cliente({ usuarioConectado, wallet, getProfile, getWallet }){
  
  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    getWallet(usuarioConectado.id)
  },[usuarioConectado]);

  const imgMuestra = 'https://images.vexels.com/media/users/3/136558/isolated/preview/43cc80b4c098e43a988c535eaba42c53-icono-de-usuario-de-la-persona-by-vexels.png'
  return(
    <div id="cliente">  
      <div className="left">
        <div className="header">
          <div className="perfil">
            {usuarioConectado ?           
              <h2>Hola, <span>{usuarioConectado.firstName}</span></h2>             
            :            
              <h2>Hola, <span>Usuario</span></h2>               
            }
            <img src={imgMuestra} width="100px" alt="photo"></img>
          </div>

          {usuarioConectado.firstName!==null && <span>
          <div className="saldo">
            {wallet ? 
              <h3>${wallet.balance}</h3>
            :
              <h3>$2,002.50</h3>
            }      
            <p>Balance de mi cuenta</p>
          </div>
          </span>}</div> 
          {usuarioConectado.firstName!==null && <span><General/>
        <div className="acciones">
          <ul>
            <li>
              <a href="/" className="btn">RECARGAR</a>
            </li>
            <li>
              <a href="/" className="btn">ENVIAR</a>
            </li>
          </ul> 
          <div className="navBar">
            <NavBar/>
          </div>

        </div></span>}


        {usuarioConectado.firstName===null && 
    <form className="form-signin needs-validation"> 
            <h1>Tu cuenta aún no ha sido activada, por favor, revisa tu mail y sigue los pasos para activarla.</h1>

            
            <br/>
            <div>             
            

           </div>
    </form>}


      </div>  

      <div className="right">
        <div className="rutas">
          <ul>
            <li>
              <a href="/">TRANSACCIONES</a> 
            </li>
            <li>
              <a href="/">ESTADÍSTICAS</a>           
            </li>
            <li>
              <a href="/">MIS DATOS</a>
            </li>
            <li>
              <a href="/">MIS PRODUCTOS</a>
            </li>
          </ul>   
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state){
  return {
    usuarioConectado: state.usuario.usuarioConectado,
    wallet: state.usuario.wallet
  }
}

export default connect(mapStateToProps,{ getProfile, getWallet })(Cliente)