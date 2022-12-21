import {combineReducers} from "redux"
import AddSchool from  "./reducers/school"
import Register from "./reducers/registr";
import AddTeacher from "./reducers/teachers";
import AddChildren from "./reducers/children";
import SchoolClasses from "./reducers/class";
 const rootReducer = (combineReducers({
    AddSchool,
     Register,
     AddTeacher,
     AddChildren,
     SchoolClasses
}))

export default rootReducer