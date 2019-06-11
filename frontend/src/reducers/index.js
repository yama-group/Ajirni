import { combineReducers } from "redux";
// import nameOfReducer from './nameOfReducer';
import itemDetails from "./itemDetail"
import itemReducer from "./itemReducer";
export default combineReducers({
  //   nameRelated: nameOfReducer
  itemDetails:itemDetails,
   item: itemReducer 
});
