import React from "react";
import "datatables.net-select-dt";
import "datatables.net-responsive-dt";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";
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

  useEffect(() => {
    axios
      .get("http://192.168.0.118:8082/api/tasks")
      .then((res) => {
        if (!res.data || res.data.length === 0) {
          setTask([]); // make sure it's always an array
          setDataIsLoaded(true);
        } else {
          setTask(res.data);
          setDataIsLoaded(true);
        }
      })
      .catch(() => setDataIsLoaded(true));
  }, []);

  useEffect(() => {
    if (dataIsLoaded && tasks.length > 0) {
      if (!$.fn.DataTable.isDataTable("#example")) {
        $(tableRef.current).DataTable();
      }
    }
    return () => {
      if ($.fn.DataTable.isDataTable("#example")) {
        $("#example").DataTable().destroy();
      }
    };
  }, [dataIsLoaded, tasks]);
  
  return (
    <div className="dashboard-container d-flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Sidebar end here */}

      {/* Main Content */}
      <div className="main-content flex-grow-1">
        {/* Header */}
        <Navbar />
        {/* Header end here */}

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
                    <th>Task Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Hours Worked</th>
                    <th>Complete Status</th>
                    <th>Summery</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {tasks.map((task) => ( */}
                  {/* <tr key={task.taskId}> */}

                  {/* <td>{task.taskId}</td>
                      <td>{task.title}</td>
                      <td>{task.description}</td>
                      <td>{task.hoursWorked}</td>
                      <td>{task.status}</td>
                      <td>{task.summary}</td> */}

                  {/* </tr> */}
                  {/* ))} */}

                  <tr>
                    <td>1</td>
                    <td>Design Homepage</td>
                    <td>Create a responsive homepage layout</td>
                    <td>5</td>
                    <td>In Progress </td>
                    <td>Initial design phase completed</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Develop API</td>
                    <td>Build RESTful API for user management</td>
                    <td>8</td>
                    <td>Not Started</td>
                    <td>Awaiting project kickoff</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Testing</td>
                    <td>Perform unit and integration testing</td>
                    <td>3</td>
                    <td>Completed</td>
                    <td>All tests passed successfully</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Deploy Application</td>
                    <td>Deploy the application to the production server</td>
                    <td>2</td>
                    <td>In Progress</td>
                    <td>Deployment scripts are being prepared</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Client Meeting</td>
                    <td>Discuss project requirements and timelines</td>
                    <td>1</td>
                    <td>Completed</td>
                    <td>Meeting held, requirements gathered</td>  
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Code Review</td>
                    <td>Review code for best practices and standards</td>
                    <td>4</td>
                    <td>Not Started</td>
                    <td>Scheduled for next week</td>
                  </tr>
                  <tr>  
                    <td>7</td>
                    <td>Update Documentation</td>
                    <td>Revise and update project documentation</td>
                    <td>2</td>
                    <td>In Progress</td>
                    <td>Documentation updates are underway</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Bug Fixing</td>
                    <td>Identify and fix bugs reported by QA team</td>
                    <td>6</td>
                    <td>Completed</td>
                    <td>All reported bugs have been resolved</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Performance Optimization</td>
                    <td>Optimize application performance and load times</td>
                    <td>7</td>
                    <td>Not Started</td>
                    <td>Pending performance analysis</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>User Training</td>
                    <td>Conduct training sessions for end-users</td>
                    <td>3</td>
                    <td>In Progress</td>
                    <td>Training materials are being developed</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Market Research</td>
                    <td>Analyze market trends and competitor strategies</td>
                    <td>4</td>
                    <td>Completed</td>
                    <td>Research report submitted</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Social Media Campaign</td>
                    <td>Plan and execute a social media marketing campaign</td>
                    <td>5</td>
                    <td>Not Started</td>
                    <td>Campaign strategy is being formulated</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Financial Analysis</td>
                    <td>Review and analyze financial statements</td>
                    <td>3</td>
                    <td>In Progress</td>
                    <td>Preliminary analysis completed</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>Product Launch</td>
                    <td>Coordinate activities for the new product launch</td>
                    <td>8</td>
                    <td>Completed</td>
                    <td>Launch event was successful</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>Customer Feedback</td>
                    <td>Collect and analyze customer feedback</td>
                    <td>2</td>
                    <td>Not Started</td>
                    <td>Feedback forms are being designed</td>
                  </tr> 
                </tbody>
              </table>
            )}
          </div>
        </div>
        {/* Content End here task */}
      </div>

      <Footer />
    </div>
  );
};

export default TaskList;
