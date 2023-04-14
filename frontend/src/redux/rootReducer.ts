import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import cardReducer from './cardReducer';

const rootReducer = combineReducers({
  users: userReducer,
  card: cardReducer,
  auth: authReducer,
});

export default rootReducer;
