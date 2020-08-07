import React from 'react';
import loginPortada from './images/login.png';
import './CSS/login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function LoginForm() {
  let signUp = function (e) {
    window.location.replace('http://localhost:3000/FormularioAltaCliente')
  }
  const onSubmit = () => {
  }

  return (
    <Container id="conte1">
      <img id="row"   src="https://fotos.subefotos.com/f807c25bc9510155673fc2acf1d82a39o.png" ></img>
      <Form className="login2" action="http://localhost:3001/auth/login" method="POST" size="lg">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Iniciar Sesión</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
          <Form.Text className="text-muted">
            Anota la contraseña en un lugar seguro!
          </Form.Text>
        </Form.Group>
          <Button variant="primary" type="submit">
            Iniciar Sesión
          </Button>
          <Button variant="primary" type="signup" onClick={signUp}>
            Registrate
          </Button>
          <Button variant="primary" type="submit">
            ¿Olvidaste tu contraseña?
          </Button>  
    </Form>

  </Container>
)};
