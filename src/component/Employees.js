import React from "react";
import "datatables.net-select-dt";
import "datatables.net-responsive-dt";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Footer from "./footer";

import $ from "jquery";
import "datatables.net-dt";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const Employees = () => {
  const tableRef = useRef(null);

  const [employee, setEmployee] = useState([]); 
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [tableid, setTableid] = useState("example");

  useEffect(() => {
    const Apicall = async () => {
      try {
        const response = await axios.post(
          "http://192.168.0.118:8082/api/employees/getallemployees"
        );

        setEmployee(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.log(error);
        setEmployee([]);
      } finally {
        setDataIsLoaded(true); 
      }
    };
    Apicall();
  }, []);

  useEffect(() => {
    console.log(employee);
    if (employee.length > 0) {
      const table = $("#example").DataTable();
      return () => {
        table.destroy();
      };
    } else {
      setTableid("");
    }
  }, [employee]);

  return (
    <>
      <div className="dashboard-container d-flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Sidebar end here */}

        {/* Main Content */}
        <div className="main-content flex-grow-1">
          {/* Header */}
          <Navbar />
          {/* Header end  here */}

          {/* Content */}
          <div className="content p-4">
            <div className="m-3">
           {!dataIsLoaded ? (
                <p className="text-dark progress-bar-animated">Loading...</p>
              ) : 
               employee.length === 0 ? (
                <p>Nothing to display</p>
              ) : (
                <table
                  id="example"
                  ref={tableRef}
                  className="table table-striped table-bordered table-hover display nowrap "
                >
                  <thead className="thead-light">
                    <tr>
                      <th>Emp Id</th>
                      <th>Name </th>
                      <th>Designation</th>
                      <th>Contact</th>
                      <th>Date Of Birth </th>
                      <th>Date of Joining </th>
                      <th>Address</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employee.map((emp) => (
                      <tr key={emp.empId}>
                        <td>{emp.empId}</td>
                        <td>{emp.fullName}</td>
                        <td>{emp.designation}</td>
                        <td>{emp.contactNo}</td>
                        <td>{emp.dob}</td>
                        <td>{emp.dateOfJoining}</td>
                        <td>{emp.address}</td>
                        <td>{emp.emailId}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
          {/* Content End here */}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Employees;
