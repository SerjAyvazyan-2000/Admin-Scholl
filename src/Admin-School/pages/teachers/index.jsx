import React, {useEffect, useState} from "react";
import "./style.scss"
import "../../../assets/style/icoon/style.css"
import {useDispatch, useSelector} from "react-redux";
import AddTeachers from "./add-teachers";
import authorizationType from "../../../store/combineRedusers/reducers/type";
import DeleteTeacher from "./delete-modal";

const Teachers = () => {
    const dispatch = useDispatch()
    const [openModal,setOpenModal] = useState(false)
    const [openDeleteModal,setOpenDeleteModal] = useState(false)
    const teacherList = useSelector(state => state.AddTeacher.teachersList)


    useEffect(()=>{
         dispatch({type:authorizationType.CHECK_TEACHER_DATA})
    },[])

    const handleClick  = () =>{
        setOpenModal(!openModal)

    }
    const editTeachers = (item,index) =>{
      // jampa chunem reduxic ekat infon uxarkem  input dashterin
    }
    const deleteTeachers = () =>{
        setOpenDeleteModal(!openDeleteModal)

    }

    return <div className="p-teachers-block ">
            <h1>Schools Teachers</h1>
            <div className="teachers-tools">
                <button onClick={handleClick} className="btn-add-teachers">
                    <span>ADD</span>
                    <div className="liquid"></div>
                </button>
           </div>
        {openModal?<AddTeachers  openClose={handleClick}/> :null}
        {openDeleteModal?<DeleteTeacher openClose={deleteTeachers}/>:null}
        <div className="teachers-information G-container">
        {teacherList.length?teacherList.map((item,index)=>{
            return <div key={index} className="teachers-content">
                <div className="content-tools">
                    <span onClick={()=>editTeachers(item,index)} className="icon-pencil2"></span>
                    <span onClick={deleteTeachers}  className="icon-cross"></span>
                </div>
                <h1>Teachers  {index +1}</h1>
                <h2>School Name<span> ____{item.firstName}</span></h2>
                <h2>School directorName<span> ____{item.lastName}</span></h2>
                <h2>School Name<span> ____{item.profession}</span></h2>
                <h2>School Name<span> ____{item.phoneNumber}</span></h2>
                <h2>School Name<span> ____{item.salary}</span></h2>
                <h2>School Name<span> ____{item.experience}</span></h2>
            </div>
        }) :null}
        </div>
    </div>

}
export default Teachers