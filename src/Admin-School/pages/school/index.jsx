import React, {useEffect, useState} from "react";
import "./style.scss"
import {useDispatch, useSelector} from "react-redux";
import Modal from "./add-school";
import SchoolList from "./school-list";
import authorizationType from "../../../store/combineRedusers/reducers/type";

const School = () => {
    const [modal , setModal] = useState(false)
    const schoolList = useSelector(state => state.AddSchool.schoolList)
    const dispatch = useDispatch()


  const handleClick = () => {
      setModal(!modal)
  }
  useEffect(()=>{
    dispatch({type:authorizationType.CHECK_SCHOOL_DATA})
  },[])

    return <div className="p-school-block G-container">
        <h1>Schools</h1>
         <div className="school-tools">
          <button onClick={handleClick} className="btn-add-school">
              <span>ADD </span>
              <div className="liquid"></div>
          </button>

             {modal ? <Modal closeOpen = {handleClick}/> : null}
         </div>
        <div className="schools-block">
            {schoolList.length?schoolList.map((item,index)=>{
                return <SchoolList index={index} item={item} key ={index}/>
            }) :null}
        </div>
    </div>
}
export default School