import React from 'react';
import './css/App.css';
import { Route } from 'react-router-dom';
import AltaUsuario from "./components/Cliente/FormularioAltaCliente.jsx";
import Login from './components/Usuario/LoginForm.jsx';
import Home from './components/Usuario/Onboarding.jsx';
import Cliente from './components/Cliente/Cliente.jsx';
import RecargarDinero from './components/RecargarDinero/RecargarDinero.jsx';
import EnviarDinero from './components/EnviarDinero/EnviarDinero.jsx';
import BotonLogout from "./components/Cliente/BotonLogout.jsx";
import exportCrearUsuario from './components/Usuario/FormularioCrearUsuario.jsx';
import Contacts from './components/Contactos/contactos'
import ResetearContrasena from './components/Cliente/ResetearContrasena' 
import ValidResetPassword from './components/Cliente/validResetPassword'


function App() {
  
  return (
    <div>
  
      <Route exact path='/' component={Home} />
      <Route 
        exact path='/new/:id' 
        component={({ match }) => 
          <AltaUsuario id={match.params.id}/>
        } 
      />
      <Route exact path='/login' component={Login} />
      <Route exact path='/resetpassword' component= {ResetearContrasena} />
      <Route exact path='/resetpassword/:idUser' component ={ValidResetPassword} />
      <Route exact path='/registrarse' component={exportCrearUsuario} />
      <Route exact path='/cliente' component={Cliente} />
      <Route exact path='/recargar' component={RecargarDinero} />
      <Route exact path='/enviar' component={EnviarDinero} />
      <Route exact path='/logout' component={BotonLogout}  />
      <Route path ="/contactos" component = {Contacts} />
    </div>
  );
}
export default App;
