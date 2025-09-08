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
                    {/* {employee.map((emp) => (
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
                    ))} */}
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>Manager</td>
                      <td>123-456-7890</td>
                      <td>1990-01-01</td>
                      <td>2020-01-01</td>
                      <td>123 Main St, City, Country</td>
                      <td>john@gmail.com</td>
                    </tr>
                 <tr>
                      <td>2</td>
                      <td>Jane Smith</td>
                      <td>Developer</td>
                      <td>987-654-3210</td>
                      <td>1992-02-02</td>
                      <td>2021-02-02</td>
                      <td>456 Elm St, City, Country</td>
                      <td>j@gmail.com</td>  
                 </tr>
                  <tr>
                      <td>3</td>
                      <td>Mike Johnson</td>
                      <td>Designer</td>
                      <td>555-123-4567</td>
                      <td>1988-03-03</td>
                      <td>2019-03-03</td>
                      <td>789 Oak St, City, Country</td>
                      <td>hf@gmail.com</td>
                 </tr>
                  <tr>
                      <td>4</td>
                      <td>Emily Davis</td>
                      <td>Tester</td>
                      <td>444-987-6543</td>
                      <td>1995-04-04</td>
                      <td>2022-04-04</td>
                      <td>321 Pine St, City, Country</td>
                      <td>ghgu@gh.cpm</td>
                 </tr>
                  <tr>
                      <td>5</td>
                      <td>David Wilson</td>
                      <td>Support</td>
                      <td>333-555-7777</td>
                      <td>1991-05-05</td>
                      <td>2020-05-05</td>
                      <td>654 Cedar St, City, Country</td>
                      <td>fgjg@gmail.com</td>
                 </tr>
                  <tr>
                      <td>6</td>
                      <td>Sarah Brown</td>
                      <td>HR</td>
                      <td>222-666-8888</td>
                      <td>1989-06-06</td>
                      <td>2018-06-06</td>
                      <td>987 Spruce St, City, Country</td>
                      <td>jgh@gmail.com</td>
                 </tr>
                  <tr>
                      <td>7</td>
                      <td>Chris Lee</td>
                      <td>Intern</td>
                      <td>111-222-3333</td>
                      <td>1998-07-07</td>
                      <td>2021-07-07</td>
                      <td>159 Maple St, City, Country</td>
                      <td>    dghr@gmail.com</td>
                  </tr>
                  <tr>
                      <td>8</td>
                      <td>Alice Green</td>
                      <td>Consultant</td>
                      <td>777-888-9999</td> 
                      <td>1993-08-08</td>
                      <td>2019-08-08</td>
                      <td>753 Birch St, City, Country</td>
                      <td>tjgh@gmail.com</td>
                  </tr>
                  <tr>
                      <td>9</td>
                      <td>Tom Harris</td>
                      <td>Analyst</td>
                      <td>666-777-8888</td>
                      <td>1994-09-09</td>
                      <td>2020-09-09</td>
                      <td>852 Walnut St, City, Country</td>
                      <td>jjhtkgujh@gmail.com</td>  
                  </tr>
                  <tr>
                      <td>10</td>
                      <td>Linda Martinez</td>
                      <td>Coordinator</td>
                      <td>555-666-7777</td>
                      <td>1996-10-10</td>
                      <td>2021-10-10</td>
                      <td>951 Chestnut St, City, Country</td>
                      <td>rhjhh@gmail.com</td>
                  </tr> 
                  <tr>
                      <td>11</td>
                      <td>James Clark</td>
                      <td>Executive</td>
                      <td>444-555-6666</td>
                      <td>1990-11-11</td>
                      <td>2018-11-11</td>
                      <td>357 Poplar St, City, Country</td>
                      <td>jhgj@gmail.com</td>
                  </tr>
                  <tr>
                      <td>12</td>
                      <td>Patricia Lewis</td>
                      <td>Administrator</td>
                      <td>333-444-5555</td>   
                      <td>1987-12-12</td>
                      <td>2017-12-12</td>
                      <td>258 Willow St, City, Country</td>
                      <td>hdg@gmail.com</td>
                  </tr>
                  

                  </tbody>
                </table>
              )}
            </div>
          </div>

        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Employees;