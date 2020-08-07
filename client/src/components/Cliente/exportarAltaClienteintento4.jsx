import * as yup from 'yup'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik'
import { modifyUser  } from '../../actions/UserActions'
import {useDispatch} from 'react-redux'
import "./CSS/altaCliente.css";
import header from "./Images/header.png";



const validations = yup.object().shape({
    email: yup.string()
    .required("Ingresa tu mail")
    .email("¡Debes ingresar un mail válido!"),
    password: yup.string()
    .min(8, "¡Tu contraseña debe tener al menos 8 carácteres!")
    .required("Ingresa tu contraseña")
})

const AltaUsuario = ({ handleSubmit, initialValues, id, modifyUser}) => {

    
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


    const dispatch = useDispatch()
function handleSubmit(values) {
    dispatch(modifyUser(values));
    console.log('esto es dispatch')
    alert(JSON.stringify('Se ha enviado un mail de validación a ' ))
     }

     

  const cancelar = function (e) {
    window.location.replace('http://localhost:3000')
 }
    return (
        <div id="login">
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations}>
        <FormikForm className="Form">
        <div className="form-group col-md-12">
            
        <img src={header} alt="header" />
            
        

        <Field
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




            <div className="Form-Group">
                <Field className="Form-Field" name="email" placeholder="E-mail" type="email"/>
                <ErrorMessage name="email" className="Form-Error" component="span" />
            </div>
            <div className="Form-Group">
                <Field className="Form-Field" name="password" placeholder="Contraseña" type="password"/>
                <ErrorMessage className="Form-Error" component="span" name="password"/>
            </div>
            <div class="form-row contenedor">
            <div className="form-group col-md-6 link" >
              <a href="/">¿Olvidaste tu contraseña?</a>
              <a href="/">¿Necesitas ayuda?</a>
            </div>
            <div className="form-group col-md-6 inicio">
              <input type="submit" className="btn btn-outline-dark" value="Crear" />
              <button type="button" className="btn btn-outline-danger" value="Cancelar"  onClick={cancelar} >Cancelar</button>
            </div>
            </div>
           
            </div>
        </FormikForm>
    </Formik>
    </div>
    )

}
   


AltaUsuario.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired
}


export default AltaUsuario

