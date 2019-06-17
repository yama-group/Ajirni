import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import userReducer from "./userReducer";
import itemDetails from "./itemDetail";
import itemReducer from "./itemReducer";
import signin from "./signInReducer";
import useritems from "./userItemsReducer";
import user from "./userinfo";
import likes from "./likesReducer";
export default combineReducers({
  itemsData: itemsReducer,
  item: itemReducer,
  user: userReducer,
  signin: signin,
  userItemsReducer: useritems,
  userItems: useritems,
  itemDetails: itemDetails,
  userInfo: user,
  likes: likes
});
