import {GET_USER_CONTACTS} from '../constants/userConstants'
import axios from 'axios'

export function getContacts(id) {
    return function (dispatch) {
      axios.get("http://localhost:3001/contacts/ " + id).then((res) => {
       
            if (res.status === 200) {
              return dispatch({
                type: GET_USER_CONTACTS,
                payload: res.data.contactos,
              });
            } else {
              alert(res.message);
            }
          });
  
    };
  }


export const addContact = (email) => {
console.log(email)
    return function (dispatch) {
        axios.post('http://localhost:3001/contacts/'+ 1 +'/addContact', {email})
            .then(res => {
                axios.get("http://localhost:3001/contacts/" + 1).then((response) => {
                return dispatch({
                    type: GET_USER_CONTACTS,
                    payload: response.data.contactos,
                    });
                });
            })
    }

}


export const deleteContacts = (email, id) => {
        return function (dispatch) {
            axios.delete('http://localhost:3001/contacts/'+ 1 +'/deleteContact/' + email)
                .then(res => {
                    axios.get("http://localhost:3001/contacts/" + 1).then((response) => {
                    return dispatch({
                        type: GET_USER_CONTACTS,
                        payload: response.data.contactos,
                        });
                    });
                })
        }
    
    }
