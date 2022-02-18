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
      const content = res.json();
      if (content.hasOwnProperty("jwtString")) {
        localStorage.setItem("jwt", content["jwtString"]);
        localStorage.setItem("user", JSON.stringify(content["employee"]));
      }
    } catch (e) {
      dispatch({
        type: authConstants.SIGN_IN_FAILURE,
        payload: e,
      });
    }
  };
};
