import React from "react";
import h_bg from "../assets/h_bg.jpg";

import './Header.css';

const Header = () => {
  return (
    <div className="home_header">
      
      <img src={h_bg} alt="Background" className="img-fluid" />
      <p className="text-overlay">Find The Best Place To Live As Undergraduate</p>
      
    </div>
  );
};

export default Header;

