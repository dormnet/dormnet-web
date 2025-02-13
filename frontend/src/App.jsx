import React from 'react'

import Navbar from './components/Navbar';
import Header from './components/Header';
import Search_bar from './components/search_bar';
import Card from './components/card';
import Footer from './components/Footer';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const App = () => {
  return (
    <div className='container' style={{margin:"0",padding:"0",maxWidth:"100%"}}>
        <Navbar/> 
        <Header/>
        <Search_bar/>
        <Card/>
        <Footer/>


    </div>
  )
}

export default App
