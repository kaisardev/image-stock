import { FETCH_REQUEST, FETCH_SUCCESS, ADD_TO_HISTORY } from "./actionTypes";

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
      return { ...state, historyRequests: state.historyRequests.concat(action.queryString) }
    default:
      return state;
  }
  // if (action.type === ADD_TO_HISTORY) {
  //   return {
  //     ...state,
  //     historyRequests: [...state.historyRequests, action.request],
  //   };
  // }
  // return state;
};

export default reducer;
