import React, {useState} from "react";
import "./style.scss"
import "../../../assets/style/icoon/style.css"
import {useDispatch} from "react-redux";
import Modal from "../add-school";
import schoolImg  from  "../../../assets/image/schhol.add.jpg"
import {Link} from "react-router-dom";

const SchoolList = ({item ,index,editSchool }) => {
    const dispatch = useDispatch()
    const [deleteModal , setDeleteModal]= useState(false)


    const deleteSchool = (e) => {
        setDeleteModal(!deleteModal)
        e.stopPropagation()
        e.preventDefault()

    }
    return<>
     <Link to={`/school-details/${index}`} className="school-content">
        <div className="content-tools">
            <span className="icon-pencil2" onClick={editSchool}></span>
            <span onClick={(e)=>deleteSchool(e)}  className="icon-cross"></span>
        </div>
         <h1>School {index +1}</h1>
         <h2>GET INFO</h2>
    </Link>
    {deleteModal?<Modal schoolIndex ={index} deleteModal={deleteSchool}/> :null}
    </>
}
export default SchoolList