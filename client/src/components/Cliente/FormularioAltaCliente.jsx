import React, { useState, useEffect } from "react";
import { getAddress, getProfile } from "../../actions/UserActions";
import { connect } from 'react-redux';
import "./CSS/altaCliente.css";
import header from "./Images/header.png";
import Swal from "sweetalert2";


function AddUserForm ({ id, getAddress, usuarioConectado, getProfile }){
 
  const [user, setUser] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ 
      ...user, 
      [name]: value 
    })
  };

  const address =  {
    street: user.street, 
    city: user.city,
    country: user.country
  }; 
  
  useEffect(() => {
    getProfile()
  }, []);
  useEffect(() => {
    setUser(usuarioConectado);
  }, [usuarioConectado]);

  function getEdad(dateString) {
    let hoy = new Date()
    let fechaNacimiento = new Date(dateString)
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--
    }
    return edad
  }
  
  const cancelar = function (e) {
    window.location.replace('http://localhost:3000')
 }

  return (
    <div>
      <div id="login">
        <img src={header} alt="header" />
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (getEdad(user.birthDate) >= 16 ) {
            getAddress(address, id, user)} else {
              Swal.fire({
                title: "Error",
                text: "Debes ser mayor de 16 años",
                icon: "error",
              })
            }    
          }}
        >
          <div class="input-gruop mb-3">
            <input
              class="form-control"
              name="firstName"
              placeholder="Nombre"
              value={user.firstName}
              onChange={handleInputChange}
              required
            />
            <input
              class="form-control"
              name="lastName"
              placeholder="Apellido"
              value={user.lastName}
              onChange={handleInputChange}
              required
            />
            <input
              class="form-control"
              name="documentType"
              placeholder="Tipo de documento"
              value={user.documentType}
              onChange={handleInputChange}
              required
            />
            <input
              class="form-control"
              name="identification"
              placeholder="Número"
              value={user.identification}
              onChange={handleInputChange}
              required
            />
            <input 
              class='form-control' 
              name="phone" 
              placeholder="Teléfono" 
              value={user.phone}
              onChange={handleInputChange} 
              required
            />
            <p>Fecha de nacimiento</p>
            <input
              class="form-control"
              type="date"
              name="birthDate"
              placeholder="Fecha de nacimiento"
              value={user.birthDate}
              onChange={handleInputChange}
              required
            />
            <input 
              class='form-control' 
              name="street" 
              placeholder="Calle y altura" 
              value={user.street} 
              onChange={handleInputChange} 
              required
            />
          <input 
              class='form-control' 
              name="complemento" 
              placeholder="Piso y Depto" 
              value={user.complemento} 
              onChange={handleInputChange} 
            />
            <input 
              class='form-control' 
              name="city" 
              placeholder="Ciudad" 
              value={user.city} 
              onChange={handleInputChange} 
              required
            />
            <input 
              class='form-control' 
              name="country" 
              placeholder="Pais" 
              value={user.country} 
              onChange={handleInputChange} 
              required
            />
          </div>
        
          <div className="altaButtons">
          <input type="submit" className="btn btn-outline-dark" value="Crear" />
              <button type="button" className="btn btn-outline-danger" value="Cancelar"  onClick={cancelar} >Cancelar</button>
          </div>
        </form>
        <a href="/help">¿Necesitás ayuda?</a>
      </div>
    </div>
  );
};

function mapStateToProps(state){
  return {
    usuarioConectado: state.usuario.usuarioConectado
  }
}
export default connect(mapStateToProps, { getAddress, getProfile })(AddUserForm);
