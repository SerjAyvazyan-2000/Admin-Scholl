import React, {useState} from "react";
import "./style.scss"
import "../../../assets/style/icoon/style.css"
import {useDispatch} from "react-redux";
import authorizationType from "../../../store/combineRedusers/reducers/type";
import Modal from "../add-school";

const SchoolList = ({item ,index,editSchool }) => {
    const dispatch = useDispatch()
    const [deleteModal , setDeleteModal]= useState(false)


    const deleteSchool = () => {
        setDeleteModal(!deleteModal)
    }

    return <div className="school-content">
        <div className="content-tools">
            <span className="icon-pencil2" onClick={editSchool}></span>
            <span onClick={deleteSchool}  className="icon-cross"></span>
        </div>
        <h1>School  {index +1}</h1>
         <h2>School Name<span> ____{item.schoolName}</span></h2>
        <h2>School directorName<span> ____{item.directorName}</span></h2>
        <h2>School Name<span> ____{item.directorEmailAddress}</span></h2>
        <h2>School Name<span> ____{item.directorPhoneNumber}</span></h2>
        <h2>School Name<span> ____{item.address}</span></h2>
        <h2>School teachersMaxCount<span> ____{item.teachersMaxCount}</span></h2>
        <h2>School childrenMaxCount<span> ____{item.childrenMaxCount}</span></h2>
        <h2>School fond<span> ____{item.fond}</span></h2>
        {deleteModal?<Modal schoolIndex ={index} deleteModal={deleteSchool}/> :null}
    </div>
}
export default SchoolList