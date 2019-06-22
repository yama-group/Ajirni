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

export const postReviews = dispatch => {
  axios.post('reviews/').then(data => 
    dispatch({
      type: GET_REVIEWS,
      payload: data.data
    })
  );
};

