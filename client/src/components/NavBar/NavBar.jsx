import React from 'react';
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
    <Navbar  className='contenavbar'   expand={"md"}  >           
      <div className="conttop" align="center">
        <Button className="buttonSB" href="/transactions"  variant="bbtn btn-dark" size="lg">
          <IoIosPaperPlane size="32" />
            <br></br>
              Transacciones
        </Button>
        <Button className="buttonSW" href="/stadistics"  variant="bbtn btn-light" size="lg">
          <BsGraphUp size="32" />
            <br></br>              
              Estadisticas
        </Button>
        <Button className="buttonSW" href="/myinfo"  variant="bbtn btn-light" size="lg">
          <MdLanguage size="32"/>
            <br></br>            
              Mis Datos
        </Button>  
        <Button className="buttonSB" href="/myproducts"  variant="bbtn btn-dark" size="lg">
            <RiProductHuntLine size="32"/>
               <br></br>
                Mis Productos
        </Button>
      </div>
      <div className="contbot" align="center">
        <Button className="buttonRB" href="/recargar"  variant="bbtn btn-dark" size="sm" >
            <RiDownload2Line size="32"/>
                Recargar Dinero
        </Button>
        <Button className="buttonWR" href="/enviar"  variant="bbtn btn-light" size="sm">
            <RiUpload2Line size="32"/>
                Mandar Dinero
        </Button>
      </div>
    </Navbar>
    


  );
};

export default NavBar;