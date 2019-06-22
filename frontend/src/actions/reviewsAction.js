import axios from 'axios'
import {GET_REVIEWS} from "./types"

export const getReviews = itemId => dispatch => {
  axios.get('reviews/?item=' + itemId).then(data => 
    dispatch({
      type: GET_REVIEWS,
      payload: data.data
    })
  );
};

export const postReviews = addedReview => dispatch => {
  console.log(addedReview)
  axios.post("/reviews/", addedReview)
  
  // .then(data => 
  //   dispatch({
  //     type: GET_REVIEWS,
  //     payload: data.data
  //   })
  // );
};

