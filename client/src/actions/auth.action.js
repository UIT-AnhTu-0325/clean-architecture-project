import { signout, signin } from "../api/auth.api";
import { authConstants } from "./constants";

export const signinAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.SIGN_IN_REQUEST });
    try {
      const res = await signin(data);
      if (res.status === 200) {
        dispatch({
          type: authConstants.SIGN_IN_SUCCESS,
        });
      }
    } catch (e) {
      dispatch({
        type: authConstants.SIGN_IN_FAILURE,
        payload: e,
      });
    }
  };
};

export const signoutAction = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.SIGN_OUT_REQUEST });
    try {
      const res = await signout();
      if (res.status === 200) {
        dispatch({
          type: authConstants.SIGN_OUT_SUCCESS,
        });
      }
    } catch (e) {
      dispatch({
        type: authConstants.SIGN_OUT_FAILURE,
        payload: e,
      });
    }
  };
};
