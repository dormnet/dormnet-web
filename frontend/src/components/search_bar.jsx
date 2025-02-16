import React, { useState } from "react";

const SearchBar = () => {
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedRoomType, setSelectedRoomType] = useState("");

  // Function to handle search
  const handleSearch = (e) => {
    e.preventDefault(); // Prevents page reload

    console.log("Selected University:", selectedUniversity);
    console.log("Selected Price:", selectedPrice);
    console.log("Selected Room Type:", selectedRoomType);

    // Add API call or filtering logic here
  };

  // Function to reset fields
  const handleReset = () => {
    setSelectedUniversity("");
    setSelectedPrice("");
    setSelectedRoomType("");
  };

  return (
    <nav className="navbar bg-body-tertiary p-3 shadow-sm" 
    style={{
      position:"sticky",top:"60px",zIndex:"999"
      }}>
      <div className="container-fluid d-flex justify-content-center" >
        <form
          className="d-flex align-items-center gap-2"
          role="search"
          onSubmit={handleSearch}
        >
          {/* University Dropdown */}
          <select
            className="form-select"
            value={selectedUniversity}
            onChange={(e) => setSelectedUniversity(e.target.value)}
            style={{ minWidth: "250px", borderRadius: "16px" }}
          >
            <option value="">Choose a University</option>
            <option value="colombo">University of Colombo</option>
            <option value="peradeniya">University of Peradeniya</option>
            <option value="sri_jayewardenepura">University of Sri Jayewardenepura</option>
            <option value="kelaniya">University of Kelaniya</option>
            <option value="moratuwa">University of Moratuwa</option>
            <option value="jaffna">University of Jaffna</option>
            <option value="ruhuna">University of Ruhuna</option>
            <option value="open_university">Open University of Sri Lanka</option>
            <option value="eastern">Eastern University, Sri Lanka</option>
            <option value="south_eastern">South Eastern University of Sri Lanka</option>
            <option value="rajarata">Rajarata University of Sri Lanka</option>
            <option value="sabaragamuwa">Sabaragamuwa University of Sri Lanka</option>
            <option value="wayamba">Wayamba University of Sri Lanka</option>
            <option value="uva_wellassa">Uva Wellassa University</option>
          </select>

          {/* Price Range Dropdown */}
          <select
            className="form-select"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            style={{ minWidth: "180px", borderRadius: "16px" }}
          >
            <option value="">Select Price Range</option>
            <option value="budget">Budget (LKR 10,000 - LKR 30,000)</option>
            <option value="midrange">Mid-Range (LKR 30,000 - LKR 75,000)</option>
            <option value="premium">Premium (LKR 75,000+)</option>
          </select>

          {/* Room Type Dropdown */}
          <select
            className="form-select"
            value={selectedRoomType}
            onChange={(e) => setSelectedRoomType(e.target.value)}
            style={{ minWidth: "180px", borderRadius: "16px" }}
          >
            <option value="">Select Room Type</option>
            <option value="shared">Shared Room</option>
            <option value="single">Single Room</option>
          </select>

          {/* Search Button */}
          <button className="btn btn-primary px-4" type="submit">
            Search
          </button>

          {/* Reset Button */}
          <button
            className="btn btn-outline-danger px-3"
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
