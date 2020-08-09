import { ADD_USER, MODIFY_USER , GET_PROFILE, GET_WALLET, LOGOUT, GET_TRANSACTIONS, ENVIAR_DINERO } from "../constants/userConstants";
import axios from "axios";

export function addUser(user) {
  return function (dispatch) {
    axios.post("http://localhost:3001/auth/register", user)
    .then((res) => {
      if (res.status === 200) {
        alert("Se ha enviado un email de validación a " + user.email)
        return dispatch({ type: ADD_USER }), window.location.replace('http://localhost:3000');
      } 
    })
    .catch(() => {
      alert("E-mail " + user.email + " ya está en uso")
    })

  };
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

export function logout() {
  return function (dispatch) {
    axios.get('http://localhost:3001/auth/logout').then((res) => {
      if (res.status === 200) {
       return dispatch({ type: LOGOUT });
      } else {
        alert("No fue posible desloguearse");
      }
    })
  }
}

export function enviarDinero(from, to, money) {
  console.log(money)
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

export function getAddress(address, id, user) {
  return function(dispatch) {
    axios.post('http://localhost:3001/auth/validate/street', address)          
        .then((res) => { 
          if(res.status === 200){
              axios.put(`http://localhost:3001/users/modify/${id}`, user)
              .then((res) => {
              if (res.status === 200) {
                dispatch({ type: MODIFY_USER, payload: res.data });
                return window.location.replace('http://localhost:3000/login');
              } 
            })
          } 
        })   
      
        .catch(() => {
          alert("Ubicación inválida")
        })           
   }
}
