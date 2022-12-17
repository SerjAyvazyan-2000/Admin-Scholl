import React from "react";
import "./style.scss"

const AddChildren = ({openClose}) => {

    return <div className="children-modal-block">
          <div onClick={openClose} className="children-modal-bg"></div>
          <div className="children-modal-content">
              <div className="children-information">
                  <h2>ADD CHILDREN</h2>

                  <div className="children-add-tools">
                      <div className="tools-name">
                             <span>FirstName</span>
                      </div>
                         <div className="tools-add">
                             <label>
                                 <input type="text" name="firstName" placeholder="Search firstName... "/>
                             </label>
                         </div>
                  </div>

                  <div className="children-add-tools">
                      <div className="tools-name">
                          <span>LastName</span>
                      </div>
                      <div className="tools-add">
                          <label>
                              <input type="text" name="lastName" placeholder="Search lastName... "/>
                          </label>
                      </div>
                  </div>

                  <div className="children-add-tools">
                      <div className="tools-name">
                          <span>Address</span>
                      </div>
                      <div className="tools-add">
                          <label>
                              <input type="text" name="address" placeholder="Search address... "/>
                          </label>
                      </div>
                  </div>

                  <div className="children-add-tools">
                      <div className="tools-name">
                          <span>PhoneNumber</span>
                      </div>
                      <div className="tools-add">
                          <label>
                              <input type="text" name="phoneNumber" placeholder="Search phoneNumber... "/>
                          </label>
                      </div>
                  </div>


              </div>

              <div className="submit">
                  <button  >Submit</button>
                  <button onClick={openClose} >Close</button>
              </div>
          </div>
    </div>
}

export default AddChildren