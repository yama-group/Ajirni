// import nameOfReducer from './nameOfReducer';
import {
  combineReducers
} from "redux";
import itemDetails from "./itemDetail"
import itemReducer from "./itemReducer";
import signin from './signIn'
import useritems from './userItems'

export default combineReducers({
  //   nameRelated: nameOfReducer
  signIn: signin,
  userItems: useritems,
  itemDetails: itemDetails,
  item: itemReducer
});