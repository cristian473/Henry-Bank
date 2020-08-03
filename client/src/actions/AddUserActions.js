import { ADD_USERS } from "../constants/userConstants";
import axios from "axios";

export function addUsers(user) {
  return (dispatch) => {
    axios.post("http://localhost:3001/auth/login/", user).then((response) => {
      dispatch({ type: ADD_USERS, payload: response.data });
    });
  };
}

export function addUser(user) {
  return function (dispatch) {
    axios.post("http://localhost:3001/users", user).then((res) => {
      if (res.status === 200) {
        return dispatch({ type: ADD_USERS }), window.history.back();
      } else {
        alert("Error en campos");
      }
    });
  };
}
