import {GET_VALID_USER} from '../constants/userConstants'
import axios from 'axios'
import swal from 'sweetalert2';

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
        swal.fire({
            title: "¡Listo!",
            text: "Revisa tu casilla de correos para seguir con el proceso.",
            icon: "success",
          }).then(()=>
              window.location.replace('http://localhost:3000/login')
          )
      }
        
      )
      .catch(()=>
        swal.fire({
            title: "¡Oops!",
            text: "El mail ingresado no pertenece a un cliente de HenryBank.",
            icon: "error",
        })
      );

}


export function resetPassUser (data) {

    axios.put('http://localhost:3001/auth/resetpassword/'+ data.code, data)
      .then(res => {
        swal.fire({
            title: "¡Listo!",
            text: "Su contraseña fue cambiada con éxito!",
            icon: "success",
          }).then(()=>
              window.location.replace('http://localhost:3000/login')
          )
      })

      .catch(()=>
        swal.fire({
            title: "¡Oops!",
            text: "El codigo es incorrecto, intentalo nuevamente.",
            icon: "error",
        })
      )


  

}