import axios from "axios";
import { NEW_USER } from './types';

// export const createUser = (user) => dispatch => {
//   console.log('posting')

//   axios.post("/signUp/", user).then((data) => {

//     console.log(data)
//   }).catch((error) => {
//     console.log(error)
//   })

// };


export const createUser = (user) => dispatch => {
  console.log(user);
  axios
    .post("/signUp/", user)
    .then(response => {
      console.log(response);
      dispatch({
        type: NEW_USER,
        payload: ' successfully sign up '
      });
    })
    .catch(error => {
      dispatch({
        type: NEW_USER,
        payload: ' please try agian '
      });
    });
};


export const userSignIn = (user) => dispatch => {
  console.log(user);
  axios
    .post("/signUp/", user)
    .then(response => {
      console.log(response);
      dispatch({
        type: NEW_USER,
        payload: ' successfully sign up '
      });
    })
    .catch(error => {
      dispatch({
        type: NEW_USER,
        payload: ' please try agian '
      });
    });
};

// export const getAllItems = () => dispatch => {
//   axios.get("/all/")
//     .then(data =>
//       dispatch({
//         type: FETCH_ITEMS,
//         payload: data.data
//       })
//     );
// };