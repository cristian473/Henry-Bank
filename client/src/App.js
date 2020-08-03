import React from 'react';
import './css/App.css';
import { Route } from 'react-router-dom';
import AddUserForm from "./components/Cliente/FormularioAltaCliente.jsx";
import LoginForm2 from './components/Usuario/Login2.jsx';
import Home from './components/Usuario/Onboarding.jsx';
import FormularioUsuario from './components/Usuario/FormularioCrearUsuario.jsx'
import LoginGoogle from './components/Usuario/LoginGoogle.jsx';
import Cliente from './components/Cliente/Cliente.jsx';
import RecargarDinero from './components/RecargarDinero/RecargarDinero'

function App() {
  
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route 
        exact path='/users/new3/:id' 
        component={({ match }) => 
          <AddUserForm id={match.params.id}/>
        } 
      />
      <Route exact path='/users/login2' component={LoginForm2} />
      <Route exact path='/users/new' component={FormularioUsuario} />
      <Route exact path='/logingoogle' component={LoginGoogle} />
      <Route exact path='/cliente' component={Cliente} />
      <Route exact path='/recargardinero' component={RecargarDinero}  />
    </div>
  );
}
export default App;
