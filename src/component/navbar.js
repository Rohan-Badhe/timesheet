import { Container, Nav, Form, Button, Modal } from "react-bootstrap";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdCoPresent } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.setItem("islogin", 0);
    navigate("/login");
    window.location.reload();
  };
  return (
    <>
      <nav className="navbar bg-dark navbar-light">
        <Link
          to="/"
          href="#"
          className="ms-auto mt-2 link-light text-decoration-none link-opacity-50 link-opacity-100-hover m-2"
        >
          Home
        </Link>
        <div className="dropdown dropdown-menu-start">
          <p
            className="dropdown-toggle text-light link-light text-decoration-none link-opacity-50 link-opacity-100-hover m-2 "
            type="button"
            id="dropdownMenu"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FaRegUser className="me-3" />
            Rohan Suresh Badhe
          </p>
          <ul
            className="dropdown-menu "
            aria-labelledby="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"
          >
            <li data-bs-toggle="modal" data-bs-target="#profileModal">
              <Link to="/profile" className="dropdown-item" href="#Profile">
                <MdCoPresent className="me-3" />
                Profile
              </Link>
            </li>
            <li>
              <Link to="/task-list" className="dropdown-item" href="#">
                <FaTasks className="me-3" />
                Tasks
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="btn btn-primary btn-sm ms-4"
              >
                logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
