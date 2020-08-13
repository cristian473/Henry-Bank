import React, { useState, useEffect } from 'react';
import './recargardinero.css';
import Button from 'react-bootstrap/Button';
import { getProfile, cargarDinero } from "../../actions/UserActions";
import { connect } from 'react-redux';
import montoRecarga from './montoRecarga';

function CargarDinero (props)  {

  useEffect(() => {
    getProfile();
  }, []);

  const montoARecargar = props.location.state;

  const [cantidad, setCantidad] = useState(0);

  console.log(montoARecargar);

  const d1 = 'M0,256L80,256C160,256,320,256,480,218.7C640,181,800,107,960,106.7C1120,107,1280,181,1360,218.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z';
  const d2 = 'M0,288L80,277.3C160,267,320,245,480,240C640,235,800,245,960,213.3C1120,181,1280,107,1360,69.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z';
  const d3 = 'M0,288L48,266.7C96,245,192,203,288,202.7C384,203,480,245,576,256C672,267,768,245,864,208C960,171,1056,117,1152,106.7C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z';  
  
   return (
      <div id="recargardinero">  
        <div className="titulo">
          <h1>Recargar Dinero</h1>
        </div>
        <svg id="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#000000" fill-opacity="1" d={d1}></path>
        </svg>
        <svg id="svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fffe00" fill-opacity="1" d={d2}></path>
        </svg>
        <svg id="svg3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ff0330" fill-opacity="1" d={d3}></path>
        </svg>     
        <div className="form-group col-md-5 recarga">
          <div>
            <p>Usá el siguiente código siempre que quieras depositar dinero en tu cuenta. Recordá que el valor mínimo admitido es de $50</p>
          </div>
          <div className="codigo">
            <span> 0800 222 7749</span>
          </div>
          <div>
            <p>(Mostrar el código al cajero en RapiPago o Pago Fácil)</p>
          </div>
          <div className="confirmar">
            <Button className="btn btn-dark" onClick={() =>
              setCantidad(montoARecargar),
              cargarDinero(props.usuarioConectado.id, cantidad)} variant="top" size="lg" >Confirmar Recarga</Button>
          </div>
        </div>
    </div>
  )
}

function mapStateToProps(state){
  return {
    usuarioConectado: state.usuario.usuarioConectado,
    
  }
}

export default connect(mapStateToProps,{ getProfile})(CargarDinero);

