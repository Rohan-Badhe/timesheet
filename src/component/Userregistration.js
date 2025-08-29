import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useNavigate } from 'react-router-dom';
export default function Userregistration({onBackToLogin}) {
    const navigate = useNavigate();
    return (
        <>
        <div className="container d-flex my-5">
            <form className="mx-auto shadow p-4 rounded bg-light bg-gradient row g-3" style={{ maxWidth: "900px" }}>
                <h1 className="text-center mb-4">Create an Account</h1>
                <div className=" col-md-6">
                    <label htmlFor="Employee_ID" className="form-label">Employee ID</label>
                    <input type="number" className="form-control" id="Employee_ID" placeholder="Enter ID" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Name" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="dob" className="form-label">Date Of Birth</label>
                    <input type="date" className="form-control" id="dob" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select id="gender" className="form-select" required>
                        <option value="">Select Option</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="contact" className="form-label">Contact Info</label>
                    <input type="number" className="form-control" id="contact" placeholder="Enter Contact Info" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">E-mail Address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter E-mail Address" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="permAddress" className="form-label">Permanent Address</label>
                    <input type="text" className="form-control" id="permAddress" placeholder="Enter Permanent Address" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="currAddress" className="form-label">Current Address</label>
                    <input type="text" className="form-control" id="currAddress" placeholder="Enter Current Address" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="department" className="form-label">Department</label>
                    <select id="department" className="form-select" required>
                        <option value="">Select Option</option>
                        <option value="technical">Technical</option>
                        <option value="non-technical">Embedded</option>
                        <option value="hr">HR</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="designation" className="form-label">Designation</label>
                    <input type="text" className="form-control" id="designation" placeholder="Enter Designation" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="pass" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pass" required placeholder=''/>
                    <small className="text-muted">1 Uppercase , one Special charecter and Minimum length 8 .</small>
                </div>
                 <div className="col-md-6">
                    <label htmlFor="pass" className="form-label">Confirm-Password</label>
                    <input type="password" className="form-control" id="pass" required />
                </div>
                
                <div className=" text-align-center">
                    <button className="btn btn-primary" onClick={() => navigate("/")}>Register </button>
                </div>
                <p className='text-center'>
                    Already have an account?
                 <button className="btn btn-primary m-3" onClick={() => navigate("/")}>Go to Login </button>
                </p>
            </form>
        </div>
        </>
    );
}