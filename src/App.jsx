import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';


function App() {




  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/x-mas-app/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
