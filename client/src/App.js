import React from 'react';
import './css/App.css';
import { Route } from 'wouter';
import { useDispatch } from 'react-redux';

import AddUserForm from './components/Cliente/FormularioAltaCliente.jsx';
import LoginForm from './components/Usuario/Login.jsx';
import Home from './components/Usuario/Onboarding.jsx';
import General from './components/General/index.js'
import FormularioUsuario from './components/Usuario/FormularioCrearUsuario.jsx'

function App() {

  const dispatch = useDispatch();
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/users/new' component={AddUserForm} />
      <Route exact path='/users/login' component={LoginForm} />
      <Route path='/addUsuario' component={FormularioUsuario} />
      <Route path='/general' component={General} />
    </div>
  );
}
export default App;
