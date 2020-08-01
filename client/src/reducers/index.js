import { combineReducers } from 'redux';
import { addUsers } from './userReducers'

const mainReducer = combineReducers({
    user: addUsers,

});

export default mainReducer;