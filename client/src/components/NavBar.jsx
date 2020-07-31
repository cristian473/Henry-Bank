import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Navbar";
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
    <Container expand={"sm"}>
      <Navbar fixed="bottom" expand={"lg"} variant="light" bg="light">
        <Link to='/' >
          <div class="d-flex justify-content-start alert fade show" href="#">
            <Button variant="secondary" size="lg">
              <div>
                <IoIosPaperPlane />
              </div>
               Transacciones
            </Button>{' '}
          </div>
        </Link>
        <Link to='/'>
          <div class="d-flex justify-content-start alert fade show" href="#">
            <Button variant="primary" size="lg">
              <div>
                <BsGraphUp />
              </div>
             Estadisticas
            </Button>
          </div >
        </Link>
        <Link to='/'>
          <div class="d-flex justify-content-start alert fade show" href="#">
            <Button variant="primary" size="lg">
              <div>
                <MdLanguage />
              </div>
                   Mis Datos
            </Button>
          </div>
        </Link>
        <Link to='/'>
          <div class="d-flex justify-content-start alert fade show" href="#">
            <Button variant="secondary" size="lg">
              <div>
                <RiProductHuntLine />
              </div>
                 Mis Productos
            </Button>
          </div>
        </Link>
        <div className="recarga">
          <Link to='/'>
            <div className="mb-3" href="#">
              <Button variant="primary" size="sm" >
                <RiDownload2Line />
                  Recargar Dinero
         </Button>{' '}
            </div>
          </Link>
          <Link to='/'>
            <div className="mb-3" href="#">
              <Button className="btn btn-light" variant="primary" size="sm">
                <RiUpload2Line />
                  Mandar Dinero
         </Button>
            </div>
          </Link>
        </div>
      </Navbar>
    </Container>


  );
};

export default NavBar;