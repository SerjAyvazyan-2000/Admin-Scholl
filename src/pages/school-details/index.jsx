import React, {useEffect, useState} from "react";
import "./style.scss"
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import schoolImg  from  "../../assets/image/school.jpeg"
import Classes from "./classes";
import authorizationType from "../../store/combineRedusers/reducers/type";


const SchoolDetails = () => {
    const schoolList = useSelector(state => state.AddSchool.schoolList)
    const teacherList = useSelector(state => state.AddTeacher.teachersList)
    const childrenList = useSelector(state => state.AddChildren.childrenList)
    const dispatch = useDispatch()



    const [openModal,setOpenModal] = useState(false)
    const {id} = useParams()
    const [schoolDetails , setSchoolDetails] = useState({
        schoolName: '',
        address: '',
        directorName: '',
        directorPhoneNumber: '',
        directorEmailAddress: '',
        teachersMaxCount:0,
        childrenMaxCount:0,
        teachersList: [],
        peopleList: [],
        classList: [],
        fund: 0
    })

    useEffect(()=> {
            schoolList.forEach((element , index)=>{
                if(index === +id){
                    setSchoolDetails(element)
                }
            })
    },[])


    const handleClick = () => {
          setOpenModal(!openModal)

    }



    return<>
     <div className="table-school ">
         <h1>SCHOOL INFORMATION</h1>
            <table className="table-block">
                 <thead>
                    <th>schoolName</th>
                    <th>address</th>
                    <th>directorName</th>
                    <th>directorPhoneNumber</th>
                    <th>directorEmailAddress</th>
                    <th>teachersMaxCount</th>
                    <th>childrenMaxCount</th>
                    <th>fond</th>

                 </thead>
                <tbody >
                     <tr>
                          <td>{schoolDetails.schoolName}</td>
                          <td>{schoolDetails.address}</td>
                         <td>{schoolDetails.directorName}</td>
                         <td>{schoolDetails.directorPhoneNumber}</td>
                         <td>{schoolDetails.directorEmailAddress}</td>
                         <td>{teacherList.length}</td>
                         <td>{childrenList.length}</td>
                         <td>{schoolDetails.fund}</td>
                     </tr>

                </tbody>
            </table>
     </div>
        <div className="cass-add-tools">
              <button className="glow-on-hover" onClick={handleClick}>ADD CLASS</button>
        </div>

        <div className="school-classes">
            {schoolDetails.classList?schoolDetails.classList.map((item,index)=>{
                 return <div className="class-box" key={index}>
                     <div className="class-people">
                         <h1>SCHOOL CLASS N{index+1}</h1>
                         <h2>CLASSNAME : <span>{item.className}</span></h2>
                         <h2>{item.teacher ? <span>CLASS TEACHER: {item.teacher.firstName}</span>:<span>EMPRTI TEACHER</span>}</h2>
                     </div>
                          <div className="children-box">

                              {item.classChildren.length ?item.classChildren.map((item,index)=>{
                                     return <ul key={index}>
                                         <h1>CLASS CHILDREN</h1>
                                             <li>FirstName: {item.firstName}</li>
                                         <li>LastName: {item.lastName}</li>
                                         <li>Address: {item.address}</li>
                                         <li>PhoneNumber: {item.phoneNumber}</li>

                                     </ul>
                              }):null}

                          </div>
                 </div>
            }):null}
        </div>

        {openModal?<Classes linkIndex ={id} openModal={handleClick}/> :null}
    </>

}
export default SchoolDetails


