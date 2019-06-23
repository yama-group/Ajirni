import axios from "axios";
import { NEW_USER, GET_ERRORS } from "./types";
import request from "request"
import {apiKey,appID} from "../components/config"

export const createUser = user => dispatch => {
  console.log(user);
  axios
    .post("api/auth/register", user)
      
    .then(response => {
      console.log(response);
      dispatch({
        type: NEW_USER,
        payload: "successfully sign up",
        done:true
      });

        const uid =response.data.user.id
      var options = {
        method: 'POST',
        url: 'https://api.cometchat.com/v1.6/users',
        headers: {
          apikey:apiKey,
          appid: appID,
          'content-type': 'application/json',
        },
        body: `{"uid":"${uid}","name":"${user.first_name}","avatar":"${user.image_url}"}`
      };
      
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
      
        console.log(body,"done");

    })
      
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

