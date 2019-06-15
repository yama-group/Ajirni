import axios from "axios";
import {
  SIGN_IN
} from './types';


export const userSignIn = (signIn_Info) => dispatch => {
  console.log(signIn_Info);
  axios
    .post("api/auth/login", signIn_Info)
    .then(response => {
      console.log(response);
      dispatch({
        type: SIGN_IN,
        payload: 'signed in successfully'
      });
    })
    .catch(error => {
      dispatch({
        type: SIGN_IN,
        payload: 'please try agian'
      });
    });
};
