import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route ,Navigate } from "react-router-dom";
import "./App.css";
import Userregistration from "./component/Userregistration";
import Login from "./component/login";
import Dashboard from "./component/Dashboard";
import TaskList from "./component/TaskList";
import Employees from "./component/Employees";
import Profile from "./component/profile";
import Show from "./component/show";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  // Check sessionStorage once when app loads
  useEffect(() => {
    const storedLogin = sessionStorage.getItem("islogin");
    setIsLogin(storedLogin === "1");
  }, []);
  return (
    <Router>
      <Routes>
        {!isLogin ? (
          <>
            <Route path="/login" element={<Login onLogin={() => {
              sessionStorage.setItem("islogin", "1");
              setIsLogin(true);
            }} />} />
            <Route path="/register" element={<Userregistration />} />
            {/* If not logged in, redirect everything else to login */}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/task-list" element={<TaskList />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/show" element={<Show />} />
            {/* Default route after login */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
}
export default App;