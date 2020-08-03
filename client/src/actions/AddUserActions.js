import { ADD_USERS, ADD_USER, MODIFY_USER } from "../constants/userConstants";
import axios from "axios";

// export function addUsers(user) {
//   return (dispatch) => {
//     axios.post("http://localhost:3001/users/new/", user).then((response) => {
//       dispatch({ type: ADD_USERS, payload: response.data });
//     });
//   };
// }


export function addUser(user) {
  return function (dispatch) {
    axios.post("http://localhost:3001/users/new", user).then((res) => {
      if (res.status === 200) {
        return dispatch({ type: ADD_USER }), window.history.back();
      } else {
        alert("Error en campos");
      }
    });
  };
}

export function modifyUsers(user) {
  return function (dispatch) {
    axios.put('http://localhost:3001/users/modify', user)
    .then((res) => {
      if ( res.status === 200) {
        return dispatch({type: MODIFY_USER}), window.location.reload();
      } else {
        alert("Error en campos");
      }
    });
  };
}

// export function getUser(user) {
//   return function (dispatch) {
//     axios.get('http://localhost:3001/users/', id)
//     .then((res) => {
//       if ( res.status ===200) {
//         return dispatch({type: GET_USER});
//       }  else {
//         alert("No hay Usuario con ese ID")
//       }
//     });
//   };
// }