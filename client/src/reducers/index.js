import { combineReducers } from "redux";
import employeeReducer from "./employee.reducer";
const rootReducer = combineReducers({
  employee: employeeReducer,
});
export default rootReducer;
