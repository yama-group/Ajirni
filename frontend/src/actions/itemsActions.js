// import axios from "axios";
import { FETCH_ITEMS, NEW_ITEM } from './types';



export const getAllItems = () => dispatch => {
  console.log('fetching')

  fetch("/all/")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_ITEMS,
        payload: data
      })
    );
};


