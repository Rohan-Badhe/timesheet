import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Userregistration from "./component/Userregistration";
import Login from "./component/login";
import Sidebar from "./component/sidebar";
import Navbar from "./component/navbar";
import Dashboard from "./component/Dashboard";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import EmpInfo from "./component/EmpInfo";
import Footer from "./component/footer";
import { useState } from "react";
import TaskList from "./component/TaskList";
import Layout from "./component/Layout";
import Employees from "./component/Employees";
import Profile from "./component/profile";

function App() {
  const [page, setPage] = useState("login");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Userregistration />} />

          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="task-list" element={<TaskList />} />
            <Route path="empinfo" element={<EmpInfo />} />
            <Route path="employees" element={<Employees />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
