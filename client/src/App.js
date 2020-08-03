import React from 'react';
import './css/App.css';
import { Route } from 'react-router-dom';
import CrearUsuario from './components/Usuario/FormularioCrearUsuario.jsx';
import AltaUsuario from "./components/Cliente/FormularioAltaCliente.jsx";
import Login from './components/Usuario/LoginForm.jsx';
import Home from './components/Usuario/Onboarding.jsx';
import LoginGoogle from './components/Usuario/LoginGoogle.jsx';
import Cliente from './components/Cliente/Cliente.jsx';
import RecargarDinero from './components/RecargarDinero/RecargarDinero.jsx'

function App() {
  
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route 
        exact path='/users/new3/:id' 
        component={({ match }) => 
          <AltaUsuario id={match.params.id}/>
        } 
      />
      <Route exact path='/users/login' component={Login} />
      <Route exact path='/users/new' component={CrearUsuario} />
      <Route exact path='/logingoogle' component={LoginGoogle} />
      <Route exact path='/cliente' component={Cliente} />
      <Route exact path='/recargardinero' component={RecargarDinero}  />
    </div>
  );
}
export default App;
