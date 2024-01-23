import React, { useEffect, useState } from "react";
import PropCard from "../components/PropCard";
import axios from "axios";
import { PuffLoader } from "react-spinners";
import "./dashboard.css";

const Dashboard = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const authToken = localStorage.getItem("auth");
  const data = {
    cookie: authToken,
    page: "dashboard",
  };

  function getProp() {
    axios
      // https://homeseekrapi.000webhostapp.com/api/login/
      // http://homeseekrapi.000.pe/login/
      // http://localhost:80/api/login/
      // https://homeseekrapi2.onrender.com/login
      .post("https://homeseekrapi2.onrender.com/login", data)
      .then(function (response) {
        console.log(response.data);
        setProperties(response.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    getProp();
  }, []);

  return (
    <div>
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
            <span style={{ color: "#6e82c4" }}>Loading...</span>
          </div>
        </div>
      ) : Array.isArray(properties) && properties.length > 0 ? (
        <div className="PropCard-field">
          {properties.map((property, key) => (
            <PropCard
              key={property.prop_id}
              property={property}
              properties={properties}
              setProperties={setProperties}
            />
          ))}
        </div>
      ) : (
        <div>
          <h1>
            That's all folks!<br></br> Wait for people to post properties!
          </h1>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
