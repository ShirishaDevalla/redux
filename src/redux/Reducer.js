import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./Actions";

const initialState = {
  isAuthenticated: false,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true };
    case LOGIN_FAILURE:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};
