import React, { useState } from "react";

const SearchBar = () => {
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  return (
    <nav className="navbar bg-body-tertiary p-3">
      <div className="container-fluid d-flex justify-content-center">
        <form className="d-flex align-items-center" role="search">
          {/* University Dropdown */}
          <select
            className="form-select me-2"
            value={selectedUniversity}
            onChange={(e) => setSelectedUniversity(e.target.value)}
            style={{ maxWidth: "200px" }}
          >
            <option value="">Select University</option>
            <option value="harvard">Harvard University</option>
            <option value="mit">MIT</option>
            <option value="stanford">Stanford University</option>
          </select>

          {/* Price Range Dropdown */}
          <select
            className="form-select me-2"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            style={{ maxWidth: "200px" }}
          >
            <option value="">Select Price Range</option>
            <option value="low">Low ($0 - $10,000)</option>
            <option value="medium">Medium ($10,000 - $30,000)</option>
            <option value="high">High ($30,000+)</option>
          </select>

          {/* Search Input */}
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Your University"
            aria-label="Search"
            style={{ maxWidth: "500px", width: "400px" }}
          />

          {/* Search Button */}
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
