import axios from "axios";
import { NEW_Item } from "./types";
export const postItem = item => dispatch => {
  axios
    .post("/additem/", item)
    .then(response => {
      console.log(response);
      dispatch({
        type: NEW_Item,
        payload: response
      });
    })
    .catch(error => {
      console.log(error);
    });
};
