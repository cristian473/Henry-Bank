import { ADD_USER, GET_USER_LOGGED, MODIFY_USER , GET_PROFILE, GET_WALLET, LOGOUT, GET_TRANSACTIONS, RECARGAR_DINERO, ENVIAR_DINERO } from "../constants/userConstants";
import axios from "axios";

export function addUser(user) {
  return function (dispatch) {
    axios.post("http://localhost:3001/auth/register", user).then((res) => {
      if (res.status === 200) {
        return dispatch({ type: ADD_USER });
        window.history.back()
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
    axios.get('http://localhost:3001/auth/profileuser', {withCredentials: true}).then((res) => {
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

export function getTransactions(idUser){
  return (dispatch) => {
    axios.get(`http://localhost:3001/transactions/history/${idUser}`).then((res) => {
      if (res.status === 200) {
        return dispatch({ type: GET_TRANSACTIONS, payload: res.data });
      } 
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

export function logout() {
  return function (dispatch) {
    axios.get("http://localhost:3001/auth/logout")
    .then((res) => {
      if (res.status === 200) {
        return dispatch({ type: LOGOUT });
      } else {
        alert("No fue posible desloguearse");
      }
    })
  }
}

export function recarDinero(idUser, money) {
  return function (dispatch) {
    axios.post(`http://localhost:3001/transactions/loadBalance/${idUser}`, money)
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: RECARGAR_DINERO });
      } else {
        alert("No se pudo recargar");
      }
    })
  }
} 

export function enviarDinero(from, to, money) {
  return function (dispatch) {
    axios.put(`http://localhost:3001/transactions/${from}/${to}`, money)
    .then(res => {
      if (res.status === 200) {
        return dispatch({ type: ENVIAR_DINERO });
      } else {
        alert("No se pudo realizar el envío");
      }
    })
  }
} 







