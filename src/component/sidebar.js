import React, { useState, useEffect } from "react";
import { FaHome, FaAlipay, FaRegUser } from "react-icons/fa";
import { FcLeave, FcDataSheet } from "react-icons/fc";
import { MdOutlineShutterSpeed, MdCoPresent } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaUsers } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Auto-collapse on small screens
  useEffect(() => {
    const handleResize = () => {
      window.requestAnimationFrame(() => {
        if (window.innerWidth < 768) {
          setIsCollapsed(true);
        } else {
          setIsCollapsed(false);
        }
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-light border-end d-sm-block ${
        isCollapsed ? "collapsed" : ""
      }`}
      style={{
        width: isCollapsed ? "70px" : "250px",
        height: "100vh",
        transition: "width 0.3s ease",
      }}
    >
      <div className="d-flex flex-column p-2">
        <button
          className="btn btn-sm btn-outline-secondary ms-auto mb-3"
          onClick={toggleSidebar}
        >
          ☰
        </button>

        <div className="sidebar-header d-flex align-items-center p-2">
          <FcDataSheet size={40} className="me-2" />
          {!isCollapsed && <h3 className="m-0">Timesheet</h3>}
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div className="flex-column p-2 text-dark" style={{ fontSize: "1.3rem" }}>
        <Link
          to="/task-list"
          className="d-flex text-dark align-items-center ms-3 text-decoration-none mb-4"
        >
          <FaHome className="me-3" />
          {!isCollapsed && "TaskList"}
        </Link>

         <Link
          to="/employees"
          className="d-flex text-dark align-items-center ms-3 text-decoration-none mb-4"
        >
          <FaHome className="me-3" />
          {!isCollapsed && "Employee"}
        </Link>

        <a
          href="#"
          className="d-flex text-dark align-items-center ms-3 text-decoration-none mb-4"
        >
          <MdOutlineShutterSpeed className="me-3" />
          {!isCollapsed && "Timesheet"}
        </a>

        <a
          href="#"
          className="d-flex text-dark align-items-center ms-3 text-decoration-none mb-4"
        >
          <FaAlipay className="me-3" />
          {!isCollapsed && "Payroll"}
        </a>

        <a
          href="#"
          className="d-flex text-dark align-items-center ms-3 text-decoration-none mb-4"
        >
          <FcLeave className="me-3" />
          {!isCollapsed && "Leave"}
        </a>

        <Link
          to="/dashboard"
          className="d-flex text-dark align-items-center ms-3 text-decoration-none mb-4"
        >
          <MdCoPresent className="me-3" />
          {!isCollapsed && "Dashboard"}
        </Link>

        <Link
          to="/show"
          className="d-flex text-dark align-items-center ms-3 text-decoration-none mb-4"
        >
          <MdCoPresent className="me-3" />
          {!isCollapsed && "Show"}
        </Link>

        <a
          href="#"
          className="d-flex text-dark align-items-center ms-3 text-decoration-none mb-4"
        >
          <CiSettings className="me-3" />
          {!isCollapsed && "Settings"}
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
