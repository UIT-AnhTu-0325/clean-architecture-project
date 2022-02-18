import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import employeeReducer from "./employee.reducer";
const rootReducer = combineReducers({
  employee: employeeReducer,
  Auth: authReducer,
});
export default rootReducer;
