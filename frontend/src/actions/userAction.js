import axios from "axios";
import { NEW_USER } from "./types";

export const createUser = user => dispatch => {
  // console.log(user);
  axios
    .post("api/auth/register", user)
    .then(response => {
      console.log(response);
      dispatch({
        type: NEW_USER,
        payload: "successfully sign up"
      });
    })
    .catch(error => {
      dispatch({
        type: NEW_USER,
        payload: " please try agian "
      });
    });
};
