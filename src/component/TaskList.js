import React from "react";
import "datatables.net-select-dt";
import "datatables.net-responsive-dt";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";
import { FaTasks } from "react-icons/fa";
import { GoTasklist } from "react-icons/go";
import { FaHourglassStart } from "react-icons/fa";
import { MdSendTimeExtension } from "react-icons/md";
import axios from "axios";
import $ from "jquery";
import "datatables.net-dt";
import { useState, useRef, useEffect } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Footer from "./footer";

const TaskList = () => {
  const tableRef = useRef(null);
  const [tasks, setTask] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [tableid, setTableid] = useState("example");

  useEffect(() => {
    axios
      .post("http://192.168.0.118:8082/api/tasks")
      .then((res) => {
        if (!res.data || res.data.length === 0) {
          setDataIsLoaded(true);
        } else {
          setTask(res.data);
          setDataIsLoaded(true);
        }
      })
      .catch(() => setDataIsLoaded(true));
  }, []);

  useEffect(() => {
    if (tasks.length >= 0) {
      const table = $("#example").DataTable();
      return () => {
        table.destroy();
      };
    } else {
      setTableid("");
    }
  }, [tasks]);

  return (
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
            {dataIsLoaded && tasks.length === 0 ? (
              <p>Nothing to display</p>
            ) : (
              <table
                id="example"
                ref={tableRef}
                className="table table-striped table-bordered table-hover display nowrap"
              >
                <thead className="thead-light">
                  <tr>
                    <th>
                      <FaTasks className="me-2" />
                      Task Id
                    </th>
                    <th>
                      <GoTasklist className="me-2" />
                      Title
                    </th>
                    <th>
                      <FaHourglassStart className="me-2" />
                      Description
                    </th>
                    <th>
                      <MdSendTimeExtension className="me-2" />
                      Complete Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>Create Navbar</td>
                    <td>Create Navbar With responsivness</td>
                    <td>Ongoing</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
        {/* Content End here */}
      </div>
      <Footer />
    </div>
  );
};

export default TaskList;
