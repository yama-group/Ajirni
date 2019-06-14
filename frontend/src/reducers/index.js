import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import userReducer from "./userReducer";
import itemDetails from "./itemDetail";
import itemReducer from "./itemReducer";
import signin from "./signIn";
import useritems from "./userItems";
import user from "./userinfo"
export default combineReducers({
  itemsData: itemsReducer,
  item: itemReducer,
  user: userReducer,
  signIn: signin,
  userItems: useritems,
  itemDetails: itemDetails,
  userInfo:user
});
