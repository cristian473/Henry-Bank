import { 
  ADD_USER,
  GET_PROFILE, 
  MODIFY_USER, 
  GET_WALLET, 
  LOGOUT, 
  GET_TRANSACTIONS, 
  RECARGAR_DINERO,
  CARGAR_DINERO,
  ENVIAR_DINERO, 
  LISTA_CONTACTOS 
} from "../constants/userConstants";
import axios from "axios";
import swal from 'sweetalert';




export function addUser(user) {
  return function (dispatch) {
    axios.post("http://localhost:3001/auth/register", user)
    .then((res) => {
      if (res.status === 200) {
        swal({
          title: "¡Registro realizado!",
          text: "Se ha enviado un email de validación a " + user.email + " =)",
          icon: "success",
        })
        .then((value) => {
          swal(dispatch({ type: ADD_USER }) && window.location.replace('http://localhost:3000/login'));
        });  
      }       
    })
    .catch(() => {
      swal({
        title: "¡Qué mal!",
        text: "E-mail " + user.email + " ya está en uso =c" ,
        icon: "error",
      });
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

export function logout() {
  return function (dispatch) {
    axios.get('http://localhost:3001/auth/logout').then((res) => {
      if (res.status === 200) {
        swal({
          title: "¡Buen trabajo!",
          text: "Se ha deslogueado satisfactoriamente",
          icon: "success",
        })
        .then((value) => {
          swal(dispatch({ type: LOGOUT }) && window.location.replace('http://localhost:3000/login'));
        });  
      }       
    })
    .catch(() => {
      swal({
        title: "¡Qué mal!",
        text: "No se pudo desloguear =c",
        icon: "error",
      });
    })
  }
}

export function enviarDinero(from, to, money) {
  return function (dispatch) {
    const myBody = {
      money: money,
      transactiontype: 'UsertoUser'
    }
    axios.put(`http://localhost:3001/transactions/${from}/${to.idContacto}`, myBody)
    .then(res => {
      if (res.status === 200) {
          swal({
          title: "¡Buen trabajo!",
          text: "Se ha enviado $" + money + " a " + to.nombreContacto,
          icon: "success",
        })
        .then((value) => {
          swal(dispatch({ type: ENVIAR_DINERO }) && window.location.replace('http://localhost:3000/cliente'));
        });   
      } 
    })
    .catch((error) => {
      const { data } = error.response;
      swal({
        title: "¡Qué mal!",
        text: data.message,
        icon: "error",
      });
    })
  }
} 

export function listaContactos(idContact) {
  return function (dispatch) { 
    axios.get(`http://localhost:3001/users/${idContact}`)
    .then(res => {
      if (res.status === 200) {
        return dispatch({ 
          type: LISTA_CONTACTOS, 
          payload: {
            nombreContacto: res.data.firstName + ' ' + res.data.lastName,
            idContacto: res.data.id
          }
        })
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
            swal({
              title: "¡Buen trabajo!",
              text: "Tus datos fueron modificados con éxitos",
              icon: "success",
            })
            .then((value) => {
              swal(window.location.replace('http://localhost:3000/cliente'));
            });
            } 
          })
        } 
      })   
      .catch(() => {
        swal({
          title: "¡Qué mal!",
          text: "La dirección ingresada no es válida =(",
          icon: "error",
        });
      })           
   }
}

export function cargarDinero(id) {
  return function (dispatch){
    axios.post(`http://localhost:3001/transactions/loadBalance/${id}`)
    .then(res => {
      
      if (res.status === 200) {
        swal({
          title: "¡Buen trabajo!",
          text: "Se ha realizado la carga satisfactoriamente",
          icon: "success",
        })
        .then((value) => {
          swal(window.location.replace('http://localhost:3000/cliente') &&  dispatch({ type: CARGAR_DINERO }));
        });       
      } 
    })
  }
} 
