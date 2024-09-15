import React from 'react';
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './MyComponents/Navbar/./Navbar'
import Homepage from './MyComponents/Homepage/Homepage';
import Footer from './MyComponents/Footer/Footer';
import Process from './MyComponents/Process/Process';
import Listing from './MyComponents/Listing/Listing'
import Blogs from './MyComponents/Blogs/Blogs'
import AnotherForm from './MyComponents/AnotherForm/AnotherForm'
function App() {
  return (
    <>
   <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/Process/:id" element={<Process/>}></Route>
        <Route exact path="/listing" element={<Listing/>}></Route>  
        <Route exact path="/" element={<Homepage/>}></Route>
        <Route exact path="/blogs" element={<Blogs/>}></Route>
        <Route exact path="/Addpet" element={<AnotherForm/>}></Route>
      </Routes>
      <Footer/>
   </Router>
    </>
  );
}

export default App;
