import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "../../actions/AddUserActions";
import "./CSS/altaCliente.css";
import header from "./images/header.png";

const AddUserForm = (props) => {
  const initialUserState = {
    userId: null,
    documentType: "",
    documentNumber: "",
    name: "",
    lastname: "",
    birthdate: "",
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
            if (!user.name) return;
            dispatch(addUsers(user));
            setUser(initialUserState);
          }}
        >
          <div class="input-gruop mb-3">
            <input
              class="form-control"
              type="text"
              name="documentType"
              placeholder="Tipo de doc"
              value={user.documentType}
              onChange={handleInputChange}
            />
            <input
              class="form-control"
              type="text"
              name="documentNumber"
              placeholder="Número"
              value={user.documentNumber}
              onChange={handleInputChange}
            />
            <input
              class="form-control"
              type="text"
              name="name"
              placeholder="Nombre"
              value={user.name}
              onChange={handleInputChange}
            />
            <input
              class="form-control"
              type="text"
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
