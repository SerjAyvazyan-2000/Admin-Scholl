import authorizationType from "./type";


const defaultState = {
      classTeacher:[],
    classChildren:[]

}

const SchoolClasses = (state = defaultState ,action) => {
    switch (action.type) {
        case authorizationType.GET_CLASS_TEACHER :
             return {...state,classTeacher: [...state.classTeacher,action.payload]}

        case  authorizationType.GET_CLASS_CHILDREN :
             return  {...state,classChildren:[...state.classChildren,action.payload]}


        default :
             return  {...state}
    }
}


export default SchoolClasses