import React, {useEffect, useState} from "react";
import "./style.scss"
import "../../assets/style/flex.scss"
import "../../assets/style/icoon/style.css"
import {useDispatch, useSelector} from "react-redux";
import authorizationType from "../../store/combineRedusers/reducers/type";


const Header = () => {
const loginKey = useSelector(state => state.Register.loginKey)
    const dispatch = useDispatch()

    const handleClick = () => {
       const loginUser = JSON.parse(localStorage.getItem("login-key"))
       loginUser.forEach((item,i)=>{
            loginUser.splice(i ,1)
       })
        localStorage.setItem("login-key",JSON.stringify(loginUser))
        window.location.reload()

    }


    return<header className="header-block ">
        <div className="main-title ">
            <div className="main-content">
                <div className="menu-burger G-center-flex-direction">
                    <div className="burger"></div>
                    <div className="burger"></div>
                    <div className="burger"></div>
                </div>
                <div className="p-search  G-center-flex-direction">
                    <span className="icon-search"></span>
                </div>
            </div>
            { loginKey ?
                <div onClick={handleClick} className="button">
                    <a href="#">Logout</a>
                </div>:
                 null}


        </div>

        </header>

}
export default Header