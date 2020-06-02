import { FETCH_REQUEST, FETCH_SUCCESS, ADD_TO_HISTORY, ADD_TO_FAVORITES } from "./actionTypes";

const initialState = {
  search: "",
  searchResult: [],
  historyRequests: [],
  favourites: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, loading: false, searchResult: action.result };
    case ADD_TO_HISTORY:
      return { ...state, historyRequests: state.historyRequests.concat(action.queryString) };
    case ADD_TO_FAVORITES:
      const favs = state.favourites.filter(item => item.id === action.card.id);
      if (favs.length === 0) {
        return { ...state, favourites: state.favourites.concat(action.card) };
      }

      return state;
    default:
      return state;
  }
};

export default reducer;
