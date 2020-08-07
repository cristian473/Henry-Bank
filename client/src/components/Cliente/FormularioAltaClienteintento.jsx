import React,{ useState } from 'react';
import { Formik, Field, Form } from 'formik';
import header from "./Images/header.png";
import { modifyUser } from "../../actions/UserActions";
import {useDispatch} from 'react-redux'


const AddUserForm = function ({ id, modifyUser }){
 
  const initialUserState = {
    id: id,
    firstName: "",
    lastName: "",
    documentType: "",
    identification: "",
    phone: "",
    birthDate: "",
    address: "", 
    city: "",
    country: ""
  };
  const [user, setUser] = useState(initialUserState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };


  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  function onBlurStreet(ev, setFieldValue) {
    const { value } = ev.target;

   

    fetch(`http://localhost:3001/auth/validate/street`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('street', data.street);
        setFieldValue('city', data.city);
        setFieldValue('country', data.country);
        });
  }

  return (
    <div className="App">
      <Formik
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          id: id,
          firstName: "",
          lastName: "",
          documentType: "",
          identification: "",
          phone: "",
          birthDate: "",
          address: "", 
          city: "",
          country: ""
          
        }}
        render={({ isValid, setFieldValue }) => (
        
        
        <div id="login">
        <img src={header} alt="header" />
        <form
          onSubmit={(event) => {
           
            event.preventDefault();
            console.log(user);
            dispatch(modifyUser(values));
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
              name="address" 
              placeholder="Domicilio calle + Número" 
              value={user.address} 
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
        
        
        
        
        
        
        
        
        )}
         />
     
  
  </div>
  )
};

export default AddUserForm;