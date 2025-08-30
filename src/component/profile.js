import React from "react";
import User from "../assets/user.jpg";

const Profile = () => {
  return (
    <>
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
            <div></div>
            <div className="modal-header"></div>

            <form
              className="mx-auto shadow p-4 rounded bg-light bg-gradient row g-3"
              style={{ maxWidth: "900px" }}
            >
              <h1 className="text-center mb-4">Profile</h1>
              <div className="container text-center">
                <img
                  src={User}
                  alt="user"
                  className="rounded-circle img-thumbnail"
                  style={{ height: "150px", width: "150px" }}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="Employee_name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Employee_name"
                  value="Rohan Suresh Badhe"
                  readOnly
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="designation" className="form-label">
                  Designation
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="designation"
                  value="Graduate Trainee"
                  readOnly
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="dob" className="form-label">
                  Date Of Birth
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="dob"
                  value="18/06/2004"
                  readOnly
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select
                  className="form-control"
                  id="gender"
                  value="male"
                  disabled
                >
                  <option value="male">Male</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="Employee_name" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Employee_address"
                  value="Junnar , Pune Maharashtra "
                  readOnly
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="designation" className="form-label">
                  Contact No
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="Contact-info"
                  value="7057338057"
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
    </>
  );
};

export default Profile;
