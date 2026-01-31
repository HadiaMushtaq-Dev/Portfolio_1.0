import React from 'react'
import {Routes,Route} from 'react-router-dom'
import "./App.css";
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import { useEffect } from "react";


function App() {

 
  return (
    <div className='app'>
<Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Projects' element={<Projects/>}/>
      </Routes>
<Footer/>

    </div>
  )
}

export default App
