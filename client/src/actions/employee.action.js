import axios from "../helpers/axios";
import { employeeConstants } from "./constants";

export const getAllEmployees = () => {
  return async (dispatch) => {
    dispatch({ type: employeeConstants.GET_ALL_EMPLOYEES_REQUEST });
    try {
      const res = await axios.get(`Employee`);
      if (res.status === 200) {
        dispatch({
          type: employeeConstants.GET_ALL_EMPLOYEES_SUCCESS,
          payload: res.data,
        });
      }
    } catch {
      dispatch({
        type: employeeConstants.GET_ALL_EMPLOYEES_FAILURE,
      });
    }
  };
};

export const editEmployee = (form) => {
  return async (dispatch) => {
    dispatch({ type: employeeConstants.EDIT_EMPLOYEES_REQUEST });
    try {
      const res = await axios.post(`Employee`, form);
      dispatch({
        type: employeeConstants.EDIT_EMPLOYEES_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: employeeConstants.EDIT_EMPLOYEES_FALURE,
      });
    }
  };
};
