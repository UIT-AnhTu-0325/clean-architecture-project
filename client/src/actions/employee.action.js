import axios from "../helpers/axios";
import { employeeConstants } from "./constants";

export const getAllEmployees = () => {
  return async (dispatch) => {
    dispatch({ type: employeeConstants.GET_ALL_EMPLOYEES_REQUEST });
    const res = await axios.get(`Employee`);
    if (res.status === 200) {
      dispatch({
        type: employeeConstants.GET_ALL_EMPLOYEES_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: employeeConstants.GET_ALL_EMPLOYEES_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
