import axios from "axios";
import { FETCH_ITEMS, NEW_ITEM } from './types';


export const getAllItems = () => dispatch => {
  axios.get("/all/")
    .then(data =>
      dispatch({
        type: FETCH_ITEMS,
        payload: data.data
      })
    );
};


