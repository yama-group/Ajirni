import axios from "axios";
import { SIGN_IN } from "./types";

export const userSignIn = signIn_Info => dispatch => {
  // console.log(signIn_Info);
  axios
    .post("api/auth/login", signIn_Info)
    .then(response => {
      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("userId", response.data.user.id);
      window.localStorage.setItem("username", response.data.user.username);
      




      dispatch({
        type: SIGN_IN,
        payload: response.data.token,
        userId: response.data.user.id,
        username: response.data.user.username,
        visible: null
      });
    })
    .catch(error => {
      dispatch({
        type: SIGN_IN,
        error: "Incorrect username or password.",
        payload: null,
        userId: null,
        username: null,
        visible: true
      });
    });
};
