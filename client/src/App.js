import React from 'react';
import './css/App.css';
import { Route } from 'wouter';
import { useDispatch } from 'react-redux';

import AddUserForm from './components/FormularioAltaCliente.jsx';
import LoginForm from './components/Login.jsx';

function App() {

  const dispatch = useDispatch();
  return (
    <div>
      <Route path='/addUser' component={AddUserForm} />
      <Route path='/login' component={LoginForm} />
    </div>
  );
}
export default App;
