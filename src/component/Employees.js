import React from "react";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import "datatables.net-select-dt";
import "datatables.net-responsive-dt";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";
import { FaTasks } from "react-icons/fa";
import { GoTasklist } from "react-icons/go";
import { FaHourglassStart } from "react-icons/fa";
import { MdSendTimeExtension } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";

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
    axios
      .get("http://192.168.0.118:8082/api/employees")
      .then((res) => {
        if (res.data && res.data.length === 0) {
          setDataIsLoaded(true);
        } else {
          setEmployee(res.data);
          setDataIsLoaded(true);
        }
      })
      .catch(() => setDataIsLoaded(true));
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
      <div className="m-3">
        {dataIsLoaded && employee.length === 0 ? (
          <div className="">
            <p>Nothing to display </p>
          </div>
        ) : (
          <table
            id="example"
            ref={tableRef}
            className="table table-striped table-bordered table-hover display nowrap "
          >
            <thead className="thead-light">
              <tr>
                <th>
                  <FaTasks className="me-2" />
                  Emp Id
                </th>
                <th>
                  <GoTasklist className="me-2" />
                  Name{" "}
                </th>
                <th>
                  <FaHourglassStart className="me-2" />
                  Designation
                </th>
                <th>
                  <MdSendTimeExtension className="me-2" />
                  Contact
                </th>
                <th>
                  <MdSendTimeExtension className="me-2" /> Date Of Birth{" "}
                </th>
                <th>
                  <MdSendTimeExtension className="me-2" /> Date of Joining{" "}
                </th>
                <th>
                  <MdSendTimeExtension className="me-2" /> Address
                </th>
                <th>
                  <MdSendTimeExtension className="me-2" /> Email
                </th>
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
    </>
  );
};

export default Employees;
