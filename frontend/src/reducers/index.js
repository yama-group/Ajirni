import { combineReducers } from "redux";
import itemReducer from './itemsReducer';
import userReducer from './userReducer'

export default combineReducers({
  itemsData: itemReducer,
  item: itemReducer,
  user: userReducer
});
