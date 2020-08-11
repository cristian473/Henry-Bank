import React, { useState, useEffect } from 'react';
import './enviardinero.css';
import Button from 'react-bootstrap/Button';
import { FaUsers , FaUserPlus} from "react-icons/fa";
import { connect } from 'react-redux';
import { getProfile, enviarDinero, listaContactos } from "../../actions/UserActions";
import SearchContact from "./searchContact.js";

function RecargarDinero({ usuarioConectado, getProfile, enviarDinero, listContact, listaContactos }) {

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
  if(usuarioConectado.contacts){
    usuarioConectado.contacts.map(value => {
     listaContactos(value)
    })
  }
  }, [usuarioConectado])

  const [cantidad, setCantidad] = useState(0); 
  
  const addcontactos = function (e) {
    window.location.replace('http://localhost:3000/contactos')
 }

  return (  
      <div id="enviardinero">  
        <div className="titulo">
          <h1>Enviar Dinero</h1>
        </div>
        <svg id="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#000000" fill-opacity="1" d='M0,256L80,256C160,256,320,256,480,218.7C640,181,800,107,960,106.7C1120,107,1280,181,1360,218.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'></path>
        </svg>
        <svg id="svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fffe00" fill-opacity="1" d='M0,288L80,277.3C160,267,320,245,480,240C640,235,800,245,960,213.3C1120,181,1280,107,1360,69.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'></path>
        </svg>
        <svg id="svg3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ff0330" fill-opacity="1" d='M0,288L48,266.7C96,245,192,203,288,202.7C384,203,480,245,576,256C672,267,768,245,864,208C960,171,1056,117,1152,106.7C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'></path>
        </svg>     
        <div className="form-group col-md-5 envia">
          <div class="input-group mb-3 destino">
            <div class="input-group-prepend">
              <button class="input-group-text" id="basic-addon1">
                <FaUserPlus size="30" onClick={addcontactos}/>
              </button>
            </div>
            {usuarioConectado.contacts && usuarioConectado.contacts.length !== 0? 
              <SearchContact misContactos={listContact}/>
            :
              <input type="text" class="form-control" placeholder="Aún no tiene contactos" disabled/>
            }
          </div>
          <div className="total">
          <h1>${cantidad}</h1>
          </div>
          <div class="input-group input-group-sm mb-3">
            <input type="number" max="100000" min ="0" class="form-control mensaje" placeholder="Modificar Cantidad" 
              onInput={e => setCantidad(e.target.value)} 
            />
          </div>
          <div class="form-check confirmar">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1">
              Acepto usar la sección amigos solo con fines personales, no comerciales
            </label>
          </div>
          <div className="send">
          {usuarioConectado.contacts && usuarioConectado.contacts.length !== 0 ?
              <Button className="btn btn-dark" size="lg"
                onClick={() => {
                  const nombre = document.getElementById('myInput').value;
                  for( let i = 0; i < listContact.length; i++ ){
                    if (listContact[i].nombreContacto === nombre) {
                      enviarDinero(usuarioConectado.id, listContact[i], cantidad)
                    }
                  }
                }}
              >Enviar Dinero</Button>
            :
              <Button className="btn btn-dark" href="/cliente" size="lg">Atrás</Button>
            }
          </div>
        </div>
    </div>
  )
}

function mapStateToProps(state){
  return {
    usuarioConectado: state.usuario.usuarioConectado,
    listContact: state.usuario.listContact,
  }
}

export default connect(mapStateToProps,{ getProfile, enviarDinero, listaContactos })(RecargarDinero);