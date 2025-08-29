import React from 'react'
import User from "../assets/user.jpg";
import {Image } from 'react-bootstrap';


const profile = () => {
  return (
    <>
    <div class="modal fade" id="profileModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
           <div class="modal-header"></div>
         

            <form className="mx-auto shadow p-4 rounded bg-light bg-gradient row g-3" style={{ maxWidth: "900px" }}>
                <h1 className="text-center mb-4">Profile</h1>
                <div className=" col-md-6">
                    <label htmlFor="Employee_ID" className="form-label" >Name</label>
                    <input type="text" className="form-control" id="Employee_name" value="Rohan Suresh Badhe " />
                </div>
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Designation </label>
                    <input type="text" className="form-control" id="designation" value="Graduate Trainee "/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="dob" className="form-label">Date Of Birth</label>
                    <input type="text" className="form-control" id="dob" value="18/06/2004"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <option value="male">Male</option>
                     </div>
                   </form>
                 <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>

      </div>
                </div>
                </div>
              
            
              
           
               
        </div>
    </>
  )
}
export default profile
