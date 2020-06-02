import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR, ADD_TO_HISTORY, ADD_TO_FAVORITES } from "./actionTypes";
import axios from "../axios-unsplash";

const CLIENT_ID = "Client-ID VIpiG3v43i61SAaWri3CbqBYl0FDVVdSJddPajfUAMU";

export const search = (e, queryString) => {
  return dispatch => {
    dispatch({ type: FETCH_REQUEST });
    e.preventDefault();
    axios
      .get(`/search/photos?query=${queryString}`, {
        headers: {
          Authorization: CLIENT_ID,
        },
      })
      .then((response) => {
        console.log(response.data);
        dispatch({ type: FETCH_SUCCESS, result: response.data.results });
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, error });
      });
  }
};

export const addToHistory = (queryString) => {
  return { type: ADD_TO_HISTORY, queryString };
};

export const addToFavorites = (card) => {
  return { type: ADD_TO_FAVORITES, card };
}