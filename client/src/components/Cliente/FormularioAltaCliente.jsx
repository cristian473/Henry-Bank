import React, { useState } from "react";
import { modifyUser, getAddress } from "../../actions/UserActions";
import { connect } from 'react-redux';
import "./CSS/altaCliente.css";
import header from "./Images/header.png";

const AddUserForm = function ({ id, getAddress }){
  const initialUserState = {
    id: id,
    firstName: "",
    lastName: "",
    documentType: "",
    identification: "",
    phone: "",
    birthDate: "",
    street: "", 
    city: "",
    country: "",
    complemento:""
     };
  const [user, setUser] = useState(initialUserState);

 const address =  {
    street: user.street, 
    city: user.city,
    country: user.country
  }; 

 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

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
  
  

  return (
    <div>
      <div id="login">
        <img src={header} alt="header" />
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (getEdad(user.birthDate) >= 16 ) {
            getAddress(address, id, user)} else {
                alert ('Debes ser mayor de 16 años')
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
            />
            <input
              class="form-control"
              name="lastName"
              placeholder="Apellido"
              value={user.lastName}
              onChange={handleInputChange}
            />
            <input
              class="form-control"
              name="documentType"
              placeholder="Tipo de doc"
              value={user.documentType}
              onChange={handleInputChange}
            />
            <input
              class="form-control"
              name="identification"
              placeholder="Número"
              value={user.identification}
              onChange={handleInputChange}
            />
            <input 
              class='form-control' 
              name="phone" 
              placeholder="Teléfono" 
              value={user.phone}
              onChange={handleInputChange} 
            />
            <p>Fecha de nacimiento</p>
            <input
              class="form-control"
              type="date"
              name="birthDate"
              placeholder="Fecha de nacimiento"
              value={user.birthDate}
              onChange={handleInputChange}
            />
            <input 
              class='form-control' 
              name="street" 
              placeholder="Domicilio calle + Número" 
              value={user.street} 
              onChange={handleInputChange} 
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
            />
            <input 
              class='form-control' 
              name="country" 
              placeholder="Pais" 
              value={user.country} 
              onChange={handleInputChange} 
            />
          </div>
        
          <div className="altaButtons">
            <a id="buttons" href="/">
              Atrás
            </a>
            <input type="submit" id="buttons" value="Enviar" />
          </div>
        </form>
        <a href="/help">¿Necesitás ayuda?</a>
      </div>
    </div>
  );
};

export default connect(null, { getAddress })(AddUserForm);
