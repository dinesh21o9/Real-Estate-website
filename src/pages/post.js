import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Post.css";

const Post = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      name,
      description,
      cost,
      area,
      estimated_emi,
      direction,
      apartment_type,
      no_of_bathrooms,
      parking_available,
    } = event.target.elements;

    const values = {
      cookie: window.token,
      name: name.value,
      description: description.value,
      cost: cost.value,
      area: area.value,
      estimated_emi: estimated_emi.value,
      direction: direction.value,
      apartment_type: apartment_type.value,
      no_of_bathrooms: no_of_bathrooms.value,
      parking_available: parking_available.checked,
    };

    if (
      !values.name ||
      !values.description ||
      !values.cost ||
      !values.area ||
      !values.direction ||
      !values.apartment_type ||
      !values.no_of_bathrooms
    ) {
      setError("Please fill in all the fields*");
      return;
    }

    axios
      .post("http://localhost:80/api/property/", values)
      .then(function (response) {
        // console.log(response);
        if(response.data.status)
          setIsSubmitted(true);
        else{
          alert("Session expired! Login again!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("An error occurred. Please try again later.");
      });
  };

  return (
    <div>
      <Header />

      {isSubmitted ? (
        <div>
          <h2>Property Submitted Successfully!</h2>
          <span className="prop-sub-message">
            Kindly wait till Admins approve your Property Post!
          </span>
          <span>You can post another Property </span><h2>Property Submitted Successfully!</h2>
          <span className="prop-sub-message">
            Kindly wait till Admins approve your Property Post!
          </span>
          <span>You can post another Property </span>
        </div>
      ) : (
        <div className="post-card">
          <form onSubmit={handleSubmit}>

            <div className="post-form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>

            <div className="post-form-group">
              <label htmlFor="description">Description</label>
              <input type="text" id="description" name="description" />
            </div>

            <div className="post-form-group">
              <label htmlFor="cost">Cost</label>
              <input type="number" id="cost" name="cost" />
            </div>

            <div className="post-form-group">
              <label htmlFor="area">Area in sq ft</label>
              <input type="number" id="area" name="area" />
            </div>

            <div className="post-form-group">
              <label htmlFor="estimated_emi">Estimated EMI</label>
              <input type="number" id="estimated_emi" name="estimated_emi" />
            </div>

            <div className="post-form-group">
              <label htmlFor="direction">Direction facing</label>
              <select id="direction" name="direction">
                <option value="">Select Direction</option>
                <option value="North">North</option>
                <option value="East">East</option>
                <option value="West">West</option>
                <option value="South">South</option>
              </select>
            </div>

            <div className="post-form-group">
              <label htmlFor="apartment_type">Apartment type</label>
              <select id="apartment_type" name="apartment_type">
                <option value="">Select Apartment Type</option>
                <option value="3 BHK">3 BHK</option>
                <option value="2 BHK">2 BHK</option>
                <option value="1 BHK">1 BHK</option>
              </select>
            </div>

            <div className="post-form-group">
              <label htmlFor="no_of_bathrooms">No of Bathrooms</label>
              <input type="number" id="no_of_bathrooms" name="no_of_bathrooms" />
            </div>

            <div className="post-form-group post-checkbox">
              <label htmlFor="parking_available">Parking available</label>
              <input type="checkbox" id="parking_available" name="parking_available" />
            </div>

            {error && <p className="error">{error}</p>}
            <button type="submit" className="post-button">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Post;
