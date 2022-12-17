import React from "react";
import "./style.scss"
import "../../assets/style/flex.scss"
import "../../assets/style/icoon/style.css"


const Header = () => {

    return<header className="header-block G-container">
            <div className="menu-burger G-center-flex-direction">
                <div className="burger"></div>
                <div className="burger"></div>
                <div className="burger"></div>
            </div>
            <div className="p-search  G-center-flex-direction">
                <span className="icon-search"></span>
            </div>


        </header>

}
export default Header