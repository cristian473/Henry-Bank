import React from "react";
import loginPortada from "./images/login.png";
import "./CSS/login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function LoginForm() {
  let signUp = function (e) {
    window.location.replace("http://localhost:3000/FormularioAltaCliente");
  };
  const onSubmit = () => {};

  return (
    <div id="login">
      <form action="http://localhost:3001/auth/login" method="POST">
        <img src={loginPortada} alt="loginPortada" />
        <div className="form-group col-md-12">
          <h4>Iniciar Sesión</h4>
          <div className="input-group mb-3">
            <input
              name="email"
              className="form-control"
              placeholder="E-mail"
              required
            />
          </div>
        </div>
        <div className="form-group col-md-12 ">
          <div className="input-group mb-3">
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Contraseña"
              required
            />
          </div>
        </div>
        <div class="form-row contenedor">
          <div className="form-group col-md-6 link">
            <a href="/resetpassword">¿Olvidaste tu contraseña?</a>
            <a href="/">¿Necesitas ayuda?</a>
          </div>
          <div className="form-group col-md-6 inicio">
            <input
              type="submit"
              className="btn btn-outline-dark"
              value="Iniciar Sesión"
            />
            <button
              type="button"
              className="btn btn-outline-danger"
              value="Cancelar"
              onClick={cancelar}
            >
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
