import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Footer from "./footer";
import User from "../assets/user.jpg";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [udata] = useState(sessionStorage.getItem("user"));

  console.log(udata);
  useEffect(() => {
    console.log("gggg", udata);
    if (udata) {
      try {
        setProfile(JSON.parse(udata));
      } catch (error) {
        console.error("Invalid JSON in sessionStorage:", error);
      }
    }
  }, [udata]);

  return (
    <>
      <div className="dashboard-container d-flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Sidebar end here */}
        {/* Main Content */}
        <div className="main-content flex-grow-1">
          {/* Header */}
          <Navbar />
          {/* Header end  here */}
          {/* Content */}
          <div className="content p-4">
            <div
              className="modal fade"
              id="profileModal"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Profile</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <form
                    className="mx-auto shadow p-4 rounded bg-light bg-gradient row g-3"
                    style={{ maxWidth: "900px" }}
                  >
                    <div className="container text-center mb-3">
                      <img
                        src={profile.profilePic}
                        alt="user"
                        className="rounded-circle img-thumbnail"
                        style={{ height: "150px", width: "150px" }}
                      />
                      <center>
                        <strong>{profile.fullName}</strong>
                      </center>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Emp Id</label>
                      <input
                        type="text"
                        className="form-control"
                        value={profile.empId || ""}
                        readOnly
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={profile.fullName || ""}
                        readOnly
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Designation</label>
                      <input
                        type="text"
                        className="form-control"
                        value={profile.designation || ""}
                        readOnly
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Date Of Birth</label>
                      <input
                        type="text"
                        className="form-control"
                        value={profile.dob || ""}
                        readOnly
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Gender</label>
                      <select className="form-control">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        value={profile.address || ""}
                        readOnly
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Contact No</label>
                      <input
                        type="text"
                        className="form-control"
                        value={profile.contactNo || ""}
                        readOnly
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Date of Joining </label>
                      <input
                        type="text"
                        className="form-control"
                        value={profile.dateOfJoining || ""}
                        readOnly
                      />
                    </div>
                  </form>

                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Profile;
