import { combineReducers } from "redux";
// import nameOfReducer from './nameOfReducer';
import itemDetails from "./itemDetail"

export default combineReducers({
  //   nameRelated: nameOfReducer
  itemDetails:itemDetails
});
