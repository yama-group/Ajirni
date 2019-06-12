import axios from "axios";
import { NEW_Item } from "./types";
export const postItem = item => dispatch => {
  console.log(item);
  axios
    .post("/additem/", item)
    .then(response => {
      console.log(response);
      dispatch({
        type: NEW_Item,
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};
