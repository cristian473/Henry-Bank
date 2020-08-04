import React from 'react';
import { Link, Redirect } from "react-router-dom";
import loginPortada from './images/login.png';
import './CSS/login.css';
import axios from 'axios';

export default function LoginForm() {
const initialState = {
  email: "",
  password: "",
  redirectTo: null
};

const [usuario, setUsuario] = React.useState(initialState);
const cancelar = function (e) {
  window.location.replace('http://localhost:3000')
}

const handleSubmit = (e) => {
  e.preventDefault();
  axios.post('http://localhost:3001/auth/login',{
    email: usuario.email,
    password: usuario.password
  })
  .then((res)=>{
    console.log("===== Datos de handleSubmit a /auth/login =====")
    console.log(res);
    const user = res.data;

    if (user) {
      alert('Bienvenido ' + user.firstName);
      setUsuario({
        redirectTo: '/cliente'
      })
    }
    else{
      alert("Usuario y/o contraseña incorrectos. Intente nuevamente");
    }
  })
  .catch(e=>{
    alert('Error: ' + e.message);
  })
};

const updateField = (e) => {
  setUsuario({
    ...usuario,
    [e.target.name]: e.target.value,
  });
};

if (usuario.redirectTo) {
return <Redirect to={{ pathname: usuario.redirectTo }} />
} 
else {
  return (
    <div>
      <form id="login" name="login">
        <img src={loginPortada} alt="loginPortada" />
        <div className="form-group col-md-12">
          <h4>Iniciar Sesión</h4>
          <div className="input-group mb-3">
            <input
              type="text"
              required
              name="email"
              value={usuario.email}
              onChange={updateField}
              className="form-control"
              placeholder="E-mail"
            />
          </div>
        </div>
        <div className="form-group col-md-12 ">
          <div className="input-group mb-3">
            <input
              type="password"
              required
              name="password"
              value={usuario.password}
              onChange={updateField}
              className="form-control"
              placeholder="Contraseña"
            />
          </div>
        </div>
        <div class="form-row contenedor">
          <div className="form-group col-md-6 link" >
            <a href="/">¿Olvidaste tu contraseña?</a>
            <a href="/">¿Necesitas ayuda?</a>
          </div>
          <div className="form-group col-md-6 inicio">
            <button type="submit" class="btn btn-outline-dark" value="Iniciar Sesión" onClick={handleSubmit}>Iniciar Sesión</button>
            <button type="button" className="btn btn-outline-danger" value="Cancelar" onClick={cancelar}>Cancelar</button>
          </div>
        </div>
      </form>
    </div>
  )}
}