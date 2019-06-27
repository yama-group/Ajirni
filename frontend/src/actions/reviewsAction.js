import axios from 'axios'
import {GET_REVIEWS} from "./types"
import {NotificationContainer,NotificationManager} from 'react-notifications';


export const getReviews = itemId => dispatch => {
  axios.get('reviews/?item_id=' + itemId).then(data => {
   
    dispatch({
      type: GET_REVIEWS,
      payload: data.data
    })
  });
};

export const postReviews = addedReview => dispatch => {
  console.log(addedReview)
  axios.post("reviews/", addedReview).then(()=>{


    NotificationManager.info("New Review added.");
  })
  // .then(data => {
  //   console.log(data)
  //   dispatch({
  //     type: GET_REVIEWS,
  //     payload: data.data
  //   })
  // });
  
};

