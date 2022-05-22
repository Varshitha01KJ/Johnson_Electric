import React from 'react'
import {ListGroup,} from 'react-bootstrap';
import {AiOutlineMenu} from 'react-icons/ai';
import {CgMenuGridR} from 'react-icons/cg';
import {MdShoppingBag} from 'react-icons/md';
import {CgProfile} from 'react-icons/cg';
import {ImDatabase} from 'react-icons/im';
import {NavLink} from 'react-router-dom'; 



function Sidenav() {
  return (
  
    <div className='col-2   shadow p-0 m-0 d-none d-lg-block d-xl-block' id="leftNav">
       <div className='side'>
     <img src='./images/je-logo.jpg' className='mt-2 img-fluid'></img>
   
 <ListGroup  className='mt-5 p-0'>
   <NavLink to="/Mywork" activeClassName="active" className="sidenav1"><AiOutlineMenu size={20} className="mx-2"  />My Work</NavLink>
 <NavLink to="/Application" activeClassName="active" className=" sidenav1" ><CgMenuGridR size={20} className="mx-2" />My Application</NavLink>
  <NavLink to="/Statuss" activeClassName="active" className=" sidenav1"> <MdShoppingBag size={20} className="mx-2" />By Status</NavLink>
  <NavLink to="/Delegation" activeClassName="active" className=" sidenav1"><CgProfile size={20} className="mx-2" /> Delegation Profile</NavLink>

  </ListGroup>
 



    <div  className="app-utility-item app-user-dropdown dropdown mt-2">
    
                   <div  className=" nav-link dropdown-toggle d-inline"  id='sidenav3'  data-bs-toggle="dropdown"  role="button" ><ImDatabase size={20} className="mx-2 " />Archive Database</div>
                   <ul  className="dropdown-menu text-align-centre ml-4" aria-labelledby="user-dropdown-toggle">
               <li className="p-1 ">Archive 2016</li>
               <li className="p-1">Archive 2017</li>
             </ul>
            </div>  
       </div>
       </div>
  );
};

export default Sidenav