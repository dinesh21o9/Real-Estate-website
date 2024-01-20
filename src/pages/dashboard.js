import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PropCard from "../components/PropCard";
import axios from "axios";
import { PuffLoader } from "react-spinners";
import "./dashboard.css";

const Dashboard = () => {
  const [prop, setProp] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProp();
  }, []);

  function getProp() {
    axios
      // https://homeseekrapi.000webhostapp.com/api/login/
      // http://homeseekrapi.000.pe/login/
      // http://localhost:80/api/login/
      // https://homeseekrapi2.onrender.com/login
      .get('https://homeseekrapi2.onrender.com/login')
      .then(function (response) {
        console.log(response.data);
        setProp(response.data);
        setLoading(false);
      });
  }

  return (
    <div>
      <Header />
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh", // Center vertically
          }}
        >
          <div className="loading-screen">
              <PuffLoader color={"#123abc"} size={60} loading={loading} />
              <span style={{color: '#6e82c4'}}>Loading...</span>
          </div>
        </div>
      ) : Array.isArray(prop) && prop.length > 0 ? (
        <div className="PropCard-field">
          {prop.map((property, key) => (
            <PropCard key={property.prop_id} property={property} />
          ))}
        </div>
      ) : (
        <div>
          <h1>That's all folks!<br></br> Wait for people to post properties!</h1>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
