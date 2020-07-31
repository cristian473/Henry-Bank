import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";

import Button from 'react-bootstrap/Button';

import { IoIosPaperPlane } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
import { RiDownload2Line } from "react-icons/ri";
import { RiUpload2Line } from "react-icons/ri";
import { RiProductHuntLine } from "react-icons/ri";
import './navbar.css'

const NavBar = () => {
  return (
    <Navbar className='m-auto' id='nav' fixed="bottom" expand={"md"} variant="light" bg="light">     
      <div className="conttop">
        <Link to='/'>
            <Button href="#" className="btn btn-dark" variant="top" size="lg">
              <div>
                <IoIosPaperPlane size="32" />
                </div>
               Transacciones
            </Button>
        </Link>
        <Link to='/'>
            <Button href="#" className="btn btn-light" variant="top" size="lg">
              <div>
                <BsGraphUp size="32" />
              </div>
             Estadisticas
            </Button>
        </Link>
 
 
        <Link to='/' href="#">
          <Button className="btn btn-light" variant="top" size="lg">
            <div>
              <MdLanguage size="32"/>
            </div>
              Mis Datos
          </Button>
        </Link>

  
        <Link to='/'>
            <Button href="#" className="btn btn-dark" variant="top" size="lg">
              <div>
                <RiProductHuntLine size="32"/>
              </div>
                 Mis Productos
            </Button>
        </Link>
      </div>
      <br>
      </br>
     <div className="contbot">
          <Link to='/'>
            <Button href="#" className="btn btn-dark" variant="bottom" size="sm" >
              <RiDownload2Line size="32"/>
                Recargar Dinero
            </Button>
          </Link>


          <Link to='/'>
              <Button href="#" className="btn btn-light" variant="bottom" size="sm">
                <RiUpload2Line size="32"/>
                  Mandar Dinero
              </Button>
          </Link>
        </div>
      </Navbar>
    


  );
};

export default NavBar;