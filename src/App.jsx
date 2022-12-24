import './App.css';
import Sidebar from "./sidebar-section";
import ContainerAdmin from "./container-admin";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import authorizationType from "./store/combineRedusers/reducers/type";

function App() {

    const dispatch = useDispatch()

    useEffect(()=>{
        let userToken = localStorage.getItem("login-key")
        if(userToken){
            dispatch({type:authorizationType.CHECK_LOGIN_KEY,payload:userToken})
        }
    },[])
  return (
    <div className="App ">
        <Sidebar/>
        <ContainerAdmin/>
    </div>
  );
}

export default App;
