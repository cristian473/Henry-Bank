import React from 'react';
import { Route } from 'react-router-dom'
import './css/App.css';
import RecargarDinero from './components/RecargarDinero'
import NavBar from './components/NavBar'



function App() {
  return (
    <div className="App">
     <Route exact path='/' component={NavBar} />
     <Route exact path='/RecargarDinero' component={RecargarDinero} component={NavBar} />
   </div>
  );
}

export default App;
