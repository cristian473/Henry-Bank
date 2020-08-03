import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modifyUsers } from "../../actions/AddUserActions";
import "./CSS/altaCliente.css";
import header from "./Images/header.png";

const AddUserForm = ({id, firstName, lastName, password, email, identificacion, birthDate, address, city, country}) => {
  
  const initialUserState = {
    id: null,
    firstName: null,
    lastName: null,
    password: null,
    email: null,
    identificacion: null,
    birthDate: null,
    address:  null,
    city: null,
    country: null,

  
  };
  const [user, setUser] = useState(initialUserState);
  const dispatch = useDispatch();

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
            if (!user.firstName) return;
            dispatch(modifyUsers(user));
            setUser(initialUserState);
          }}
        >
          <div class="input-gruop mb-3">
            <input
              class="form-control"
              type="text"
              name="firstName"
              placeholder="Primer Nombre"
              value={user.firstName}
              onChange={handleInputChange}
            />
            <input
              class="form-control"
              type="text"
              name="lastName"
              placeholder="Apellido"
              value={user.lastName}
              onChange={handleInputChange}
            />
            <input
              class="form-control"
              type="text"
              name="password"
              placeholder="Contraseña"
              value={user.password}
              onChange={handleInputChange}
            />
            <input
              class="form-control"
              type="text"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleInputChange}
            />
            <input
              class="form-control"
              type="text"
              name="identificacion"
              placeholder="DNI"
              value={user.identificacion}
              onChange={handleInputChange}
            />
             <p>Fecha de nacimiento</p>
            <input
              class="form-control"
              type="date"
              name="birthDate"
              placeholder="Fecha de Nacimiento"
              value={user.birthDate}
              onChange={handleInputChange}
            />
          </div>
        </form>
        <div className="altaButtons">
          <a id="buttons" href="/">
            Atrás
          </a>
          <a type="submit" id="buttons" href="/users/new2">
            Continuar
          </a>
        </div>
        <a href="/">¿Necesitás ayuda?</a>
      </div>
    </div>
  );
};

export default AddUserForm;
