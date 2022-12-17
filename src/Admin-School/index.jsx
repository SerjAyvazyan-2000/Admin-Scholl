import React from "react";
import "./style.scss"
import Sidebar from "./sidebar-section";
import ContainerAdmin from "./container-admin";

const AdminPage  = () =>{

    return <section className="admin-page ">
             <Sidebar/>
             <ContainerAdmin/>

    </section>
}
export default AdminPage