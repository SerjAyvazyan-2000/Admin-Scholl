import React from "react";
import "./style.scss"
import {useDispatch, useSelector} from "react-redux";
import authorizationType from "../../../../store/combineRedusers/reducers/type";

const DeleteTeacher = ({openClose}) => {
    const dispatch = useDispatch()
    const teachersList = useSelector(state => state.AddTeacher.teachersList)

    const deleteTeacher = () => {
        teachersList.map((item,index)=>{
            dispatch({type:authorizationType.DELETE_TEACHER_DATA,payload:index})
         openClose()
        })
    }
    return<div className="modal-block">
        <div onClick={openClose}  className="modal-bg"></div>
        <div className="modal-content">
            <div className="delete-modal">
                <h1>Do you want Delete Teacher </h1>
                <span  onClick={deleteTeacher}>Yes</span><span onClick={openClose} >No</span>
            </div>
                    <div className="submit">
                        <button onClick={openClose} >Close</button>
                    </div>
        </div>
    </div>

}
export default DeleteTeacher