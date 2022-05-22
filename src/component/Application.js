import React from 'react'

import { useState } from 'react';
import {Offcanvas,Button,Tooltip,OverlayTrigger,Modal,ListGroup} from 'react-bootstrap'
import {RiDeleteBin5Line} from 'react-icons/ri';
import {FaEdit} from 'react-icons/fa';
import {AiOutlinePlus} from 'react-icons/ai';
import {CgMenuGridR} from 'react-icons/cg';
import {AiOutlineMenu} from 'react-icons/ai';
import {MdShoppingBag} from 'react-icons/md';
import {ImDatabase} from 'react-icons/im';
import {CgProfile} from 'react-icons/cg';
import { NavLink } from 'react-router-dom'; 
import {FaTasks} from 'react-icons/fa';
import Sidenav from './Sidenav';
 import Jsondata from './Table.json'

 import TableBody from './TableBody';
 import TableHead from './TableHead';

function Application() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const [show1, setShow1] = useState(false);
const handleClose1 = () => setShow1(false);
const handleShow1 = () => setShow1(true);

const [data,setData]=useState(Jsondata);

const [tableData, setTableData] = useState(Jsondata);

  const columns = [
    { label: "Employee Name", accessor: "employeeName",Button:"Asc", sortable: true },
    
    { label: "Cost Center", accessor: "costCenter", sortable: false },
    { label: "Expense Type", accessor: "expenseType", sortable: false },
  ];

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

return (
  <>

  <div className='row'>
    <Sidenav/>

   <div className='col bg-light m-0 p-0 application'>
     <div className='col bg-white d-flex   justify-content-between shadow-sm p-2 sticky-top'>
       <div className='d-lg-none d-xl-none ms-2'>
          <Button variant ="light" onClick={handleShow1}><FaTasks size={25}></FaTasks></Button>
          </div>
            <h5 class="title d-none d-sm-block p-2">Expense Account Reimbursement</h5>
              <div className='app-utilities'>
                 <div  className="app-utility-item app-user-dropdown dropdown p-2">
                   <a  className="dropdown-toggle text-muted text-decoration-none pe-3 m-3" id="user-dropdown-toggle" data-bs-toggle="dropdown" href='#' role="button" >Paul Walker</a>
                    <ul  className="dropdown-menu bg-light text-center " aria-labelledby="user-dropdown-toggle ">
                     <li><NavLink to="/" style={{cursor:"pointer"}}  className="text-dark text-decoration-none " >Log Out</NavLink></li>
                       </ul>
                         </div>
                           </div>
                             </div>


      <div className='row p-4 mx-1' >
        <div className='col  d-flex justify-content-between'>
           <h4>Application</h4>
            <div>
              <NavLink to='/EarAdd'>
                <div class="col-auto">
                  <a className="btn btn-warning text-white m-2" id="button" href="dashboard.html"><AiOutlinePlus size={25} color="white" />New EAR </a>
                  </div>
                     </NavLink>
                      </div>
                        </div>
                          </div>

       <div className='row mx-4'>
          <div className='col shadow p-0'>
            <table className='table mb-0 table-hover'>
               {/* <thead id="table">
               <tr>
               <th>Employee Name</th>
               <th>Cost Center</th>
               <th>Expense Type</th>
               <th></th>
              </tr>
              </thead> */}
               <TableHead {...{ columns, handleSorting }} ><Button onClick="ASc" color="info"></Button></TableHead>
               <TableBody {...{ columns, tableData }} >
             
                 
                 <OverlayTrigger className="edit" overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}>
                  <NavLink to="/EarAdd" > <FaEdit  size={25} color="red" /> </NavLink>
                   </OverlayTrigger>
                 <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Delete</Tooltip>}>
                    <a><RiDeleteBin5Line className="edit m-1" onClick={handleShow} size={25} color="red"/></a>
                   </OverlayTrigger>
                
                 </TableBody>
            
                      
                      </table>
                      </div>
                       </div>
                        </div>
                          </div> 
                     <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                         <Modal.Title>Confirmation</Modal.Title>
                      </Modal.Header>
                    <Modal.Body>Sure to delete?</Modal.Body>
                    <Modal.Footer>
                     <Button id="yes" onClick={handleClose}>
                      Yes
                      </Button>
                   <Button id="no" onClick={handleClose}>
                       No
                    </Button>
                    </Modal.Footer>
                     </Modal>


    <Offcanvas show={show1} onHide={handleClose1}  id="canvas">
      <Offcanvas.Header closeButton>
       <img src='./images/je-logo.jpg' className='mt-2 img-fluid'></img>
      </Offcanvas.Header>
   
      <div className='col   shadow p-0 m-0 '>
      <ListGroup variant='flush' className='mt-5 p-0'><NavLink to="/Dashboard" activeClassName="active" className="sidenav1"><AiOutlineMenu size={20} className="mx-2"  />My Work</NavLink>
        <NavLink to="/Application" activeClassName="active" className=" sidenav1"><CgMenuGridR size={20} className="mx-2" />My Application</NavLink>
        <NavLink to="/Statuss" activeClassName="active" className=" sidenav1"> <MdShoppingBag size={20} className="mx-2" />By Status</NavLink>
        <NavLink to="/Delegation" activeClassName="active" className=" sidenav1"><CgProfile size={20} className="mx-2" /> Delegation Profile</NavLink>
{/*  <NavLink to="/Archieve " activeClassName="active" className="sidenav1"><ImDatabase size={20} className="mx-2" /> Archieve Database</NavLink>*/}
<div  className="app-utility-item app-user-dropdown dropdown">
  
  <NavLink to="/Archieve"  className=" nav-link dropdown-toggle " activeClassName="active" id='sidenav3'  data-bs-toggle="dropdown"  role="button" ><ImDatabase size={20} className="mx-2 " />Archive Database</NavLink>
  <ul  className="dropdown-menu text-align-centre mx-5 " aria-labelledby="user-dropdown-toggle">
<li className="p-1">Archive 2016</li>
<li className="p-1">Archive 2017</li>
</ul>
</div>
        </ListGroup>
        </div>
        </Offcanvas>
 </>
);
};


export default Application