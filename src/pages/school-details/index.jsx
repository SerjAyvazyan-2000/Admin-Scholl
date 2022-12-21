import React, {useEffect, useState} from "react";
import "./style.scss"
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import schoolImg  from  "../../assets/image/school.jpeg"
import Classes from "./classes";


const SchoolDetails = () => {
    const schoolList = useSelector(state => state.AddSchool.schoolList)
    const teacherList = useSelector(state => state.AddTeacher.teachersList)
    const childrenList = useSelector(state => state.AddChildren.childrenList)

    const classChildren = useSelector(state => state.SchoolClasses.classChildren)
    const classTeacher = useSelector(state => state.SchoolClasses.classTeacher)


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
        fond: 0,
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
                         <td>{teacherList.length}
                             <select >
                                 {teacherList.length?teacherList.map((item,index)=>{
                                 return <option value={index}>
                                     {item.firstName}
                                        </option>
                                 }) :null}
                             </select>
                         </td>
                         <td>{childrenList.length}

                             <select >
                                 {childrenList.length?teacherList.map((item,index)=>{
                                     return <option value={index}>
                                         {item.firstName}
                                     </option>
                                 }) :null}
                             </select>
                         </td>
                         <td>{schoolDetails.fond}</td>
                     </tr>

                </tbody>
            </table>
     </div>
        <div className="cass-add-tools">
              <button onClick={handleClick}>ADD CLASS</button>
        </div>

    {/*<div className="school-information">*/}
    {/*     <div className="school-class-children">*/}
    {/*         {classChildren.length ?classChildren.map((item,index)=>{*/}
    {/*             return  item.map((el , i )=>{*/}
    {/*                 return <h1>CHILDREN:{el.firstName} {+1}</h1>*/}
    {/*             })*/}
    {/*         }) :null}*/}
    {/*     </div>*/}
    {/*    <div className="school-class-teacher">*/}
    {/*        {teacherList.length ?teacherList.map((item,index)=>{*/}
    {/*            return  item.map((el , i )=>{*/}
    {/*                return <h1>TEACHER:{el.firstName} {i +1}</h1>*/}
    {/*            })*/}
    {/*        }) :null}*/}
    {/*    </div>*/}

    {/*</div>*/}

        {openModal?<Classes openModal={handleClick}/> :null}
    </>

}
export default SchoolDetails


