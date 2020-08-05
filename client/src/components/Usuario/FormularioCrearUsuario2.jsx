import React, { useState } from 'react';
import { addUser } from '../../actions/UserActions'
import './CSS/agregarusuario.css'
import { connect } from 'react-redux'
import loginPortada from './images/login.png';


import * as yup from 'yup'

import PropTypes from 'prop-types'

import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik'



const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
})

const Form = ({ handleSubmit, initialValues }) => (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations}>
        <FormikForm className="Form">
            <h1 className="Form-Welcome">Welcome</h1>
            <h2 className="Form-Info">Type your user and password to access the system</h2>
            <div className="Form-Group">
                <Field className="Form-Field" name="email" placeholder="Email" type="text"/>
                <ErrorMessage className="Form-Error" component="span" name="user"/>
            </div>
            <div className="Form-Group">
                <Field className="Form-Field" name="password" placeholder="Password" type="password"/>
                <ErrorMessage className="Form-Error" component="span" name="password"/>
            </div>
            <button className="Form-Btn" type="submit">Login</button>
        </FormikForm>
    </Formik>
)

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired
}

export default Form




/* 

function FormularioUsuario({ addUser }) {

    const [input, setInput] = useState({
          
        email: null,
        password: null
    })

    const handleInputChange = function (e) {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const enviarFormulario = function (e) {
        e.preventDefault();
        addUser(input)
        alert(JSON.stringify('Hola, se ha enviado un mail de validación a {$email}'))
    }

    const cancelar = function (e) {
       window.location.replace('http://localhost:3000')
    }
    return (



        <div id="usuario">
        
          <img src={loginPortada} alt="loginPortada" />
          <div className="form-group col-md-12">
            <h4>Crear Usuario</h4>
            <div className="input-group mb-3">
            <input required type="email" name="email" placeholder="Email" onChange={handleInputChange} />
            </div>
          </div>
          <div className="form-group col-md-12 ">
            <div className="input-group mb-3">
            <input required type="password" name="password" placeholder="Contraseña" onChange={handleInputChange} />
            </div>
          </div>
          <div class="form-row contenedor">
            <div className="form-group col-md-6 link" >
              <a href="/">¿Olvidaste tu contraseña?</a>
              <a href="/">¿Necesitas ayuda?</a>
            </div>
            <div className="form-group col-md-6 inicio">
              <input type="submit" className="btn btn-outline-dark" onClick={enviarFormulario} value="Crear" />
              <button type="button" className="btn btn-outline-danger" value="Cancelar"  onClick={cancelar} >Cancelar</button>
            </div>
          </div>
        
      </div>
    )
}

export default connect(null, { addUser })(FormularioUsuario) */
