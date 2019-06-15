import axios from "axios";
import { USER_ITEMS, Item_id } from "./types";

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
