import React, { useState } from "react";
import { addUser } from "../../actions/UserActions";
import "./CSS/agregarusuario.css";
import { connect } from "react-redux";
import loginPortada from "./images/login.png";

function FormularioUsuario({ addUser }) {
  const [input, setInput] = useState({
    nombreUser: null,
    contraUser: null,
    emailUser: null,
  });

  const handleInputChange = function (e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const enviarFormulario = function (e) {
    e.preventDefault();
    addUser(input);
  };

  const cancelar = function (e) {
    window.location.replace("http://localhost:3000");
  };
  return (
    <div id="usuario">
      <img src={loginPortada} alt="loginPortada" />
      <div className="form-group col-md-12">
        <h4>Crear Usuario</h4>
        <div className="input-group mb-3">
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group col-md-12 ">
        <div className="input-group mb-3">
          <input
            required
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div class="form-row contenedor">
        <div className="form-group col-md-6 link">
          <a href="/">¿Olvidaste tu contraseña?</a>
          <a href="/">¿Necesitas ayuda?</a>
        </div>
        <div className="form-group col-md-6 inicio">
          <input
            type="submit"
            className="btn btn-outline-dark"
            onClick={enviarFormulario}
            value="Crear"
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
    </div>
  );
}

export default connect(null, { addUser })(FormularioUsuario);
