import axios from "axios";
import { SAVE_COMMENTS, FETCH_COMMENTS } from "actions/types";

const fetchApi = () =>
  axios.get(`http://jsonplaceholder.typicode.com/comments`);

export const saveComments = comment => {
  return {
    type: SAVE_COMMENTS,
    payload: comment
  };
};

export const fetchComments = () => {
  return {
    type: FETCH_COMMENTS,
    payload: fetchApi()
  };
};
