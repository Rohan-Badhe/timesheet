import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
export default function Userregistration({ onBackToLogin }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0]);
  };


  // const register = {
  //   fullName,
  //   emailId,
  //   contactNo,
  //   address,
  //   designation,
  //   dateOfBirth,
  //   profilePic,
  //   password,
  //   confirmPassword,
  //   gender,
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.", {
        position: "top-center",
        autoClose: 3000,
      });
      return false;
    }
    // console.log(register);
    const token = sessionStorage.getItem("user");
    const formData = new FormData();
    formData.append("profilePic", profilePic);
    formData.append("FullName", fullName);
    formData.append("email", emailId);
    formData.append("Gender", gender);
    formData.append("address", address);
    formData.append("contactNo", contactNo);
    formData.append("DateOfBirth", dateOfBirth);
    formData.append("Designation", designation);
    formData.append("Password" ,password);

    for (let [key, value] of formData.entries()) {
      console.log(`${key} :${value}`);
    }
    try {
      const response = await axios.post(
        "http://192.168.0.118:8082/api/employees/createemployees",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  return (
    <>
      <div className="container d-flex my-5">
        <form
          className="mx-auto shadow p-4 rounded bg-light bg-gradient row g-3"
          style={{ maxWidth: "900px" }}
          onSubmit={handleSubmit} encType="multipart/form-data"
        >
          <h1 className="text-center mb-4">Create an Account</h1>

          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="dob" className="form-label">
              Date Of Birth
            </label>
            <input
              type="date"
              className="form-control"
              id="dob"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select id="gender" value={gender} onChange={(e)=>setGender(e.target.value)}  className="form-select" required>
              <option value="">Select Option</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="contact" className="form-label">
              Contact Info
            </label>
            <input
              type="number"
              className="form-control"
              id="contact"
              placeholder="Enter Contact Info"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              E-mail Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter E-mail Address"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="permAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="permAddress"
              placeholder="Enter Permanent Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
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
              placeholder="Enter Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="pass" className="form-label">
              Password
            </label>
            <input
              type= {showConfirmPassword ?  "text" :"password" }
              className="form-control"
              id="pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter Password"
            />
          <label htmlFor="check1">Show Password</label>
                <input
                    className="m-2"
                    id="check1"
                    type="checkbox"
                    value={showPassword}
                    onChange={() =>
                        setShowPassword((prev) => !prev)
                    }
                />
          </div>
          <div className="col-md-6">
            <label className="form-label">Confirm Password</label>
            <input
              type= {showPassword ?  "text" :"password" }
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter Password"
              required
            />
            <label htmlFor="check">Show Password</label>
                <input
                    className="m-2"
                    id="check"
                    type="checkbox"
                    value={showPassword}
                    onChange={() =>
                        setShowPassword((prev) => !prev)
                    }
                />
          </div>
          <div className="col-md-12">
            <label className="form-label">Profile Picture</label>
            <input
              type="file"
              className="form-control"
              onChange={handleFileChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register{" "}
          </button>

          <p className="text-center">
            Already have an account?
            <button
              className="btn btn-primary m-3"
              onClick={() => navigate("/login")}
            >
              Go to Login{" "}
            </button>
          </p>
        </form>
        {message && <p>{message}</p>}
      </div>
    </>
  );
}
