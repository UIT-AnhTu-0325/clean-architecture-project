import { employeeConstants } from "../actions/constants";

/* eslint-disable import/no-anonymous-default-export */
const initState = {
  employees: [],
  loading: false,
  error: null,
};
export default (state = initState, action) => {
  switch (action.type) {
    case employeeConstants.GET_ALL_EMPLOYEES_SUCCESS:
      state = {
        ...state,
        employees: action.payload,
      };
      break;
    default:
  }
  return state;
};
