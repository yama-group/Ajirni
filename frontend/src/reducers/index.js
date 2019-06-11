import { combineReducers } from "redux";
import itemReducer from './itemsReducer';
import itemReducer from "./itemReducer";

export default combineReducers({
  itemsData: itemReducer,
  item: itemReducer

});
