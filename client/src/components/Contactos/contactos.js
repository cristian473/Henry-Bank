import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getContacts,
  deleteContacts,
  addContact,
} from "../../actions/contactsActions";
import { SELECT_CONTACT } from "../../constants/userConstants";
import henry from "../Usuario/images/henry.svg";
import "./contactos.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { addUser } from "../../actions/UserActions";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((store) => store.usuario.contacts);
  const userSelected = useSelector((store) => store.usuario.contactSelected);

  useEffect(() => dispatch(getContacts(1)), []);

  const selectedUser = (email) => {
    dispatch({ type: SELECT_CONTACT, payload: email });
  };

  var emailValue = "";

  const inputHandlerChange = (e) => {
    emailValue = e.target.value;
  };

  const deleteHandler = (email, id) => {
    dispatch(deleteContacts(email, id));
  };

  const addHandler = () => {
    dispatch(addContact(emailValue));
    emailValue = "";
  };

  return (
    <div id="onboarding">
      <div class="titulo">
        <img class="logo" src={henry} alt="logo"></img>
        <h1 class="title">Contactos</h1>
      </div>
      <div>
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
      </div>
      <div id="container" class="row justify-content-center">
        <div class="col-auto">
          <Table size="lg" borderless="true" hover="true">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr>
                  <td>
                    {contact.firstName} {contact.lastName}
                  </td>
                  <td onClick={() => selectedUser(contact)}>{contact.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <div class="btns">
        <input
          onChange={(e) => {
            inputHandlerChange(e);
          }}
        ></input>

        {userSelected !== "" ? (
          <div>
            <Button
              className="btn btn-dark"
              variant="top"
              size="lg"
              onClick={() => addHandler(contacts.email)}
            >
              Agregar
            </Button>
            <Button
              className="btn btn-dark"
              variant="top"
              size="lg"
              onClick={() => deleteHandler(userSelected.email, userSelected.id)}
            >
              Eliminar
            </Button>
          </div>
        ) : (
          <div>
            <Button
              onClick={() => addHandler(contacts.email)}
              className="btn btn-dark"
              variant="top"
              size="lg"
            >
              Agregar
            </Button>
            <Button disabled className="btn btn-dark" variant="top" size="lg">
              Eliminar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
