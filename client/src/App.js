import React from 'react';
import './css/App.css';
import { Route } from 'wouter';
import { useDispatch } from 'react-redux';

import AddUserForm from './components/FormularioAltaCliente.jsx';
import LoginForm from './components/Login.jsx';
import Home from './components/Onboarding.jsx';

function App() {

  const dispatch = useDispatch();
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/users/new' component={AddUserForm} />
      <Route exact path='/users/login' component={LoginForm} />
    </div>
  );
}
export default App;
