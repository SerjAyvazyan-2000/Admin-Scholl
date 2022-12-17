import React, {useState} from "react";
import "./style.scss"
import AddChildren from "./add-schhol";

const Children = () => {
    const [openModal,setOpenModal] = useState(false)

    const handleClick = () => {
         setOpenModal(!openModal)
    }


    return <div className="p-people-block">
          <h1>Schools Children</h1>
        <div className="add-Children-tools">
            <button onClick={handleClick} className="btn-add-Children">
                <span>ADD</span>
                <div className="liquid"></div>
            </button>
        </div>
        {openModal? <AddChildren openClose={handleClick}/> :null}

    </div>
}
export default Children