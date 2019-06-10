import { combineReducers } from "redux";
import itemReducer from './itemsReducer';

export default combineReducers({
  itemsData: itemReducer
});
