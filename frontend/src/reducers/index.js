import { combineReducers } from "redux";
import itemReducer from './itemsReducer';
import userReducer from './userReducer'
import signin from './signIn'
import useritems from './userItems'
import itemDetails from "./itemDetail"

export default combineReducers({
  itemsData: itemReducer,
  item: itemReducer,
  user: userReducer,
  signIn: signin,
  userItems: useritems,
  itemDetails: itemDetails
});
