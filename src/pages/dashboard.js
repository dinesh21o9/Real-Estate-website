import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PropCard from "../components/PropCard";
import axios from "axios";
import "./dashboard.css";

const Dashboard = () => {
  const [prop, setProp] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: "",
    location: "",
    parking: "",
    bhkType: "",
    propertyStatus: "",
  });

  useEffect(() => {
    getProp();
  }, []);

  function getProp() {
    axios.get('http://localhost:80/api/login/')

    .then(function (response) {
      console.log(response.data);
      setProp(response.data);
    });
  }

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const applyFilters = () => {
    const filteredProperties = prop.filter((property) => {
      let matchesFilter = true;
  
      if (filters.priceRange && property.priceRange !== filters.priceRange) {
        matchesFilter = false;
      }
  
      if (filters.location && property.location !== filters.location) {
        matchesFilter = false;
      }
  
      if (filters.parking.length > 0 && !filters.parking.includes(property.parking)) {
        matchesFilter = false;
      }
  
      if (filters.bhkType && property.bhkType !== filters.bhkType) {
        matchesFilter = false;
      }
  
      if (filters.propertyStatus && property.propertyStatus !== filters.propertyStatus) {
        matchesFilter = false;
      }
  
      return matchesFilter;
    });
  
    return filteredProperties;
  };
  

  const filteredProperties = applyFilters();

  return (
    <div>
      
      <Header />

      <div className="FilterContainer">
        <h2>Property Filters</h2>
        <label htmlFor="priceRange">Price Range:</label>
        <input
          type="range"
          id="priceRange"
          name="priceRange"
          min="0"
          max="10000000"
          step="1"
          value={filters.priceRange}
          onChange={handleFilterChange}
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
        />

        <label htmlFor="parking">Parking:</label>
        <input
          type="radio"
          id="parking-yes"
          name="parking"
          value="yes"
          checked={filters.parking === "yes"}
          onChange={handleFilterChange}
        />
        <label htmlFor="parking-yes">Yes</label>
        <input
          type="radio"
          id="parking-no"
          name="parking"
          value="no"
          checked={filters.parking === "no"}
          onChange={handleFilterChange}
        />
        <label htmlFor="parking-no">No</label>

        <label htmlFor="bhkType">BHK Type:</label>
        <select
          id="bhkType"
          name="bhkType"
          value={filters.bhkType}
          onChange={handleFilterChange}
        >
          <option value="">Any</option>
          <option value="1">1 BHK</option>
          <option value="2">2 BHK</option>
          <option value="3">3 BHK</option>
          <option value="4">4+ BHK</option>
        </select>

        <label htmlFor="propertyStatus">Property Status:</label>
        <input
          type="radio"
          id="propertyStatus-built"
          name="propertyStatus"
          value="built"
          checked={filters.propertyStatus === "built"}
          onChange={handleFilterChange}
        />
        <label htmlFor="propertyStatus-built">Built</label>
        <input
          type="radio"
          id="propertyStatus-underConstruction"
          name="propertyStatus"
          value="underConstruction"
          checked={filters.propertyStatus === "underConstruction"}
          onChange={handleFilterChange}
        />
        <label htmlFor="propertyStatus-underConstruction">
          Under Construction
        </label>
      </div>

      
      {filteredProperties.length > 0 ? (
        <div className="PropCard-field">
          {filteredProperties.map((property, key) => (
            <PropCard key={property.prop_id} property={property} />
          ))}
        </div>
        ) : (
        <div className="nothing-box">
          <h1>That's all folks!<br></br> Wait for people to post properties!</h1>
        </div>
        )}
    </div>
  );
};

export default Dashboard;
