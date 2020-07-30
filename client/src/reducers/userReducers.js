import { ADD_USERS } from '../constants/userConstants';

const initialState = [];

export function getDataUser(state = initialState, action) {

    if (action.type === ADD_USERS) {

        return state.concat(action.payload)
    }
    return state;
}