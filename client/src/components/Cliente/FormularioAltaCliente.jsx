import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsers } from '../../actions/AddUserActions'
import './CSS/altaCliente.css';
import header from './images/header.png';

const AddUserForm = props => {
    const initialUserState = {
        userId: null,
        documentType: '',
        documentNumber: '',
        name: '',
        lastname: '',
        birthdate: '',
        phone: '',
        street: '',
        houseNumber: '',
        city: '',
        province: '',
        country: ''
    }

    const [user, setUser] = useState(initialUserState)
    const dispatch = useDispatch();

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <div>
            <div id="login">
                <img src={header} alt="header" />
                <h2>Alta Cliente</h2>
                <form onSubmit={event => {
                    event.preventDefault()
                    if (!user.name) return
                    dispatch(addUsers(user))
                    setUser(initialUserState)
                }}
                >
                    <div class='input-gruop mb-3'>
                        <input class='form-control' type="text" name="documentType" placeholder="Tipo de doc" value={user.documentType} onChange={handleInputChange} />
                        <input class='form-control' type="text" name="documentNumber" placeholder="Número" value={user.documentNumber} onChange={handleInputChange} />
                        <input class='form-control' type="text" name="name" placeholder="Nombre" value={user.name} onChange={handleInputChange} />
                        <input class='form-control' type="text" name="lastname" placeholder="Apellido" value={user.lastname} onChange={handleInputChange} />
                        <p>Fecha de nacimiento</p>
                        <input class='form-control' type="date" name="birthdate" placeholder="Fecha de nacimiento" value={user.birthdate} onChange={handleInputChange} />
                    </div>
                    <button>Continuar</button>
                    <button>Atrás</button>
                </form>
                <h4>¿Necesitás ayuda?</h4>
            </div>
        </div>
    )
}

export default AddUserForm