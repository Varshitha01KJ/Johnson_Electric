
import './App.css';
import Login from './component/Login';
import EarAdd from './component/EarAdd'
import Application from './component/Application';
import Statuss from './component/Statuss';
import Delegation from './component/Delegation';
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Archieve from './component/Archieve';
import Mywork from './component/Mywork';
import Edit from './component/Edit';
import Delete from './component/Delete';

function App() {
  return (
   <>
     <Routes>
     <Route exact path="/" element={<Login />}></Route>
     </Routes>
     <Routes>
    <Route path="/EarAdd" element={<EarAdd />} ></Route> 
    </Routes>
    <Routes>
    <Route path="/Mywork" element={<Mywork />} ></Route>
    </Routes>
    <Routes>
    <Route path="/Application" element={<Application />} ></Route>
    </Routes>
    <Routes>
    <Route path="/Statuss" element={<Statuss/>} ></Route>
    </Routes>
    <Routes>
    <Route path="/Delegation" element={<Delegation/>} ></Route>
    </Routes>
    <Routes>
    <Route path="/Archieve" element={<Archieve/>} ></Route>
    </Routes>
  <Routes>
    <Route path='/Edit' element={<Edit/>} ></Route>
  </Routes>
  <Routes>
    <Route path='/Delete' element={<Delete/>} ></Route>
  </Routes>
   </>


  );
}

export default App
