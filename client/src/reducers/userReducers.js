import { ADD_USERS, ADD_USER, LOGGIN, GET_USER, GET_USER_LOGGED, GET_PROFILE } from '../constants/userConstants';

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
        case GET_USER:
            return {
                ...state,
                usuarios: state.usuarios
            }
        case GET_PROFILE:
            return {
                ...state,
                usuarioConectado: action.payload[0]
            }
        case LOGGIN:
            return {
                ...state,
                usuarioConectado: action.payload
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

/* export function addUsers(state = initialState, action) {

    if (action.type === ADD_USERS) {
        return state.concat(action.payload)
    }

    if (action.type === MODIFY_USER) {
        return state.concat(action.payload)
    }
    return state;
}

export function addUser(state = initialState, action) {

    if (action.type === ADD_USER) {

        return state.concat(action.payload)
    }
    return state;
}

export function getLoggin (state = initialState, action) {

    if (action.type === GET_USER) {

        return state.concat(action.payload)
    }
    return state;
}


export function getUser (state = initialState, action) {

    if (action.type === LOGGIN) {

        return state.concat(action.payload)
    }
    return state;
} */