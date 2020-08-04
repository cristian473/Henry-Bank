import { ADD_USERS, ADD_USER, GET_USER_LOGGED, MODIFY_USER , GET_PROFILE, GET_WALLET, LOGOUT } from "../constants/userConstants";
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
    axios.post("http://localhost:3001/auth/register", user).then((res) => {
      if (res.status === 200) {
        return dispatch({ type: ADD_USER }), window.history.back();
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
        window.location.replace('http://localhost:3000/login')
        return dispatch({ type: MODIFY_USER, payload: res.data });
      } else {
        alert("Error en campos");
      }
    })
  }
}

export function getProfile(){
  return (dispatch) => {
    axios.get('http://localhost:3001/users/loggedin').then((res) => {
      console.log("===== Datos de getProfile a /users/loggedin =====")
      console.log(res);
      if (res.status === 200) {
        return dispatch({ type: GET_PROFILE, payload: res.data });
      } 
    })
  }
}

export function getWallet(id){
  return (dispatch) => {
    axios.get(`http://localhost:3001/users/wallet/${id}`).then((res) => {
      if (res.status === 200) {
        return dispatch({ type: GET_WALLET, payload: res.data });
      } 
    })
  }
}

export function getUserLoggedIn(user) {
  // return function(dispatch) {
  //     return fetch('http://localhost:3001/users/' + email, {
  //             headers: {
  //                 'Accept': '*/*',
  //                 'Content-Type': 'application/json'
  //             },
  //             method: 'GET',
  //             credentials: 'include'

  //         })
  //         .then((res) => res.json())
  //         .then((json) => {
  //             return dispatch({ type: GET_USER_LOGGED, payload: json })
  //         })
  //         .catch(() => {
  //             console.log("error")
  //         })

  // }
  return function (dispatch) {
    axios.post("http://localhost:3001/auth/login", user)
    .then((res) => {
      console.log("===== Datos de getUserLoggedIn a /auth/login =====")
      console.log(res);
      res.json();
    })
    .then((json) => {
      return dispatch({ type: GET_USER_LOGGED, payload: json })
    })
    .catch(() => {
      console.log("error en login")
    })
  };
}

 export function logout() {

  return function (dispatch) {
    axios.get("http://localhost:3001/auth/logout").then((res) => {
      if (res.status === 200) {
       console.log('aquí estamos en logout')
       
        return dispatch({ type: LOGOUT });
      } else {
        alert("No fue posible desloguearse");
      }
    });
  };

} 




