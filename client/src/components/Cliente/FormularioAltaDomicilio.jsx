import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsers } from '../../actions/AddUserActions'
import './CSS/altaCliente.css';
import header from './images/header.png';

const AddUserForm2 = props => {
    const initialUserState = {
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
                <form onSubmit={event => {
                    event.preventDefault()
                    if (!user.name) return
                    dispatch(addUsers(user))
                    setUser(initialUserState)
                }}>
                    <div class='input-gruop mb-3'>
                        <input class='form-control' type="text" name="phone" placeholder="Teléfono" value={user.phone} onChange={handleInputChange} />
                        <input class='form-control' type="text" name="street" placeholder="Domicilio calle" value={user.street} onChange={handleInputChange} />
                        <input class='form-control' type="text" name="houseNumber" placeholder="Número" value={user.houseNumber} onChange={handleInputChange} />
                        <input class='form-control' type="text" name="city" placeholder="Ciudad" value={user.city} onChange={handleInputChange} />
                        <input class='form-control' type="text" name="province" placeholder="Provincia" value={user.province} onChange={handleInputChange} />
                        <input class='form-control' type="text" name="country" placeholder="Pais" value={user.country} onChange={handleInputChange} />
                    </div>
                    <div className='altaButtons'>
                        <a id="buttons" href="../users/new">Atrás</a>
                        <a id="buttons">Darme de Alta</a>
                    </div>
                </form>
                <a href="/">¿Necesitás ayuda?</a>
            </div>
        </div>
    )
}

export default AddUserForm2