import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PropCard from "../components/PropCard";
import axios from "axios";
import "./dashboard.css";

const Dashboard = () => {
  const [prop, setProp] = useState([]);

  useEffect(() => {
    getProp();
  }, []);

  function getProp() {
    axios
      .get('http://localhost:80/api/property/')
      .then(function (response) {
        console.log(response.data);
        setProp(response.data);
      });
  }

  return (
    <div>
      <Header />

      {/* <div className="FilterContainer">
      </div> */}

      {Array.isArray(prop) && prop.length > 0 ? (
        <div className="PropCard-field">
          {prop.map((property, key) => (
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
