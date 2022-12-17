import React, {useEffect} from "react";
import "./style.scss"
import {Route, Routes} from "react-router-dom";
import School from "../pages/school";
import Teachers from "../pages/teachers";
import Children from "../pages/children";
import Header from "./header";
import Login from "../pages/login";
import Register from "../pages/registr";
import {useDispatch, useSelector} from "react-redux";
import "../assets/style/flex.scss"
import authorizationType from "../store/combineRedusers/reducers/type";


const ContainerAdmin = () => {
   const loginKey = useSelector(state => state.Register.loginKey)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch({type:authorizationType.GET_LOGIN_KEY})
    },[])

    return    <div className="container-admin ">
      <Header/>
        <div className="p-content-block ">
            {loginKey?
                <Routes>
                    <Route path={"/School"} element={<School/>}/>
                    <Route path={"/Teachers"} element={<Teachers/>}/>
                    <Route path={"/Children"} element={<Children/>}/>
                </Routes>

                   :
                <Routes>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/register"} element={<Register/>}/>
                </Routes>
            }
        </div>
    </div>

}
export default ContainerAdmin