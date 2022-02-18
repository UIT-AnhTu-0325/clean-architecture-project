import { employeeConstants } from "../actions/constants";

/* eslint-disable import/no-anonymous-default-export */
const initState = {
  employees: [],
  loading: false,
  error: null,
};

const employeesAfterUpdate = (employees, updateEmployee) => {
  var newEmployees = [];
  console.log(updateEmployee);
  for (const emp of employees) {
    newEmployees.push(emp.id === updateEmployee.id ? updateEmployee : emp);
  }
  return newEmployees;
};

export default (state = initState, action) => {
  switch (action.type) {
    case employeeConstants.GET_ALL_EMPLOYEES_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case employeeConstants.GET_ALL_EMPLOYEES_SUCCESS:
      state = {
        ...state,
        employees: action.payload,
        loading: false,
      };
      break;

    case employeeConstants.GET_ALL_EMPLOYEES_FAILURE:
      state = {
        ...state,
        error: action.payload,
        loading: false,
      };
      break;

    case employeeConstants.EDIT_EMPLOYEE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case employeeConstants.EDIT_EMPLOYEE_SUCCESS:
      state = {
        ...state,
        employees: employeesAfterUpdate(
          state.employees,
          action.payload.employee
        ),
        loading: false,
      };
      break;

    case employeeConstants.EDIT_EMPLOYEE_FALURE:
      state = {
        ...state,
        loading: false,
        error: action.payload,
      };
      break;
    default:
      break;
  }
  return state;
};
