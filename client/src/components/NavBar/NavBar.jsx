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
    <Navbar  className='m-auto' fixed="bottom"  expand={"md"} variant="light" bg="light">     
      
      <div className="conttop" align="right">
        <Link to='/'  >
            <Button href="#" className="btn btn-dark" variant="top" size="lg">
              
                <IoIosPaperPlane size="32" />
                <br></br>
               Transacciones
            </Button>
        </Link>
        <Link to='/'>
            <Button href="#" className="btn btn-light" variant="top" size="lg">
                <BsGraphUp size="32" />
              <br></br>              
             Estadisticas
            </Button>
        </Link>
 
 
        <Link to='/' href="#">
          <Button className="btn btn-light" variant="top" size="lg">
              <MdLanguage size="32"/>
              <br></br>            
              Mis Datos
          </Button>
        </Link>

  
        <Link to='/'>
            <Button href="#" className="btn btn-dark" variant="top" size="lg">
              
                <RiProductHuntLine size="32"/>
               <br></br>
                 Mis Productos
            </Button>
        </Link>
      </div>
     <div className="contbot" align="center">
          <Link to='/recargardinero'>
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