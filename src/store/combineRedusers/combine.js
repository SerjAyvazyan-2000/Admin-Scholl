import {combineReducers} from "redux"
import AddSchool from  "./reducers/school"
import Register from "./reducers/registr";
import AddTeacher from "./reducers/teachers";
 const rootReducer = (combineReducers({
    AddSchool,
     Register,
     AddTeacher
}))

export default rootReducer