import {
  combineReducers
} from "redux";
// import nameOfReducer from './nameOfReducer';
import signin from './signIn'
import useritems from './userItems'

export default combineReducers({
  //   nameRelated: nameOfReducer
  signIn: signin,
  userItems: useritems
});