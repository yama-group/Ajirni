import axios from "axios";
import { NEW_USER, GET_ERRORS } from "./types";

export const createUser = user => dispatch => {
  console.log(user);
  axios
    .post("api/auth/register", user)
      
    .then(response => {
      console.log(response);
      dispatch({
        type: NEW_USER,
        payload: "successfully sign up"
      });
    })
    .catch(err => {
      
      const errors = {
        msg: err.response.data,
        status: err.response.status
      }

      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
  
};

