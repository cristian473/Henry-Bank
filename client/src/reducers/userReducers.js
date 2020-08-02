import { ADD_USERS, MODIFY_USER } from '../constants/userConstants';

const initialState = [];

export function addUsers(state = initialState, action) {

    if (action.type === ADD_USERS) {
        return state.concat(action.payload)
    }

    if (action.type === MODIFY_USER) {
        return state.concat(action.payload)
    }
    return state;
}