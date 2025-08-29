import React, { useEffect, useRef ,useState} from "react";
import { Card, Row, Col,Table , Button ,Modal,Form ,Pagination} from "react-bootstrap";
import { FaTasks } from "react-icons/fa";
import { GoTasklist } from "react-icons/go";
import { FaHourglassStart } from "react-icons/fa";
import { MdSendTimeExtension } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import "../css/logo.css";
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-select-dt';
import 'datatables.net-responsive-dt';
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";

import $ from "jquery";
import "datatables.net-dt";
import Sidebar from './sidebar';
import Navbar from './navbar';
import Footer from "./footer";
import { Link} from "react-router-dom";


DataTable.use(DT);
export default function Dashboard({showProfile}) {
   useEffect(() => {
     
   
    const table = $(tableRef.current).DataTable({
      dom:
        "<'row m-3'<'col-sm-6'l><'col-sm-6 'f>>" + 
        "<'row'<'col-sm-12'tr>>" +       
         "<'row mt-3'<'col-sm-6'i><'col-sm-6 d-flex justify-content-end'p>>", 
          scrollX: true,  
          autoWidth: false 

    });


    return () => {
      table.destroy();
    };
  }, []);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const tableRef = useRef(null);


  return (
    <>
     
      
      <Card className="mt-4 p-3">
        <Button className="button float-start ms-auto " data-bs-toggle="modal" data-bs-target="#AddTaskForm" onClick={handleShow}>Add Task</Button>
        
        <Modal show={show} className="ms-auto" backdrop="static"   onHide={handleClose}>
          <Button  className="ms-auto bg-danger border-1 border-danger" onClick={handleClose}>
              X
            </Button>
         
          <Form className="mx-auto shadow  rounded bg-light bg-gradient w-100 p-4">
            <h2>Add Task </h2>
            <Form.Control type="text" placeholder="Task Number" className="mb-3" />
            <Form.Control type="text" placeholder="Task Name" className="mb-3" />
            <Form.Label>Starting Time </Form.Label>
            <Form.Control type="time" placeholder="Start Time" className="mb-3" />
            <Form.Label>Ending Time </Form.Label>
            <Form.Control type="time" placeholder="End Time" className="mb-3" />
            <Form.Control type="text" placeholder="Total Time" className="mb-3" />
            <Form.Control type="text" placeholder="Status : Pending/In-Progress/Completed" className="mb-3" />

            <Link ><Button variant="primary" type="submit" className="mt">Submit</Button></Link>
            
          </Form>
        </Modal>
       
      </Card>
    
      <div className=' d-flex flex-grow-1'>
     
      </div> 
    </>
  );
}