import React  from 'react'
import { useState,useEffect } from 'react';
import {ListGroup,Offcanvas,Button,Form,Modal} from 'react-bootstrap'
import {IoIosArrowDown} from 'react-icons/io';
import {CgMenuGridR} from 'react-icons/cg';
import {AiOutlineMenu} from 'react-icons/ai';
import {MdShoppingBag} from 'react-icons/md';
import {ImDatabase} from 'react-icons/im';
import {CgProfile} from 'react-icons/cg';
import {FiSave} from 'react-icons/fi';
import {TiCancel} from 'react-icons/ti';
import {FaTasks} from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; 
import Sidenav from './Sidenav';
import axios from 'axios';
import {useForm} from 'react-hook-form';
// import {useHistory} from 'react-router';

function EarAdd() {
  

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const [show1, setShow1] = useState(false);
const handleClose1 = () => setShow1(false);
 const handleShow1 = () => setShow1(true);

  const [emplyoeeName,setEmplyoeeName]=useState('');
  const [costCenter,setCostCenter]=useState('');
  const [expenseType,setExpenseType]=useState('');

  const [errors,setError]=useState('');
  const [submitted, setSubmitted] = useState(false);
   console.log(emplyoeeName);
   console.log(costCenter);
   console.log(expenseType);
  
  const postData = (e) => {
    e.preventDefault();
    if(emplyoeeName==="" && costCenter=="" && expenseType==""){
      setError("Enter the required details");
      return false;
    }
     if(emplyoeeName===""){
      setError("Enter Emplyoee Name");
      return false;
    }
     if(costCenter===""){
      setError("Enter Cost Center");
      return false;
    }
     if(expenseType===""){
      setError("Enter Expense Type");
      return false;
    }
  else{
    axios.post(`https://6260e8acf429c20deb977f95.mockapi.io/data`, {
      emplyoeeName,
      costCenter,
      expenseType
    })
  
    setSubmitted(true);
    setError(false);
    handleShow1();
 
   }
  }
  return (
    <>
    <div className='row'>
    <Sidenav/>
     <div className='col-lg-10 col-sm bg-light m-0 p-0 application'>
       <div className='col bg-white d-flex   justify-content-between shadow-sm p-2 sticky-top'>
       <div className='d-lg-none d-xl-none ms-2'>
        <Button variant ="light" onClick={handleShow}><FaTasks size={25}></FaTasks></Button>
        </div>
          <h5 class="title d-none d-sm-block p-2">Expense Account Reimbursement</h5>
            <div className='app-utilities'>
              <div  className="app-utility-item app-user-dropdown dropdown p-2">
                <a  className="dropdown-toggle text-muted text-decoration-none pe-3 m-3" id="user-dropdown-toggle" data-bs-toggle="dropdown" href='#' role="button" >Paul Walker</a>
               <ul  className="dropdown-menu bg-light text-center " aria-labelledby="user-dropdown-toggle">
               <li><NavLink to="/" style={{cursor:"pointer"}}  className="text-dark text-decoration-none " >Log Out</NavLink></li>
                </ul>
                 </div>
                  </div>
                   </div> 
                   <form>
  <div className='row  mx-1 p-4' >

  <div className='col  d-flex justify-content-between'>
  <h4>Add EAR</h4>
  <div >
  <div className='d-flex' >
    
 
  <div class="col-auto">
  {/* <NavLink to='/Mywork'> */}
  <button className="btn btn-warning m-1 text-white" id="save" onClick={postData} type="submit"><FiSave size={20} 
 color="white" /> Save</button>
  {/* </NavLink>  */}
  </div>

 
 <NavLink to='/Mywork'>
 <div class="col-auto">
    <a className="btn btn-secondary m-1 text-white" id="cancel" >< TiCancel size={20} color="white"/>Cancel </a>
	   </div>
  </NavLink>
  </div>
  </div>
  </div>
  </div>

  <div className='row  g-3 bg-white shadow bg-white rounded p-3 mx-4 my-2 '>
  
  <div className='col-md-3'>
  <Form >
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Employee Name<span class="required">*</span></Form.Label>
    <Form.Control type="text"  name='employee' placeholder=" "   onChange={(e)=>setEmplyoeeName(e.target.value)} />
    {<p className='text-danger'> {errors}</p>}
  </Form.Group>
  </Form>
  </div>
   <div className='col-md-3' >
 <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Cost Center<span class="required">*</span></Form.Label>
    <select  className="form-select" type="email" name='cost' placeholder=" " value={costCenter} onChange={(e)=>setCostCenter(e.target.value)} >
    <option selected="" disabled="">Select</option>
   <option>PRC</option>
   <option>HK</option>
   <option>ILO</option>
   <option>JBO</option>
   <option>JEK</option>
   <option>PARLEX HK</option>
   <option>PRC-BEHAI</option>
   <option>PRC-JESH</option>
  <option>PRC-PARLEX</option>
  <option>TAIWAN</option>
  <option>ZBO</option>
   </select> 
    </Form.Group>
  </Form>
  </div>

  <div className='col-md-3'>
    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Expense Type<span class="required">*</span></Form.Label>
   <select  className="form-select" type="text" name='expense' placeholder=" " value={ expenseType} onChange={(e)=>setExpenseType(e.target.value)}>
    <option selected="" disabled="">Select</option>
  <option>Business Travel</option>
  <option>Home Leave</option>
   <option>Moving & Living</option>
   <option>Petty Cash</option>
   </select> 
  </Form.Group>
  </Form>
   </div>
   <div className='col-md-3'>
   <label for="" class="form-label">Creation Date/Time</label>
  <p class="form-control-plaintext pt-2">8/21/2021 2:37 PM</p>
  </div>
 </div>
 </form>
 </div>

 </div>

<Offcanvas show={show} onHide={handleClose}  id="canvas">
<Offcanvas.Header closeButton>
<img src='./images/je-logo.jpg' className='mt-2 img-fluid'></img>
</Offcanvas.Header>
<div className='col  shadow p-0 m-0 '>
<ListGroup variant='flush' className='mt-5 p-0'><NavLink to="/Mywork" activeClassName="active" className="sidenav1"><AiOutlineMenu size={20} className="mx-2"  />My Work</NavLink>
<NavLink to="/Application" activeClassName="active" className=" sidenav1"><CgMenuGridR size={20} className="mx-2" />My Application</NavLink>
<NavLink to="/Statuss" activeClassName="active" className=" sidenav1"> <MdShoppingBag size={20} className="mx-2" />By Status</NavLink>
<NavLink to="/Delegation" activeClassName="active" className=" sidenav1"><CgProfile size={20} className="mx-2" /> Delegation Profile</NavLink>
{/*<NavLink to="/Archieve " activeClassName="active" className="sidenav1"><ImDatabase size={20} className="mx-2" /> Archieve Database</NavLink>*/}
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

  <Modal show={show1} onHide={handleClose1}>
 <Modal.Body>Data submitted successfully
   <NavLink to='/Mywork'>
     <span>  <Button id="yes" onClick={handleClose1}> Yes </Button></span>   
   </NavLink>
   </Modal.Body>
   </Modal> 
  </>
)
}


export default EarAdd