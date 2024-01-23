import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Post.css";

const Post = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const authToken = localStorage.getItem("auth");
  const handlePostButtonClick = () => {
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      property_name,
      price,
      deposit,
      address,
      offer,
      type,
      status,
      furnished,
      bhk,
      bedroom,
      bathroom,
      balcony,
      carpet,
      age,
      total_floors,
      room_floor,
      loan,
      description,
      lift,
      security_guard,
      play_ground,
      garden,
      water_supply,
      power_backup,
      parking_area,
      gym,
      shopping_mall,
      hospital,
      school,
      market_area,
    } = event.target.elements;

    const values = {
      property_name: property_name.value,
      price: price.value,
      deposit: deposit.value,
      address: address.value,
      offer: offer.value,
      type: type.value,
      status: status.value,
      furnished: furnished.value,
      bhk: bhk.value,
      bedroom: bedroom.value,
      bathroom: bathroom.value,
      balcony: balcony.value,
      carpet: carpet.value,
      age: age.value,
      total_floors: total_floors.value,
      room_floor: room_floor.value,
      loan: loan.value,
      description: description.value,
      lift: lift.checked ? "Yes" : "No",
      security_guard: security_guard.checked ? "Yes" : "No",
      play_ground: play_ground.checked ? "Yes" : "No",
      garden: garden.checked ? "Yes" : "No",
      water_supply: water_supply.checked ? "Yes" : "No",
      power_backup: power_backup.checked ? "Yes" : "No",
      parking_area: parking_area.checked ? "Yes" : "No",
      gym: gym.checked ? "Yes" : "No",
      shopping_mall: shopping_mall.checked ? "Yes" : "No",
      hospital: hospital.checked ? "Yes" : "No",
      school: school.checked ? "Yes" : "No",
      market_area: market_area.checked ? "Yes" : "No",
      page: "post",
      cookie: authToken,
    };

    if (
      !values.property_name ||
      !values.price ||
      !values.deposit ||
      !values.address ||
      !values.offer ||
      !values.type ||
      !values.status ||
      !values.furnished ||
      !values.bhk ||
      !values.bedroom ||
      !values.bathroom ||
      !values.balcony ||
      !values.carpet ||
      !values.age ||
      !values.total_floors ||
      !values.room_floor ||
      !values.loan ||
      !values.description
    ) {
      setError("Please fill in all the fields*");
      return;
    }
    axios
      // https://homeseekrapi2.onrender.com/login
      .post("https://homeseekrapi2.onrender.com/login", values)
      .then(function (response) {
        console.log(response);
        if (response.data.status) setIsSubmitted(true);
        else {
          alert("Error! Maybe Session expired, Try Logging in again!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="Warpper">
      {isSubmitted ? (
        <div className="submitted-prop-card">
          <h2>Property Submitted Successfully!</h2>
          <span className="prop-sub-message">
            You can find your posted property in Dashboard
          </span>
          <span>
            You can
            <button className="link" onClick={handlePostButtonClick}>
              Post
            </button>
            , or go to
            <Link className="link" to="/dashboard">
              Dashboard
            </Link>
          </span>
        </div>
      ) : (
        <div className="post-card">
          <form className="post-form" onSubmit={handleSubmit}>
            <div className="box">
              <p>
                Property name <span>*</span>
              </p>
              <input
                type="text"
                id="property_name"
                name="property_name"
                required
                maxLength="50"
                placeholder="Enter property name"
                className="input"
              />
            </div>
            <div className="flex">
              <div className="box">
                <p>
                  Property price <span>*</span>
                </p>
                <input
                  type="number"
                  id="price"
                  name="price"
                  required
                  min="0"
                  max="9999999999"
                  maxLength="10"
                  placeholder="Enter property price"
                  className="input"
                />
              </div>
              <div className="box">
                <p>
                  Deposit amount <span>*</span>
                </p>
                <input
                  type="number"
                  id="deposit"
                  name="deposit"
                  required
                  min="0"
                  max="9999999999"
                  maxLength="10"
                  placeholder="Enter deposit amount"
                  className="input"
                />
              </div>
              <div className="box">
                <p>
                  Property address <span>*</span>
                </p>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  maxLength="100"
                  placeholder="Enter property full address"
                  className="input"
                />
              </div>
              <div className="box">
                <p>
                  Offer type <span>*</span>
                </p>
                <select id="offer" name="offer" required className="input">
                  <option value="" selected>
                    Select Offer Type
                  </option>
                  <option value="sale">Sale</option>
                  <option value="rent">Rent</option>
                </select>
              </div>
              <div className="box">
                <p>
                  Property type <span>*</span>
                </p>
                <select id="type" name="type" required className="input">
                  <option value="" selected>
                    Select Property Type
                  </option>
                  <option value="flat">Flat</option>
                  {/* <option value="house">house</option>
                  <option value="shop">shop</option> */}
                </select>
              </div>
              <div className="box">
                <p>
                  Property status <span>*</span>
                </p>
                <select id="status" name="status" required className="input">
                  <option value="" selected>
                    Select Property Status
                  </option>
                  <option value="ready to move">Ready to move</option>
                  <option value="under construction">Under construction</option>
                </select>
              </div>
              <div className="box">
                <p>
                  Furnished status <span>*</span>
                </p>
                <select
                  id="furnished"
                  name="furnished"
                  required
                  className="input"
                >
                  <option value="" selected>
                    Select Furnished Status
                  </option>
                  <option value="furnished">Furnished</option>
                  <option value="semi-furnished">Semi-furnished</option>
                  <option value="unfurnished">Unfurnished</option>
                </select>
              </div>
              <div className="box">
                <p>
                  How many BHK <span>*</span>
                </p>
                <select id="bhk" name="bhk" required className="input">
                  <option value="" selected>
                    Select BHK
                  </option>
                  <option value="1">1 BHK</option>
                  <option value="2">2 BHK</option>
                  <option value="3">3 BHK</option>
                  <option value="4">4 BHK</option>
                  <option value="5">5 BHK</option>
                  <option value="6">6 BHK</option>
                  <option value="7">7 BHK</option>
                  <option value="8">8 BHK</option>
                  <option value="9">9 BHK</option>
                </select>
              </div>
              <div className="box">
                <p>
                  How many bedrooms <span>*</span>
                </p>
                <select id="bedroom" name="bedroom" required className="input">
                  <option value="" selected>
                    Select Number of Bedrooms
                  </option>
                  <option value="0">0 bedroom</option>
                  <option value="1">1 bedroom</option>
                  <option value="2">2 bedroom</option>
                  <option value="3">3 bedroom</option>
                  <option value="4">4 bedroom</option>
                  <option value="5">5 bedroom</option>
                  <option value="6">6 bedroom</option>
                  <option value="7">7 bedroom</option>
                  <option value="8">8 bedroom</option>
                  <option value="9">9 bedroom</option>
                </select>
              </div>
              <div className="box">
                <p>
                  How many bathrooms <span>*</span>
                </p>
                <select
                  id="bathroom"
                  name="bathroom"
                  required
                  className="input"
                >
                  <option value="" selected>
                    Select Number of Bathrooms
                  </option>
                  <option value="1">1 bathroom</option>
                  <option value="2">2 bathroom</option>
                  <option value="3">3 bathroom</option>
                  <option value="4">4 bathroom</option>
                  <option value="5">5 bathroom</option>
                  <option value="6">6 bathroom</option>
                  <option value="7">7 bathroom</option>
                  <option value="8">8 bathroom</option>
                  <option value="9">9 bathroom</option>
                </select>
              </div>
              <div className="box">
                <p>
                  How many balconies <span>*</span>
                </p>
                <select id="balcony" name="balcony" required className="input">
                  <option value="" selected>
                    Select Number of Balconies
                  </option>
                  <option value="0">0 balcony</option>
                  <option value="1">1 balcony</option>
                  <option value="2">2 balcony</option>
                  <option value="3">3 balcony</option>
                  <option value="4">4 balcony</option>
                  <option value="5">5 balcony</option>
                  <option value="6">6 balcony</option>
                  <option value="7">7 balcony</option>
                  <option value="8">8 balcony</option>
                  <option value="9">9 balcony</option>
                </select>
              </div>
              <div className="box">
                <p>
                  Carpet area <span>*</span>
                </p>
                <input
                  type="number"
                  id="carpet"
                  name="carpet"
                  required
                  min="1"
                  max="9999999999"
                  maxLength="10"
                  placeholder="How many square feet?"
                  className="input"
                />
              </div>
              <div className="box">
                <p>
                  Property age <span>*</span>
                </p>
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  min="0"
                  max="99"
                  maxLength="2"
                  placeholder="How old is the property?"
                  className="input"
                />
              </div>
              <div className="box">
                <p>
                  Total floors <span>*</span>
                </p>
                <input
                  type="number"
                  id="total_floors"
                  name="total_floors"
                  required
                  min="0"
                  max="99"
                  maxLength="2"
                  placeholder="How many floors available?"
                  className="input"
                />
              </div>
              <div className="box">
                <p>
                  Floor room <span>*</span>
                </p>
                <input
                  type="number"
                  id="room_floor"
                  name="room_floor"
                  required
                  min="0"
                  max="99"
                  maxLength="2"
                  placeholder="Property floor number"
                  className="input"
                />
              </div>
              <div className="box">
                <p>
                  Loan <span>*</span>
                </p>
                <select id="loan" name="loan" required className="input">
                  <option value="" selected>
                    Select Loan Availability
                  </option>
                  <option value="available">Available</option>
                  <option value="not available">Not available</option>
                </select>
              </div>
            </div>
            <div className="box">
              <p>
                Property description <span>*</span>
              </p>
              <textarea
                id="description"
                name="description"
                maxLength="1000"
                className="input"
                required
                cols="3"
                rows="3"
                placeholder="Your description about the property.."
              ></textarea>
            </div>
            <div className="checkbox">
              <label className="label-container">
                <p className="tick-title">
                  Lifts
                  <input type="checkbox" id="lift" name="lift" value="yes" />
                </p>
              </label>
              <label className="label-container">
                <p className="tick-title">
                  Security guard
                  <input
                    type="checkbox"
                    id="security_guard"
                    name="security_guard"
                    value="yes"
                  />
                </p>
              </label>
              <label className="label-container">
                <p className="tick-title">
                  Play ground
                  <input
                    type="checkbox"
                    id="play_ground"
                    name="play_ground"
                    value="yes"
                  />
                </p>
              </label>
              <label className="label-container">
                <p className="tick-title">
                  Garden
                  <input
                    type="checkbox"
                    id="garden"
                    name="garden"
                    value="yes"
                  />
                </p>
              </label>
              <label className="label-container">
                <p className="tick-title">
                  Water supply
                  <input
                    type="checkbox"
                    id="water_supply"
                    name="water_supply"
                    value="yes"
                  />
                </p>
              </label>
              <label className="label-container">
                <p className="tick-title">
                  Power backup
                  <input
                    type="checkbox"
                    id="power_backup"
                    name="power_backup"
                    value="yes"
                  />
                </p>
              </label>
              <label className="label-container">
                <p className="tick-title">
                  Parking area
                  <input
                    type="checkbox"
                    id="parking_area"
                    name="parking_area"
                    value="yes"
                  />
                </p>
              </label>
              <label className="label-container">
                <p className="tick-title">
                  Gym
                  <input type="checkbox" id="gym" name="gym" value="yes" />
                </p>
              </label>
              <label className="label-container">
                <p className="tick-title">
                  Shopping mall
                  <input
                    type="checkbox"
                    id="shopping_mall"
                    name="shopping_mall"
                    value="yes"
                  />
                </p>
              </label>
              <label className="label-container">
                <p className="tick-title">
                  Hospital
                  <input
                    type="checkbox"
                    id="hospital"
                    name="hospital"
                    value="yes"
                  />
                </p>
              </label>
              <label className="label-container">
                <p className="tick-title">
                  School
                  <input
                    type="checkbox"
                    id="school"
                    name="school"
                    value="yes"
                  />
                </p>
              </label>
              <label className="label-container">
                <p className="tick-title">
                  Market area
                  <input
                    type="checkbox"
                    id="market_area"
                    name="market_area"
                    value="yes"
                  />
                </p>
              </label>
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="post-button">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Post;
