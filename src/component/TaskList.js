import React from 'react'
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-select-dt';
import 'datatables.net-responsive-dt';
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";
import { Card, Row, Col,Table , Button ,Modal,Form ,Pagination} from "react-bootstrap";
import { FaTasks } from "react-icons/fa";
import { GoTasklist } from "react-icons/go";
import { FaHourglassStart } from "react-icons/fa";
import { MdSendTimeExtension } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import axios from 'axios';

import $ from "jquery";
import "datatables.net-dt";
import { useState ,useRef , useEffect } from 'react'

const TaskList = () => {
    const tableRef = useRef(null);
    const [tasks, setTask] = useState([]);
const [dataIsLoaded, setDataIsLoaded] = useState(false);

useEffect(() => {
  axios.get('http://192.168.0.118:8082/api/tasks')
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
  if (tasks.length > 0) {
    const table = $(tableRef.current).DataTable({
      dom: "<'row m-3'<'col-sm-6'l><'col-sm-6 'f>>" + 
           "<'row'<'col-sm-12'tr>>" +       
           "<'row mt-3'<'col-sm-6'i><'col-sm-6 d-flex justify-content-end'p>>",
      scrollX: true,
      autoWidth: false
    });

    return () => {
      table.destroy();
    };
  }
}, [tasks]);

return (
  <div className="m-3">
    {dataIsLoaded && tasks.length === 0 ? (
      <p>Nothing to display</p>
    ) : (
      <table ref={tableRef} className="table table-striped table-bordered table-hover display nowrap">
        <thead className="thead-light">
          <tr>
            <th><FaTasks className="me-2" />Task Id</th>
            <th><GoTasklist className="me-2" />Title</th>
            <th><FaHourglassStart className="me-2" />Description</th>
            <th><MdSendTimeExtension className="me-2" />Complete Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.taskId}>
              <td>{task.taskId}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

}

export default TaskList
