import { ADD_USERS, ADD_USER } from "../constants/userConstants";
import axios from "axios";

export function addUsers(user) {
  return (dispatch) => {
    axios.post("http://localhost:3001/users/new/", user).then((response) => {
      dispatch({ type: ADD_USERS, payload: response.data });
    });
  };
}


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



