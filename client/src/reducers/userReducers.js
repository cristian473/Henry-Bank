import { ADD_USER,SELECT_CONTACT, GET_USER_CONTACTS, GET_USER_LOGGED, GET_PROFILE, GET_WALLET, LOGOUT,RESET_PASS_USER, GET_TRANSACTIONS } from '../constants/userConstants';
import { bindActionCreators } from 'redux';

const initialState = {
    usuarios: [],
    usuarioConectado: {},
    wallet: {},
    transactions: {},
    contacts: [],
    contactSelected:''
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
                usuarioConectado: action.payload
            }

        case GET_WALLET:
            return {
                ...state,
                wallet: action.payload
            }

        case GET_TRANSACTIONS:
            return {
                ...state,
                transactions: action.payload
            }
        
        case GET_USER_LOGGED:
            return {
                ...state,
                usuarioConectado: action.payload
            }
            case LOGOUT:
            return {
                ...state,
                usuarioConectado: {}
            }
            case RESET_PASS_USER:
            return {
                ...state,
                usuarios: state.usuarios
            }

            case GET_USER_CONTACTS:
                console.log(action.payload)
                return{
                    ...state,
                    contacts: action.payload
                }
            case SELECT_CONTACT:
                return {
                    ...state,
                    contactSelected: action.payload
                }
        default:
            return state
    }
};

