import { ADD_USERS, ADD_USER, LOGGIN, GET_USER, GET_USER_LOGGED } from "../constants/userConstants";
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

export function loggin(user) {
  return function(dispatch) {
      return fetch('http://localhost:3001/auth/login', {
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
                      dispatch({ type: LOGGIN, payload: res.json() }),
                      window.location.replace('http://localhost:3000/Cliente')
                  )
              } else {
                  alert("Error en datos ingresados")
              }
          })
  }
}

export function getUser(email) {
  return function(dispatch) {
    console.log(email)
      return fetch('http://localhost:3001/users/' + email, {
              headers: {
                  'Accept': '*/*',
                  'Content-Type': 'application/json'
              },
              method: 'GET',
              credentials: 'include',

          })
          .then((res) => res.json())
          .then((json) => {
              return dispatch({ type: GET_USER, payload: json })
          })
          .catch(() => {
              console.log("erroasdasdr")
          })
  }
}

export function getUserLoggedIn(email) {
  return function(dispatch) {
      return fetch('http://localhost:3001/users/' + email, {
              headers: {
                  'Accept': '*/*',
                  'Content-Type': 'application/json'
              },
              method: 'GET',
              credentials: 'include'

          })
          .then((res) => res.json())
          .then((json) => {
              return dispatch({ type: GET_USER_LOGGED, payload: json })
          })
          .catch(() => {
              console.log("error")
          })

  }
}
