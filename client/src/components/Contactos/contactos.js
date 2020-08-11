import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getContacts,
  deleteContacts,
  addContact,
} from "../../actions/contactsActions";
import { SELECT_CONTACT } from "../../constants/userConstants";
import henry from "../Usuario/images/henry.svg";
import "./contactos.css";
import { Button, Table, Container, Form } from "react-bootstrap";
import { getProfile } from "../../actions/UserActions";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((store) => store.usuario.contacts);
  const userSelected = useSelector((store) => store.usuario.contactSelected);
  const userContected = useSelector((store) => store.usuario.usuarioConectado);

  const [emailValue, setEmailValue] = useState('');

  useEffect(() => dispatch(getProfile()), []);
  useEffect(() => dispatch(getContacts(userContected.id)), [userContected]);


  const selectedUser = (user) => {
    dispatch({ type: SELECT_CONTACT, payload: user });
  };

  const deleteHandler = (email, id) => {
    dispatch(deleteContacts(email, id));
  };

  const addHandler = () => {
    dispatch(addContact(emailValue, userContected.id));
    setEmailValue('');
  };

  const volver = function (e) {
    window.location.replace('http://localhost:3000/enviar')
  }

  return (
    <div>
      {/* <div>
        <img class="logo" src={henry} alt="logo"></img>
        <h1>Contactos</h1>
      </div> */}
      {/* <div>
        <svg
          id="svg1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#000000"
            fill-opacity="1"
            d="M0,256L80,256C160,256,320,256,480,218.7C640,181,800,107,960,106.7C1120,107,1280,181,1360,218.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
        <svg
          id="svg2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fffe00"
            fill-opacity="1"
            d="M0,288L80,277.3C160,267,320,245,480,240C640,235,800,245,960,213.3C1120,181,1280,107,1360,69.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div> */}

      <Container id="tableCont" class="row justify-content-center">
        <div>
          <Table id="tableContacts" striped bordered hover borderless="true">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
              </tr>
            </thead>
            {console.log(contacts)}
            {contacts.length == 0 ? (
              <th>No tienes contactos aún!</th>
            ) : (
                <tbody>
                  {contacts.map((contact) => {
                    return (
                      contact.id == userSelected.id ? (
                        <tr id="rowData">
                          <td>
                            {contact.firstName} {contact.lastName}
                          </td>
                          <td onClick={() => selectedUser(contact)}>{contact.email}</td>
                      </tr>
                      ) : (
                        <tr id="rowTable">
                          <td>
                            {contact.firstName} {contact.lastName}                            
                          </td>
                          <td onClick={() => selectedUser(contact)}>{contact.email}</td>
                      </tr>
                      )
                    )
                    // <tr id="rowTable">
                    //   <td>
                    //     {contact.firstName} {contact.lastName}
                    //   </td>
                    //   <td onClick={() => selectedUser(contact)}>{contact.email}</td>
                    // </tr>
                  })}
                </tbody>
              )}
          </Table>
        </div>
      </Container>
      <div class="btns">
      <div id="wholeBottom">
        <div id="btns">
          <Form>
            <input
            placeholder="Ingrese email de contacto"
            value={emailValue}
            onChange={(e) => {
              setEmailValue(e.target.value);
            }}
          ></input>
          </Form>
          <div id="btns">
            {userSelected !== "" ? (
              <div id="btnsDisplay">
                <Button id="addDisplay"
                  className="btn btn-dark"
                  variant="top"
                  size="lg"
                  onClick={() => addHandler()}
                >
                  Agregar
              </Button>
                <Button id="deleteDisplay"
                  className="btn btn-dark"
                  variant="top"
                  size="lg"
                  onClick={() => deleteHandler(userSelected.email, userContected.id)}
                >
                  Eliminar
              </Button>
              </div>
            ) : (
                <div id="btnsDisabled">
                  <Button
                    onClick={() => addHandler(contacts.email)}
                    className="btn btn-dark"
                    variant="top"
                    size="lg"
                  >
                    Agregar
              </Button>
                  <Button id="deleteBtn" disabled style={{ pointerEvents: 'none' }} className="btn btn-dark" variant="top" size="lg">
                    Eliminar
              </Button>

                </div>
              )}
          </div>
        </div>
        <div id="backSend" class="row justify-content-center"> <Button
          onClick={volver}
          className="btn btn-dark"
          variant="top"
          size="lg"
        >Volver a Enviar Dinero</Button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Contacts;