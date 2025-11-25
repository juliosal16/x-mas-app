import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Car from './pages/Car/Car';
import Entertainment from './pages/Entertainment/Entertainment';
import Random from './pages/Random/Random';
import Missing from './pages/Missing/Missing';


function App() {




  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/x-mas-app/' element={< LandingPage />} />
        <Route path='/x-mas-app/home' element={< Home title={"Home Purchases"} />} />
        <Route path='/x-mas-app/car' element={< Car />} />
        <Route path='/x-mas-app/entertainment' element={< Entertainment />} />
        <Route path='/x-mas-app/random' element={< Random />} />
        <Route path='*' element={< Missing />} />
      </Routes>
    </>
  )
}

export default App
