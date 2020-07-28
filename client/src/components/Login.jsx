import React from 'react';
import loginPortada from '../images/login.png';
import '../css/login.css';

export default function LoginForm(){
  return(
    <div id="login">
      {/* Cambiar el puerto por el corresponiente */}
      <form action="http://localhost:3080" method="POST">
        <img src={loginPortada} alt="loginPortada"/>
        <div className="form-group col-md-12">
          <h4>Iniciar Sesión</h4>
          <div className="input-group mb-3">
            <input 
              name="username" 
              className="form-control" 
              placeholder="Usuario"            
              required/>
          </div>  
        </div>   
        <div className="form-group col-md-12 ">
          <div className="input-group mb-3">
            <input 
              name="password" 
              type="password"
              className="form-control" 
              placeholder="Contraseña" 
              required/>
          </div>  
        </div>
        <div class="form-row contenedor">
          <div className="form-group col-md-6 link" >
            <a href="/">¿Olvidaste tu contraseña?</a>
            <a href="/">¿Necesitas ayuda?</a>
          </div>
          <div className="form-group col-md-6 inicio">
            <input type="submit" className="btn btn-outline-dark" value="Iniciar Sesión"/>
          </div>
        </div> 
      </form>  
    </div>
  )
}