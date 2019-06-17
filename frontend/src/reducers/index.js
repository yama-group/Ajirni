import {
  combineReducers
} from "redux";
import itemsReducer from "./itemsReducer";
import userReducer from "./userReducer";
import itemDetails from "./itemDetail";
import itemReducer from "./itemReducer";
import signin from "./signInReducer";
import useritems from "./userItemsReducer";
import user from "./userinfo"
import errors from "./errors"

export default combineReducers({
  itemsData: itemsReducer,
  item: itemReducer,
  userSignUp: userReducer,
  signin: signin,
  userItemsReducer: useritems,
  itemDetails: itemDetails,
  userItems: useritems,
  itemDetails: itemDetails,
  userInfo: user,
  errorMsg: errors
});