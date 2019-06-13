<<<<<<< HEAD
import { combineReducers } from "redux";
import itemReducer from './itemsReducer';
import userReducer from './userReducer'

export default combineReducers({
  itemsData: itemReducer,
  item: itemReducer,
  user: userReducer
});
=======
// import nameOfReducer from './nameOfReducer';
import {
  combineReducers
} from "redux";
import itemDetails from "./itemDetail"
import itemReducer from "./itemReducer";
import signin from './signIn'
import useritems from './userItems'

export default combineReducers({
  //   nameRelated: nameOfReducer
  signIn: signin,
  userItems: useritems,
  itemDetails: itemDetails,
  item: itemReducer
});
>>>>>>> 5424559fc42c90d31f6f6192a05f9d7bc4af11f0
