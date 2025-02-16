import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home'
import About from './pages/About'
import Listing from './pages/Listing'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/listing' element={<Listing/>}/>
          </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
