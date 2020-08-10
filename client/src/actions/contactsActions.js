import { GET_USER_CONTACTS } from '../constants/userConstants'
import axios from 'axios'

export function getContacts(id) {
  return function (dispatch) {
    axios.get(`http://localhost:3001/contacts/${id}`)
    .then((res) => {      
      if (res.status === 200) {
        return dispatch({
          type: GET_USER_CONTACTS,
          payload: res.data.contactos,
        })
      } else {
        alert(res.message);
      }
    })
  }
}


export function addContact(email, id) {
  return function (dispatch) {
    axios.post(`http://localhost:3001/contacts/${id}/addContact`, { email })
    .then(() => {
      axios.get(`http://localhost:3001/contacts/${id}`)
      .then((response) => {
        return dispatch({
          type: GET_USER_CONTACTS,
          payload: response.data.contactos
        })
      })
    })
  }
}

export function deleteContacts(email, id) {
  return function (dispatch) {
    axios.delete(`http://localhost:3001/contacts/${id}/deleteContact/${email}`)
    .then(res => {
      // window.location.reload();
      axios.get(`http://localhost:3001/contacts/${id}`)
      .then((response) => {
        return dispatch({
          type: GET_USER_CONTACTS,
          payload: response.data.contactos
        })
      })
      .catch(res => {
        return dispatch({
          type: GET_USER_CONTACTS,
          payload: []
        })
      })
    })
  }
}

    
