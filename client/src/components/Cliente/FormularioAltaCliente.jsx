import React, { useState } from "react";
import { getAddress } from "../../actions/UserActions";
import { connect } from "react-redux";
import "./CSS/altaCliente.css";
import header from "./Images/header.png";

const AddUserForm = function ({ id, getAddress }) {
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
    complemento: "",
  };
  const [user, setUser] = useState(initialUserState);

  const address = {
    street: user.street,
    city: user.city,
    country: user.country,
  };

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
            if (getEdad(user.birthDate) >= 16) {
              getAddress(address, id, user);
            } else {
              alert("Debes ser mayor de 16 años");
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
              class="form-control"
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
              class="form-control"
              name="street"
              placeholder="Domicilio calle + Número"
              value={user.street}
              onChange={handleInputChange}
              required
            />
            <input
              class="form-control"
              name="complemento"
              placeholder="Piso y Depto"
              value={user.complemento}
              onChange={handleInputChange}
            />
            <input
              class="form-control"
              name="city"
              placeholder="Ciudad"
              value={user.city}
              onChange={handleInputChange}
              required
            />
            <input
              class="form-control"
              name="country"
              placeholder="Pais"
              value={user.country}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="altaButtons">
            <input
              type="submit"
              className="btn btn-outline-dark"
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
        </form>
        <a href="/help">¿Necesitás ayuda?</a>
      </div>
    </div>
  );
};

export default connect(null, { getAddress })(AddUserForm);
