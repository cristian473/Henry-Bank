import { ADD_USERS } from "../constants/userConstants";
import axios from "axios";

export function addUsers(user) {
  return (dispatch) => {
    axios.post("http://localhost:3001/users/new", user).then((response) => {
      dispatch({ type: ADD_USERS, payload: response.data });
    });
  };
}
