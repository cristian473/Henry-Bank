import React from 'react';
import './css/App.css';
import { Route } from 'wouter';

import AddUserForm from "./components/Cliente/FormularioAltaCliente.jsx";
import AddUserForm2 from "./components/Cliente/FormularioAltaDomicilio.jsx";
import LoginForm from './components/Usuario/Login.jsx';
import Home from './components/Usuario/Onboarding.jsx';
import FormularioUsuario from './components/Usuario/FormularioCrearUsuario.jsx'
import LoginGoogle from './components/Usuario/LoginGoogle.jsx';
import Cliente from './components/Cliente/Cliente.jsx';
import RecargarDinero from './components/RecargarDinero/RecargarDinero'

function App() {
  
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/users/new3' component={AddUserForm} />
      <Route exact path='/users/new2' component={AddUserForm2} />
      <Route exact path='/users/login' component={LoginForm} />
      <Route exact path='/users/new' component={FormularioUsuario} />
      <Route exact path='/logingoogle' component={LoginGoogle} />
      <Route exact path='/cliente' component={Cliente} />
      <Route exact path='/recargardinero' component={RecargarDinero}  />
    </div>
  );
}
export default App;
