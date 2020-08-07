import React from "react"
import AltaUsuario from './exportarAltaCliente'

const handleSubmit = values => console.log("")
const initialValues = {}
const exportarAltaCliente = () => (
    <div className="exportform">
        <AltaUsuario handleSubmit={() => handleSubmit()} initialValues={initialValues}/>
    </div>
)

export default exportarAltaCliente
