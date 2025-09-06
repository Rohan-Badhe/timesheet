import React from "react";
import { FaHome, FaAlipay, FaRegUser } from "react-icons/fa";
import { FcLeave, FcDataSheet } from "react-icons/fc";
import { MdOutlineShutterSpeed, MdCoPresent } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="bg-light border-end d-sm-block"
      style={{ width: "220px", height: "100vh" }}
    >
      <div className="d-flex flex-column">
        <h3 className="ms-5 mb-5">
          <FcDataSheet className="ms-5" size={50} /> Timesheet
        </h3>
      </div>

      {/* Sidebar Nav */}
      <div className="flex-column p-2 text-dark" style={{ fontSize: "1.3rem" }}>
        <Link
          to="/task-list"
          className="d-flex text-dark align-items-center ms-3 text-decoration-none mb-4"
        >
          <FaHome className="me-3" />
          TaskList
        </Link>

        <Link
          to="/employees"
          className="d-flex text-dark align-items-center ms-3 text-decoration-none mb-4"
        >
          <FaUsers className="me-3" />
          Employees
        </Link>

        <a
          href="#"
          className="d-flex text-dark align-items-center ms-3 text-decoration-none mb-4"
        >
          <MdOutlineShutterSpeed className="me-3" />
          Timesheet
        </a>

        <a
          href="#"
          className="d-flex text-dark align-items-center ms-3 text-decoration-none mb-4"
        >
          <FaAlipay className="me-3" />
          Payments
        </a>

        <a
          href="#"
          className="d-flex text-dark align-items-center ms-3 text-decoration-none mb-4"
        >
          <FcLeave className="me-3" />
          Leave
        </a>

        <Link
          to="/dashboard"
          className="d-flex text-dark align-items-center ms-3 text-decoration-none mb-4"
        >
          <MdCoPresent className="me-3" />
          Dashboard
        </Link>

        {/* <Link to="/profile" data-bs-toggle="modal" data-bs-target="#profileModal" className="d-flex text-dark align-items-center ms-3 text-decoration-none mb-4">
          <FaRegUser className="me-3" />
          Profile
        </Link> */}

        <a
          href="#"
          className="d-flex text-dark align-items-center ms-3 text-decoration-none mb-4"
        >
          <CiSettings className="me-3" />
          Settings
        </a>
        <Link
          to={"/show "}
          className="d-flex text-dark align-items-center ms-5 text-decoration-none mb-4"
        >
          Show{" "}
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
