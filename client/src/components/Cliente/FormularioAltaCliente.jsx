import React, { useState } from "react";
import { modifyUser } from "../../actions/AddUserActions";
import "./CSS/altaCliente.css";
import header from "./Images/header.png";

const AddUserForm = ({ id }) => {
  const initialUserState = {
    userId: id,
    documentType: "",
    documentNumber: "",
    name: "",
    lastname: "",
    birthdate: "",
    street: "",
    houseNumber: "",
    city: "",
    province: "",
    country: ""
  };
  const [user, setUser] = useState(initialUserState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      <div id="login">
        <img src={header} alt="header" />
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(user);
            modifyUser(id, user);
          }}
        >
          <div class="input-gruop mb-3">
            <input
              class="form-control"
              name="documentType"
              placeholder="Tipo de doc"
              value={user.documentType}
              onChange={handleInputChange}
            />
            <input
              class="form-control"
              name="documentNumber"
              placeholder="Número"
              value={user.documentNumber}
              onChange={handleInputChange}
            />
            <input
              class="form-control"
              name="name"
              placeholder="Nombre"
              value={user.name}
              onChange={handleInputChange}
            />
            <input
              class="form-control"
              name="lastname"
              placeholder="Apellido"
              value={user.lastname}
              onChange={handleInputChange}
            />
            <p>Fecha de nacimiento</p>
            <input
              class="form-control"
              type="date"
              name="birthdate"
              placeholder="Fecha de nacimiento"
              value={user.birthdate}
              onChange={handleInputChange}
            />
            <input 
              class='form-control' 
              name="phone" 
              placeholder="Teléfono" 
              value={user.phone}
              onChange={handleInputChange} 
            />
            <input 
              class='form-control' 
              name="street" 
              placeholder="Domicilio calle" 
              value={user.street} 
              onChange={handleInputChange} 
            />
            <input 
              class='form-control' 
              name="houseNumber" 
              placeholder="Número" 
              value={user.houseNumber} 
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
              name="province" 
              placeholder="Provincia" 
              value={user.province} 
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
        </form>
        <div className="altaButtons">
          <a id="buttons" href="/">
            Atrás
          </a>
          <input type="submit" id="buttons" value="Enviar" />
        </div>
        <a href="/help">¿Necesitás ayuda?</a>
      </div>
    </div>
  );
};

export default AddUserForm;
