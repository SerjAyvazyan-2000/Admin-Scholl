import React, {useState} from "react";
import "./style.scss"
import "../../../../assets/style/icoon/style.css"
import {useDispatch} from "react-redux";
import authorizationType from "../../../../store/combineRedusers/reducers/type";
import Modal from "../add-school";

const SchoolList = ({item ,index }) => {
    const dispatch = useDispatch()

    const [deleteModal , setDeleteModal]= useState(false)
    // const [editList , setEditList] = useState({
    //     schoolName:item.schoolName,
    //     directorName:item.directorName,
    //     directorEmailAddress:item.directorEmailAddress,
    //     directorPhoneNumber:item.directorPhoneNumber,
    //     address:item.address,
    // })

    const deleteSchool = () => {
        setDeleteModal(!deleteModal)
    }
    // const editSchool = () => {
    //     if(index || index === 0){
    //         dispatch({type:authorizationType.EDIT_SCHOOL_DATA , payload:{edit:editList,index:index}})
    //         setEditList({
    //             schoolName: '',
    //             address: '',
    //             directorName: '',
    //             directorPhoneNumber: '',
    //             directorEmailAddress: '',
    //         })
    //     }
    // }

    return <div className="school-content">
        <div className="content-tools">
            <span className="icon-pencil2"></span>
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