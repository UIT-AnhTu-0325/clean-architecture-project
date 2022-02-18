import { authConstants } from "../actions/constants";

/* eslint-disable import/no-anonymous-default-export */
const initState = {
  isSuccess: false,
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case authConstants.SIGN_IN_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.SIGN_IN_SUCCESS:
      state = {
        ...state,
        loading: false,
        isSuccess: true,
      };
      break;
    case authConstants.SIGN_IN_FAILURE:
      state = {
        ...state,
        loading: false,
        isSuccess: false,
        error: action.payload,
      };
      break;
    default:
      break;
  }
  return state;
};
