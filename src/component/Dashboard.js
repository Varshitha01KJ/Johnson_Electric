import React from 'react'
import { useState ,useEffect} from 'react';
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
//  import Jsondata from './Table.json'
 import axios from 'axios';




function Dashboard(props) {
  //---delete------
   const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [deleteId,setDeleteId]=useState("");
    const handleShow = (info) =>  {
      setShow(true);
      setDeleteId(info);
    }

//----offcanvas--------
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
const handleShow1 = () =>setShow1(true);

const [store, setStore] = useState([])
  const [sort, setSort] = useState(true)


  const [APIData, setAPIData] = useState([]);
useEffect(() => {
  axios.get(`https://6260e8acf429c20deb977f95.mockapi.io/data`)
  .then((response) => {
      setAPIData(response.data);
  })
}, [])

// const setData = (data) => {
//   console.log(data);
// }


const setData = (data) => {
  let { id,emplyoeeName, costCenter,expenseType  } = data;
  localStorage.setItem('ID', id);
  localStorage.setItem('Emplyoee Name',  emplyoeeName,);
  localStorage.setItem('Cost Center',costCenter );
  localStorage.setItem('Expense Type',expenseType )
}


  const getData = () => {
    axios.get(`https://6260e8acf429c20deb977f95.mockapi.io/data`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}
const onDelete = (id) => {
  axios.delete(`https://6260e8acf429c20deb977f95.mockapi.io/data/${id}`)
.then(() => {
  getData();
})
}

const sortByYearDesc = () => {
  const sorted = [...store].sort((a, b) => {
    return b.emplyoeeName.localeCompare(a.emplyoeeName);
  });
  setStore(sorted);
}

const sortByYearAsc = () => {
  const sorted = [...store].sort((a, b) => {
    return a.emplyoeeName.localeCompare(b.emplyoeeName);
  });
  setStore(sorted);
}

// 
const toggleSort = () => {
  setSort(prevSort => !prevSort)
  !sort ? sortByYearAsc()  :  sortByYearDesc() // since the state is not updated yet.
}

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
            <h4>{props.title}</h4>
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
                 <thead id="table" >
                 <tr >
                 <th>Employee Name <Button onClick={toggleSort} color="info">{sort ? " Desc" : "Asc"}</Button></th>

		             <th>Cost Center</th>
                 <th>Expense Type</th>
		             <th></th>
                </tr>
                </thead>
                <tbody>
                {/* {tableData} */}

             
                { APIData.length>0?
                (APIData.map((data)=>

                (
                 <tr>

                 <td>{data.emplyoeeName}</td>
                 <td>{data.costCenter}</td>
                 <td>{data.expenseType}</td>
                 <td className='text-end' >
                   
                    <OverlayTrigger className="edit" overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}>
                   
                     <NavLink to="/Edit" className="Editbtn">
                     

                       <FaEdit  size={25} color="red"    onClick={() => setData(data)}/> </NavLink>
                      </OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Delete</Tooltip>}>
                 
                       <a style={{cursor:"pointer"}}><RiDeleteBin5Line className="edit m-1" onClick={()=>{handleShow(data.id)}} size={25} color="red"/></a>
                     
                      </OverlayTrigger>
                    </td>
                    
                       </tr>
                )
                )):(<tr>
                 <td></td>  <td className='text-warning text-center fw-bold'>No Records found</td> <td></td> <td></td>
                  
                </tr>)
              }
              
                        </tbody>
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
                      <a onClick={handleClose}> <Button id="yes" onClick={() => onDelete(deleteId)}>
                        Yes
                        </Button></a>
                     <Button id="no" onClick={handleClose}>
                         No
                      </Button>
                      </Modal.Footer>
                       </Modal> 
  )

      <Offcanvas show={show1} onHide={handleClose1}  id="canvas">
        <Offcanvas.Header closeButton>
         <img src='./images/je-logo.jpg' className='mt-2 img-fluid'></img>
        </Offcanvas.Header>
      
        <div className='col   shadow p-0 m-0 '>
        <ListGroup variant='flush' className='mt-5 p-0'><NavLink to="/Mywork/EarAdd" activeClassName="active" className="sidenav1"><AiOutlineMenu size={20} className="mx-2"  />My Work</NavLink>
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

export default Dashboard