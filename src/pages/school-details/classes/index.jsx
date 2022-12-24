import React, {useEffect, useState} from "react";
import "./style.scss"
import {useDispatch, useSelector} from "react-redux";
import authorizationType from "../../../store/combineRedusers/reducers/type";

const Classes = ({openModal,linkIndex}) => {
    const childrenList = useSelector(state => state.AddChildren.childrenList)
    const teacherList = useSelector(state => state.AddTeacher.teachersList)
    const dispatch = useDispatch()

    const [classInfo,setClassInfo] = useState({
          className:'',
           teacher:null,
           classChildren:[],
           // classChildrenIndex:[]
    })


    const [errorText , setErrorText] = useState({
        name:''
    })

    const handleChangeCheckbox = (checkIndex,e) => {

        let isChecked  = e.target.checked
            childrenList.forEach((item,index)=>{
                if(isChecked && index === checkIndex ){
                   classInfo.classChildren.push(item)
                }
                if(!isChecked){
                   classInfo.classChildren.splice(index,1)

                }
            })


    }
    const handleChangeTeacher = (e) => {
        if(e.target.value || e.target.value === 0 ){
            teacherList.forEach((item,index)=>{
                if(index === +e.target.value){
                    setClassInfo({...classInfo,teacher: item})
                }
            })
        }else {
             setClassInfo({...classInfo,teacher: null})
        }


       }


    const validation = () => {
          let validate = true
        let errorString = {
            name:''
        }
        if(!classInfo.className.trim().length){
              errorString.name = "Fill in The Required SchoolName"
            validate = false
        }

        setErrorText(errorString)
        return validate
    }

    const handleClick = () => {
        if(validation()){
            dispatch({type:authorizationType.GET_SCHOOL_CLASS,payload:{class:classInfo,linkIndex:+linkIndex}})
            openModal()
            console.log(classInfo)
            console.log(linkIndex)

            //  console.log(classInfo.className,"dasaranit anuna")
            // console.log(classInfo.classChildren,"ashakertnert unes")
            // console.log(classInfo.teacher,"dasatuine unes")
        }
    }



    return <div className="modal-school-classes">
        <div onClick={openModal} className="modal-classes-bg "></div>

        <div className="classes-container">

     <div className="classes-information">
         <div className="class-name-tools ">
             <label >
                 <input  onChange={event => {setClassInfo({...classInfo,className: event.target.value})}} type="text" placeholder="Class Name.."/>
                 <p>{errorText.name}</p>
             </label>
         </div>

         <div className="teachers-container">

             <select onChange={handleChangeTeacher}  name="" id="">
                 <option value="">Select Teacher</option>
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
                            <span>Name:{item.firstName}  {index +1}</span>
                       </>
                }) :null}


            </div>
             <div className="button-save-cancel">
                <button onClick={handleClick}>Save</button>
                 <button onClick={openModal}>Cancel</button>
             </div>
        </div>
       </div>
}
export default Classes