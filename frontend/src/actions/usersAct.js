import axios from "axios";
import { FETCH_USERS } from "./types"

export const getAllUsers = () => dispatch => {
  axios.get("/allusers/").then(data => {
    console.log(data);
    dispatch(
      {
        type: FETCH_USERS,
        payload: data.data
      },
      console.log(data.data)
    );
  }).catch((error) => {
    console.log(error)
  })
};

