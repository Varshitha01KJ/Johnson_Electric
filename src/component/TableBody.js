import React from 'react'
// import {Tooltip,OverlayTrigger,} from 'react-bootstrap'
// import {RiDeleteBin5Line} from 'react-icons/ri';
// import {FaEdit} from 'react-icons/fa';
// import { NavLink } from 'react-router-dom'; 
// import { useState } from 'react';



const TableBody = ({ tableData, columns }) => {

  
  return (
    <tbody>
      {tableData.map((data) => {
        return (
          <tr key={data.id}>
            {columns.map(({ accessor }) => {
              const tData = data[accessor] ? data[accessor] : "——";
              return <td key={accessor}>{tData}</td>;
              // <td>
              //    <OverlayTrigger className="edit" overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}>
              //     <NavLink to="/EarAdd" > <FaEdit  size={25} color="red" /> </NavLink>
              //      </OverlayTrigger>
              //    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Delete</Tooltip>}>
              //       <a><RiDeleteBin5Line className="edit m-1" onClick={handleShow} size={25} color="red"/></a>
              //      </OverlayTrigger>
              //  </td>
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
  


export default TableBody