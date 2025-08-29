import React from "react";
import reactDOM from "react-dom/client";
import Timesheet from "../assets/ts.png";
import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Login({ onLogin, onRegister }) {
    const navigate = useNavigate();
return(
   
    <>
    <div className="Container-fluid d-flex flex-wrap justify-content-center">
    
        <div className="col-md-3 d-flex m-5 ">
            <form className="mx-auto shadow p-4 rounded" >
                <h1 className="text-center mb-4">User Login</h1>
                <div className="mb-3">
                    <label htmlFor="Employee_ID" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="Enployee-Mail" placeholder="Enter E-Mail" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="pass" className="form-label">Enter Your Password</label>
                    <input type="password" className="form-control" id="pass" required />
                </div>
                 <div className="">
                    <button className="btn btn-primary" onClick={() => navigate("/dashboard")}>Login</button>
                </div>
                <p>
                    Don't have an account?
                <button className="btn btn-primary m-2" onClick={() => navigate("/register")}>Register</button>
                </p>
                
      
                </form>
                </div>
                </div>
                </>
);
}
