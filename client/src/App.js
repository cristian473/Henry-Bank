import React from 'react';
import './css/App.css';
import { Route } from 'wouter'
import { useDispatch } from 'react-redux'

import AddUserForm from './components/FormularioAltaCliente.jsx'

function App() {

  const dispatch = useDispatch();
  return (
    <div>
      <Route path='/addUser' component={AddUserForm} />
    </div>
  );
}
export default App;
