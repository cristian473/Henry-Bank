import { ADD_USERS } from "../constants/userConstants";
import axios from "axios";

export function addUsers(user) {
  return (dispatch) => {
    axios.post("http://localhost:3001/users/new", user).then((response) => {
      dispatch({ type: ADD_USERS, payload: response.data });
    });
  };
}

export function addUser(user) {
    return function(dispatch) {
        return fetch('http://localhost:3080/users', {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(user),
                credentials: 'include'

            })
            .then((res) => {
                if (res.status === 200) {
                    return (
                        dispatch({ type: ADD_USER }),
                        window.history.back()
                    )
                } else {
                    alert("Error en campos")
                }
            })
    }
}