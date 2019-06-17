import axios from "axios";
import { LIKES_PAGE } from "./types";


export const getUserLikes = id => dispatch => {
  axios.get("userItems/?user_id=1").then(data =>
    dispatch({
      type: LIKES_PAGE,
      payload: data.data
    })
  );
};
