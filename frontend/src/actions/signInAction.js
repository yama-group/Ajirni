import axios from "axios";
import { SIGN_IN } from "./types";
import {CometChat} from '@cometchat-pro/chat';
import {NotificationContainer,NotificationManager} from 'react-notifications';
import {appID,apiKey,userId,username} from "../components/config"




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

      //comtchat login
      const uid =window.localStorage.getItem("userId");
      CometChat.login(uid,apiKey).then(
        User => {
          NotificationManager.success('You are now logged in', 'Login Success');
          console.log('Login Successful:', {User});
          window.localStorage.setItem("uid",User.uid)

          
        },
        error => {
          NotificationManager.error('Please try again', 'Login Failed');
          console.log('Login failed with exception:', {error});
        }
      )
      





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
