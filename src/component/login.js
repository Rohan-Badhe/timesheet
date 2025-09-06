import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userdata, setUserdata] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

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
          setMessage(" Login Successful");
          alert("Login Succesfull");
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
    <div className="Container-fluid d-flex flex-wrap justify-content-center">
      <div className="col-md-3 d-flex m-5 ">
        <form className="mx-auto shadow p-4 rounded" onSubmit={handleLogin}>
          <h1 className="text-center mb-4">User Login</h1>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Enter Your Password
            </label>
            <input
              type= {showPassword ?  "text" :"password" }
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
            <label for="check">Show Password</label>
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
          <div className="mb-3">
            <button className="btn btn-primary w-100">Login</button>
          </div>

          <p>
            Don't have an account?
            <button
              type="button"
              className="btn btn-secondary m-2"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </p>

          {message && <p className="text-center">{message}</p>}
        </form>
      </div>
    </div>
  );
}
