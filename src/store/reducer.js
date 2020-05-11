import { ADD_TO_HISTORY } from "./actions";

const initialState = {
  historyRequests: [],
  favourites: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === ADD_TO_HISTORY) {
    return {
      ...state,
      historyRequests: [...state.historyRequests, action.request],
    };
  }
  return state;
};

export default reducer;
