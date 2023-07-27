import React, { useState } from "react";
import Header from "../components/Header";
import "./PostAd.css"; // Create a separate CSS file for styling

const PostAd = () => {
  // State to store ad details
  const [adTitle, setAdTitle] = useState("");
  const [adDescription, setAdDescription] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [postedAds, setPostedAds] = useState([]);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new ad object with the submitted details
    const newAd = {
      title: adTitle,
      description: adDescription,
      contact: contactInfo,
      from: fromDate,
      to: toDate,
    };

    // Update the list of posted ads with the new ad
    setPostedAds((prevAds) => [...prevAds, newAd]);

    // Clear form fields after submission
    setAdTitle("");
    setAdDescription("");
    setContactInfo("");
    setFromDate("");
    setToDate("");
  };

  return (
    <div>
      <Header />

      <div className="post_ad-container">
        <h1>Post an Ad</h1>
        <form onSubmit={handleSubmit}>
          <div className="post_ad-form-group">
            <label htmlFor="post_ad-title">Title:</label>
            <input
              type="text"
              id="post_ad-title"
              value={adTitle}
              onChange={(e) => setAdTitle(e.target.value)}
              required
            />
          </div>

          <div className="post_ad-form-group">
            <label htmlFor="post_ad-description">Description:</label>
            <textarea
              id="post_ad-description"
              value={adDescription}
              onChange={(e) => setAdDescription(e.target.value)}
              required
            />
          </div>

          <div className="post_ad-form-group">
            <label htmlFor="post_ad-contact">Contact Information:</label>
            <input
              type="text"
              id="post_ad-contact"
              placeholder="Mobile number"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              required
            />
          </div>

          <div className="post_ad-form-group">
            <label htmlFor="post_ad-from-date">From Date:</label>
            <input
              type="date"
              id="post_ad-from-date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              required
            />
          </div>

          <div className="post_ad-form-group">
            <label htmlFor="post_ad-to-date">To Date:</label>
            <input
              type="date"
              id="post_ad-to-date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              required
            />
          </div>

          {/* Additional input fields you can include */}
          {/* For example, an input field for the ad category */}
          <div className="post_ad-form-group">
            <label htmlFor="post_ad-category">Category:</label>
            <input
              type="text"
              id="post_ad-category"
              /* Add the appropriate state and onChange handler */
              required
            />
          </div>
          <div className="post_ad-form-group">
            <label htmlFor="post_ad-category">Link:</label>
            <input
              type="text"
              id="post_ad-link"
              /* Add the appropriate state and onChange handler */
              required
            />
          </div>

          {/* Another example, an input field for the ad price */}
          <div className="post_ad-form-group">
            <label htmlFor="post_ad-price">Price:</label>
            <input
              type="number"
              id="post_ad-price"
              /* Add the appropriate state and onChange handler */
              required
            />
          </div>

          <button type="submit">Submit Ad</button>
        </form>
      </div>

      <div className="post_ad-posted-ads-container">
        <h2>Posted Ads:</h2>
        <ul>
          {postedAds.map((ad, index) => (
            <li key={index}>
              <strong>{ad.title}</strong>
              <br />
              {ad.description}
              <br />
              Contact: {ad.contact}
              <br />
              From: {ad.from} - To: {ad.to}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostAd;
