import React from "react";
import henry from "./images/henry.svg";
import "./CSS/onboarding.css";

export default function Onboarding() {
  return (
    <div id="onboarding">
      <div className="titulo">
        <img src={henry} alt="logo"></img>
        <h1>Henry bank</h1>
      </div>
      <svg id="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000000"
          fill-opacity="1"
          d="M0,256L80,256C160,256,320,256,480,218.7C640,181,800,107,960,106.7C1120,107,1280,181,1360,218.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <svg id="svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fffe00"
          fill-opacity="1"
          d="M0,288L80,277.3C160,267,320,245,480,240C640,235,800,245,960,213.3C1120,181,1280,107,1360,69.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <div className="form-group col-md-5 login">
        <a className="btn btn-outline-dark estilo" href="/login">
          Iniciar Sesión
        </a>
      </div>
      <div className="form-group col-md-5 signin">
        <a className="btn btn-outline-dark estilo" href="/registrarse">
          Registrate
        </a>
      </div>
    </div>
  );
}
