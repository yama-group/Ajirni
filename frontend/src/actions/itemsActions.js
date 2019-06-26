import axios from "axios";
import { FETCH_ITEMS, NEW_ITEM, Item_id } from "./types";

export const getAllItems = category => dispatch => {
  axios.get(`/all/?category=${category}`).then(data => {
    console.log(data.data);
    dispatch(
      {
        type: FETCH_ITEMS,
        payload: data.data
      },
      console.log(data.data)
    );
  });
};

export const itemId = id => dispatch => {
  window.localStorage.setItem("item_id",id)
  dispatch({
    type: Item_id,
    payload: id
  });
};
