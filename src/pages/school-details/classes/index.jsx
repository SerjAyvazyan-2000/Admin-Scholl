import React, {useEffect, useState} from "react";
import "./style.scss"
import {useDispatch, useSelector} from "react-redux";
import Login from "../../login";
import authorizationType from "../../../store/combineRedusers/reducers/type";

const Classes = ({openModal}) => {
    const childrenList = useSelector(state => state.AddChildren.childrenList)
    const teacherList = useSelector(state => state.AddTeacher.teachersList)
    const dispatch = useDispatch()

    const [classChildren,setClassChildren] = useState([])
    const [classTeacher,setClassTeacher] = useState([])


    const [className , setClassName] = useState({
          name:''
    })
    const [errorText , setErrorText] = useState({
        name:''
    })

    const handleChangeInput = (e) => {
        setClassName({...className,[e.target.name]:e.target.value})
        setErrorText({...errorText,[e.target.name]:''})

    }
    const handleChangeCheckbox = (checkIndex,e) => {
        let isChecked  = e.target.checked
            childrenList.forEach((item,index)=>{
                if(isChecked && index === checkIndex ){
                    classChildren.push(item)
                    setClassChildren(classChildren)
                }
                if(!isChecked){
                    classChildren.splice(index,1)
                    setClassChildren(classChildren)
                }
            })

        console.log(classChildren,"ashakertner")

    }
    const handleChangeSelect = (e) => {

        teacherList.forEach((item,index)=>{
             if(index === +e.target.value){
                 classTeacher.push(item)
                 setClassTeacher(classTeacher)

             }

        })

        console.log(classTeacher,"usuchick")
    }

    const handleClick = () => {
         if(validation()){
             dispatch({type:authorizationType.GET_CLASS_CHILDREN,payload:classChildren})
             dispatch({type:authorizationType.GET_CLASS_TEACHER,payload:classTeacher})

         }
    }


    const validation = () => {
          let validate = true
        let errorString = {
            name:''
        }
        if(!className.name.trim().length){
              errorString.name = "Fill in The Required SchoolName"
            validate = false
        }

        setErrorText(errorString)
        return validate
    }

    return <div className="modal-school-classes">
        <div onClick={openModal} className="modal-classes-bg "></div>

        <div className="classes-container">

     <div className="classes-information">
         <div className="class-name-tools">
             <label >
                 <span>Class Name</span>
                 <input value={className.name} name="name"  onChange={handleChangeInput} type="text" placeholder="Class Name.."/>
                 <p>{errorText.name}</p>
             </label>
         </div>

         <div className="teachers-container">
             <span>Select Teacher</span>

             <select onChange={handleChangeSelect}  name="" id="">
                 {teacherList.map((item,index)=>{
                     return <option    value={index} key={index}>
                         {item.firstName}
                     </option>
                 })}

             </select>
         </div>
     </div>

            <div className="children-container">
                  <h1>Select Children</h1>
                {childrenList.length?childrenList.map((item,index)=>{
                       return <>
                           <input onChange={(e)=>handleChangeCheckbox(index,e)} type="checkbox"/>
                            <p>Name:{item.firstName}  {index +1}</p>
                       </>
                }) :null}


            </div>
             <div className="button-save-cancel">
                <button onClick={handleClick}>Save</button>
                 <button>Cancel</button>
             </div>
        </div>
       </div>
}
export default Classes