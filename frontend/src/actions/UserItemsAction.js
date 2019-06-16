import axios from "axios";
import { USER_ITEMS, Item_id, USER_INFO } from "./types";


export const getAllUserItems = id => dispatch => {
  axios.get("userItems/?user_id=" + id).then(data =>
    dispatch({
      type: USER_ITEMS,
      payload: data.data
    })
  );
};


export const setItemId = id => dispatch => {
  dispatch({
    type: Item_id,
    payload: id
  });
};


export const getUserInfo = id => dispatch => {
  axios.get("userInfo/?user_id=" + id).then(data =>
    dispatch({
      type: USER_INFO,
      payload: data.data
    })
  );
};

