import * as constants from "../contants/users";

const INITIAL_STATE = {
  user: {},
  loading: false,
  error: "",
};

export const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.LOADING: return { ...state, loading: true };
    case constants.SIGN_IN: return { ...state, user: action.payload, loading: false };
    case constants.SIGN_UP: return { ...state, user: action.payload, loading: false };
    case constants.ERROR: return { ...state, loading: false, error: action.payload };
    case constants.CLEAR: return { ...INITIAL_STATE };
    default:
      return state;
  }
};