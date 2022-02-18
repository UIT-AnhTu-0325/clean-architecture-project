import { edit, getAll } from "../api/employee.api";
import { employeeConstants } from "./constants";

export const getAllEmployees = () => {
  return async (dispatch) => {
    dispatch({ type: employeeConstants.GET_ALL_EMPLOYEES_REQUEST });
    try {
      const res = await getAll();
      if (res.status === 200) {
        dispatch({
          type: employeeConstants.GET_ALL_EMPLOYEES_SUCCESS,
          payload: res.data,
        });
      }
    } catch (e) {
      dispatch({
        type: employeeConstants.GET_ALL_EMPLOYEES_FAILURE,
        payload: e,
      });
    }
  };
};

export const editEmployee = (employee) => {
  return async (dispatch) => {
    dispatch({ type: employeeConstants.EDIT_EMPLOYEE_REQUEST });
    try {
      //console.log(employee);
      const res = await edit(employee.id, employee);
      if (res.status === 200) {
        dispatch({
          type: employeeConstants.EDIT_EMPLOYEE_SUCCESS,
          payload: res.data,
        });
      }
    } catch (e) {
      dispatch({
        type: employeeConstants.EDIT_EMPLOYEE_FALURE,
        payload: e,
      });
    }
  };
};
