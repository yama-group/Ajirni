import axios from "axios";
import { FETCH_ITEMS, NEW_ITEM } from './types';


export const getAllItems = (category = 3) => dispatch => {
  axios.get(`/all/?category=${category}`)
    .then(data =>
      dispatch({
        type: FETCH_ITEMS,
        payload: data.data
      }, console.log(data.data))

    );
};




