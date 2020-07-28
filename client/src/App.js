import React from 'react';
import './css/App.css';
import { Route } from 'wouter';
import { useDispatch } from 'react-redux';
import AddUserForm from './components/FormularioAltaCliente.jsx';
import LoginForm from './components/Login.jsx';
import General from './components/General/index.js'
import FormularioUsuario from './components/FormularioCrearUsuario.jsx'

function App() {

  const dispatch = useDispatch();
  return (
    <div>
      <Route path='/addUser' component={AddUserForm} />
      <Route path='/addUsuario' component={FormularioUsuario} />
      <Route path='/login' component={LoginForm} />
      <Route path='/general' component={General} />
    </div>
  );
}
export default App;
