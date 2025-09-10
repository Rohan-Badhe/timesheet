import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Time from "../assets/t2.png";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  

  const handleLogin = (event) => {
    event.preventDefault();

    const loginData = { email, password };

    axios
      .post("http://192.168.0.118:8082/api/auth/login", loginData)
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          sessionStorage.setItem(
            "user",
            JSON.stringify(response.data.employee)
          );
          sessionStorage.setItem("islogin", 1);
          setMessage("Login Successful");
          alert("Login Successful");
          onLogin();
          navigate("/dashboard");
        } else {
          sessionStorage.setItem("islogin", 0);
          setMessage("Invalid credentials");
        }
      })
      .catch((error) => {
        if (error.response) {
          setMessage(error.response.data.message || "Invalid credentials");
        } else {
          setMessage("Server not reachable");
        }
      });
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${Time})`, // full bg
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxWidth: "100%",
        height: "auto",
        position: "relative",
      }}
    >
      {/* dark overlay for better readability
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      ></div> */}

      {/* Login Card */}
      <div className="col-md-4 position-relative justify-content-center me-5">
        <div className="card bg-transparent rounded-3 p-4 bg-white bg-opacity-75 shadow-lg">
          <h2 className="text-center mb-4 text-dark fw-bold">User Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3 ">
              <label htmlFor="email" className="form-label  fw-semibold ">
                Email Address
              </label>
              <input
                type="email"
                className="form-control form-control-lg  border-0 border-bottom border-secondary bg-transparent mb-3"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control form-control-lg border-0 border-bottom border-secondary bg-transparent mb-3"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <div className="form-check mt-2">
                <input
                  className="me-2 bg-transparent border-1 border-dark"
                  type="checkbox"
                  id="check"
                  checked={showPassword}
                  onChange={() => setShowPassword((prev) => !prev)}
                />
                <label className="form-check-label" htmlFor="check">
                  Show Password
                </label>
              </div>
            </div>

            <div className="d-grid mb-3">
              <button className="btn btn-primary btn-lg">Login</button>
            </div>

            <p className="text-center">
              Don’t have an account?{" "}
              <button
                type="button"
                className="btn btn-secondary text-white btn-outline-secondary btn-sm ms-2"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </p>

            {message && (
              <p className="text-center text-danger fw-semibold">{message}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
