import axios from "axios";
// import { NEW_USER } from './types';

export const createUser = (user) => dispatch => {
  console.log('posting')

  axios.post("/signUp/", user).then((data) => {

    console.log(data)
  }).catch((error) => {
    console.log(error)
  })

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