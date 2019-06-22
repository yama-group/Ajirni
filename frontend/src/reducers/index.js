import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import userReducer from "./userReducer";
import itemDetails from "./itemDetail";
import itemReducer from "./itemReducer";
import signin from "./signInReducer";
import useritems from "./userItemsReducer";
import user from "./userinfo";
import likes from "./likesReducer";
import errors from "./errors"
import usersReducer from "./usersReducer"

export default combineReducers({
  itemsData: itemsReducer,
  item: itemReducer,
  userSignUp: userReducer,
  signin: signin,
  userItemsReducer: useritems,
  userItems: useritems,
  itemDetails: itemDetails,
  userInfo: user,
  errorMsg: errors,
  likes: likes,
  usersReducer: usersReducer
});
