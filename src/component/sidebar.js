import React, { useState } from 'react';
import reactDOM from 'react-dom/client';
import { FaHome } from "react-icons/fa";
import { FcLeave } from "react-icons/fc";
import { FaAlipay } from "react-icons/fa";

import { MdOutlineShutterSpeed } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { MdCoPresent } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { Nav ,Image ,Badge  } from "react-bootstrap";
import { FcDataSheet } from "react-icons/fc";
import { Link } from 'react-router-dom';


function sidebar (){
 
return (
    <div md={2} className="bg-light border-end height-100  d-sm-block" style={{ width: "220px" }}>
     <div className='d-flex flex-column mr-1'> 
        <h3 className=' ms-5 mb-5'><FcDataSheet className='ms-5' size={50}/>Timesheet</h3>
         </div>
        <Nav className="flex-column p-2 text-dark" style={{ fontSize: "1.3rem" }}>
         <Link to='/task-list' className='d-flex text-dark align-items-center ms-3 text-decoration-none' >
             <FaHome className="me-3" />
             TaskList
          </Link>
           <Link to='/Employees' className='d-flex text-dark align-items-center m-3 text-decoration-none' >
             <FaUsers className="me-3" />
             Employees
          </Link>
          <Nav.Link href="#" className="d-flex text-dark align-items-center mb-2">
             <MdOutlineShutterSpeed className="me-3" />
             Timesheet
          </Nav.Link>
          <Nav.Link href="#" className="d-flex text-dark align-items-center mb-2">
             <FaAlipay className="me-3" />
             Payments
          </Nav.Link>
          <Nav.Link href="#" className="d-flex text-dark align-items-center mb-2">
             <FcLeave className="me-3" />
             Leave
          </Nav.Link>
          <Nav.Link href="#" className="d-flex text-dark align-items-center mb-2">
             <MdCoPresent className="me-3" />
             Dashboard
          </Nav.Link>
          <Link to='/Profile' className="d-flex text-dark align-items-center text-decoration-none ms-3 mb-2">
             <FaRegUser className="me-3" />
             Profile
          </Link>
          <Nav.Link href="#" className="d-flex text-dark align-items-center mb-2">
             <CiSettings className="me-3" />
             Settings
          </Nav.Link>
        </Nav>
        
     </div>
);
}
export default sidebar;
<nav className="navbar bg-dark navbar-light">
        

      </nav>