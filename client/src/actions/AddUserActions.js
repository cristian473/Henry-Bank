import {
  ADD_USERS,
  ADD_USER,
  LOGGIN,
  GET_USER,
  GET_USER_LOGGED,
  MODIFY_USER,
  GET_PROFILE,
} from "../constants/userConstants";
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
    axios.post("http://localhost:3001/auth/register", user).then((res) => {
      if (res.status === 200) {
        return dispatch({ type: ADD_USERS }), window.history.back();
      } else {
        alert("Error en campos");
      }
    });
  };
}

export function modifyUser(id, user) {
  return (dispatch) => {
    axios.put(`http://localhost:3001/users/modify/${id}`, user).then((res) => {
      if (res.status === 200) {
        window.location.replace("http://localhost:3000/users/login2");
        return dispatch({ type: MODIFY_USER, payload: res.data });
      } else {
        alert("Error en campos");
      }
    });
  };
}

export function getProfile() {
  return (dispatch) => {
    axios.get(`http://localhost:3001/users/`).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        return dispatch({ type: GET_PROFILE, payload: res.data });
      }
    });
  };
}

export function loggin(user) {
  return function (dispatch) {
    return fetch("http://localhost:3001/auth/login", {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
      credentials: "include",
    }).then((res) => {
      if (res.status === 200) {
        return (
          dispatch({ type: LOGGIN, payload: res.json() }),
          window.location.replace("http://localhost:3000/Cliente")
        );
      } else {
        alert("Error en datos ingresados");
      }
    });
  };
}

export function getUser(email) {
  return function (dispatch) {
    console.log(email);
    return fetch("http://localhost:3001/users/" + email, {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        return dispatch({ type: GET_USER, payload: json });
      })
      .catch(() => {
        console.log("erroasdasdr");
      });
  };
}

export function getUserLoggedIn(email) {
  return function (dispatch) {
    return fetch("http://localhost:3001/users/" + email, {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        return dispatch({ type: GET_USER_LOGGED, payload: json });
      })
      .catch(() => {
        console.log("error");
      });
  };
}
