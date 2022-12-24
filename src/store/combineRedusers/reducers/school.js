import authorizationType from "./type";
import Login from "../../../pages/login";
const defaultState = {
    schoolList:[]

}

const AddSchool = (state = defaultState , action) =>{
     switch (action.type) {
         case authorizationType.SET_SCHOOL_DATA:{
              return {...state,schoolList:[...state.schoolList,action.payload]}
         }
         case authorizationType.EDIT_SCHOOL_DATA:{
             const newUpdatedUsers = state.schoolList.map((item, i) => {
                 if(i === action.payload.editIndex){
                    item =  action.payload.editSchool
                 }
                 return item
             })
             return {...state,schoolList: newUpdatedUsers}

         }

         case authorizationType.CHECK_SCHOOL_DATA:{
           const newSchoolList = JSON.parse(localStorage.getItem("school-List"))
             if(newSchoolList){
                  return {...state,schoolList:newSchoolList}
             }else {
                 return {...state,schoolList: []}
             }
         }

         case  authorizationType.DELETE_SCHOOL_DATA: {
             let localArray = JSON.parse(localStorage.getItem("school-List"))
              const index = localArray.indexOf(action.payload)
              if(index === -1){
                   localArray.splice(index,1)
              }
              localStorage.setItem("school-List",JSON.stringify(localArray))
             return {...state,schoolList: localArray}
         }

         case  authorizationType.GET_SCHOOL_CLASS :
                  const newSchoolList =  state.schoolList.map((item,index)=>{
                      if(action.payload.linkIndex === index){
                          item.classList.push(action.payload.class)
                      }
                      return item
                   })

                  return {...state,schoolList:newSchoolList}


         // case authorizationType.CHECK_SCHOOL_CLASS :
         //   const newSchoolClass = JSON.parse(localStorage.getItem("school-class"))
         //     if(newSchoolClass){
         //          return  {...state,schoolList:newSchoolClass}
         //     }else {
         //          return {...state,schoolList: []}
         //     }






         default : {
             return {...state}
         }
     }

}

export default AddSchool