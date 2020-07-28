import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsers } from '../actions/AddUserActions'

const AddUserForm = props => {
    const initialUserState = {
        userId: null, documentType: '',
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
            <div>
                <h2>Alta Cliente</h2>
                <form onSubmit={event => {
                    event.preventDefault()
                    if (!user.name) return
                    dispatch(addUsers(user))
                    setUser(initialUserState)
                }}
                >
                    <input type="text" name="documentType" placeholder="Tipo de doc" value={user.documentType} onChange={handleInputChange} />
                    <input type="text" name="documentNumber" placeholder="Número" value={user.documentNumber} onChange={handleInputChange} />
                    <input type="text" name="name" placeholder="Nombre" value={user.name} onChange={handleInputChange} />
                    <input type="text" name="lastname" placeholder="Apellido" value={user.lastname} onChange={handleInputChange} />
                    <input type="date" name="birthdate" placeholder="Fecha de nac" value={user.birthdate} onChange={handleInputChange} />
                    <input type="text" name="phone" placeholder="Teléfono" value={user.phone} onChange={handleInputChange} />
                    <input type="text" name="street" placeholder="Domicilio calle" value={user.street} onChange={handleInputChange} />
                    <input type="text" name="houseNumber" placeholder="Número" value={user.houseNumber} onChange={handleInputChange} />
                    <input type="text" name="city" placeholder="Ciudad" value={user.city} onChange={handleInputChange} />
                    <input type="text" name="province" placeholder="Provincia" value={user.province} onChange={handleInputChange} />
                    <input type="text" name="country" placeholder="Pais" value={user.country} onChange={handleInputChange} />

                    <button>Continuar</button>
                    <button>Atrás</button>
                </form>
                <h4>¿Necesitás ayuda?</h4>
            </div>
        </div>
    )
}

export default AddUserForm