import React from 'react';
import './CSS/login.css';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

export default function LoginForm() {
  const cancelar = function (e) {
    window.location.replace('http://localhost:3000')
 }
  return (
    <Container id="login">
      <Image id="henrybanklogin" src="https://fotos.subefotos.com/f807c25bc9510155673fc2acf1d82a39o.png" ></Image>
      <form id="formlogin" action="http://localhost:3001/auth/login" method="POST">
        <div id="contelogin2" className="form-group col-md-12">
          <h4>Iniciar Sesión</h4>
          <div className="contelogin3">
            <input
              name="email"
              className="form-control"
              placeholder="E-mail"
              required />
          </div>
        <div className="form-group col-md-12 ">
          <div className="input-group mb-3">
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Contraseña"
              required />
          </div>
        </div>
        <div class="form-row contenedor">
          <div className="form-group col-md-6 link" >
            <a href="/resetpassword">¿Olvidaste tu contraseña?</a>
            <a href="/">¿Necesitas ayuda?</a>
          </div>
          <div className="form-group col-md-6 inicio">
            <input type="submit" className="btn btn-outline-dark" value="Iniciar Sesión" />
            <button type="button" className="btn btn-outline-danger" value="Cancelar"  onClick={cancelar} >Cancelar</button>
          </div> 
        </div>
        </div>
      </form>
    </Container>
  )
}
