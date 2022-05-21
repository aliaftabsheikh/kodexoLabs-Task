import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import Home from 'components/Pages/Home/Home';
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>   
       </div>
  )
};

export default App