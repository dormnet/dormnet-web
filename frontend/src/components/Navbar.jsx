import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{borderTop:"4px solid #ADD8E6"}}>
      <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{ fontSize: "26px", padding:"0px 40px" }}>Dormnet</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{ fontSize: "16px", padding:"0px 10px" }}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">List your dorm</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">My Account</a></li>
                <li><a className="dropdown-item" href="#">My Listing</a></li>
                <li><a className="dropdown-item" href="#">Setting</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
