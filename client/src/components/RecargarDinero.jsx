import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button'

const RecargarDinero = () => {
    
    return (
    <div>
    <Link to='/'>
    <div  className="mb-3" href="#">
    <Button variant="primary" size="sm">
 
     Confirmar Recarga
   </Button>
    </div>
  </Link>
  </div>
)};

export default RecargarDinero;