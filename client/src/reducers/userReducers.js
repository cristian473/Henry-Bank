import { ADD_USERS, ADD_USER, GET_USER_LOGGED, GET_PROFILE } from '../constants/userConstants';

const initialState = {
    usuarios: [],
    usuarioConectado: {}
};

export default function usuario(state = initialState, action) {
    switch (action.type) {

        case ADD_USER:
            return {
                ...state,
                usuarios: state.usuarios
            }

        case GET_PROFILE:
            return {
                ...state,
                usuarioConectado: action.payload[0]
            }

        case GET_USER_LOGGED:
            return {
                ...state,
                usuarioConectado: action.payload
            }
            
        default:
            return state
    }
};

