import {GET_VALID_USER} from '../constants/userConstants'
import axios from 'axios'

export function getValidUser (id){
    return (dispatch => {
        axios.get('http://localhost:3001/users/' + id)
            .then(res => {
                dispatch({type: GET_VALID_USER, payload: res.data})
            })
    }) 
}

export function validEmailUser (email) {
  
    axios.post('http://localhost:3001/auth/validate/resetpassword/', {email})
      .then(res =>{
        alert('Por favor, verifica tu casilla de correos')
        // window.location.replace('http://localhost:3000/resetpassword/'+ res.data[1][0].id)
        window.location.replace('http://localhost:3000/login');
      }
        
      )
      .catch(()=>alert('email invalido'));

}


export function resetPassUser (data) {

    axios.put('http://localhost:3001/auth/resetpassword/'+ data.code, data)
      .then(res => {
        alert('¡contraseña cambiada con exito!');
        window.location.replace('http://localhost:3000/login')
      })

      .catch(()=>alert('datos invalidos'))


  

}