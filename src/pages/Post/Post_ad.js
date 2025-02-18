import React, { useState } from "react";
import "./PostAd.css";

const PostAd = () => {
  const [adTitle, setAdTitle] = useState("");
  const [adDescription, setAdDescription] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");
  const [price, setPrice] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [propertySize, setPropertySize] = useState("");
  const [amenities, setAmenities] = useState("");
  const [isFurnished, setIsFurnished] = useState(false); 
  const [images, setImages] = useState([]);
  const [postedAds, setPostedAds] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAd = {
      title: adTitle,
      description: adDescription,
      contact: contactInfo,
      from: fromDate,
      to: toDate,
      category,
      link,
      price,
      propertyType,
      location,
      bedrooms,
      bathrooms,
      propertySize,
      amenities,
      isFurnished,
      images,
    };
    console.log(newAd);
    setPostedAds((prevAds) => [...prevAds, newAd]);
    setAdTitle("");
    setAdDescription("");
    setContactInfo("");
    setFromDate("");
    setToDate("");
    setCategory("");
    setLink("");
    setPrice("");
    setPropertyType("");
    setLocation("");
    setBedrooms(1);
    setBathrooms(1);
    setPropertySize("");
    setAmenities("");
    setIsFurnished(false);
  };

  const handleImageChange = (event) => {
    setImages([...event.target.files]);
  };

  return (
    <div>
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
              placeholder="Enter a catchy title"
            />
          </div>
          <div className="post_ad-form-group">
            <label htmlFor="post_ad-description">Description:</label>
            <textarea
              id="post_ad-description"
              value={adDescription}
              onChange={(e) => setAdDescription(e.target.value)}
              required
              placeholder="Describe your property in detail"
            />
          </div>
          <div className="post_ad-form-group">
            <label htmlFor="post_ad-contact">Contact Information:</label>
            <input
              type="text"
              id="post_ad-contact"
              placeholder="Mobile number or contact details"
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
          <div
            className="post_ad-form-group"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <label htmlFor="post_ad-category">Category:</label>
            <div id="post_ad-property-type" className="custom-dropdown">
              {category || "Select Type"}
              {showDropdown && (
                <div className="dropdown-content">
                  <div onClick={() => setCategory("Residential")}>
                    Residential
                  </div>
                  <div onClick={() => setCategory("Commercial")}>
                    Commercial
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="post_ad-form-group">
            <label htmlFor="post_ad-link">Link:</label>
            <input
              type="text"
              id="post_ad-link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
              placeholder="Enter a relevant link if any"
            />
          </div>
          <div className="post_ad-form-group">
            <label htmlFor="post_ad-price">Price:</label>
            <input
              type="number"
              id="post_ad-price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              placeholder="Enter the price in USD"
            />
          </div>
          <div className="post_ad-form-group">
            <label htmlFor="post_ad-property-type">Property Type:</label>
            <select
              id="post_ad-property-type"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              required
            >
              <option value="">Select Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
            </select>
          </div>
          <div className="post_ad-form-group">
            <label htmlFor="post_ad-location">Location:</label>
            <input
              type="text"
              id="post_ad-location"
              placeholder="Address, City, State, Zip"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="post_ad-form-group">
            <label htmlFor="post_ad-bedrooms">Bedrooms:</label>
            <input
              type="number"
              id="post_ad-bedrooms"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              required
              placeholder="Number of bedrooms"
            />
          </div>
          <div className="post_ad-form-group">
            <label htmlFor="post_ad-bathrooms">Bathrooms:</label>
            <input
              type="number"
              id="post_ad-bathrooms"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              required
              placeholder="Number of bathrooms"
            />
          </div>
          <div className="post_ad-form-group">
            <label htmlFor="post_ad-property-size">Property Size:</label>
            <input
              type="text"
              id="post_ad-property-size"
              value={propertySize}
              onChange={(e) => setPropertySize(e.target.value)}
              required
              placeholder="e.g., 1200 sq. ft."
            />
          </div>
          <div className="post_ad-form-group">
            <label htmlFor="post_ad-amenities">Amenities:</label>
            <input
              type="text"
              id="post_ad-amenities"
              value={amenities}
              onChange={(e) => setAmenities(e.target.value)}
              required
              placeholder="List of amenities separated by commas"
            />
          </div>
          <div className="post_ad-form-group">
            <label htmlFor="post_ad-furnished">Is Furnished:</label>
            <input
              type="checkbox"
              id="post_ad-furnished"
              checked={isFurnished}
              onChange={(e) => setIsFurnished(e.target.checked)}
            />
          </div>
          <div className="post_ad-form-group">
            <label htmlFor="post_ad-images">Images:</label>
            <input
              type="file"
              id="post_ad-images"
              multiple
              onChange={handleImageChange}
            />
          </div>
          <button type="submit" className="post_ad-button">
            Submit Ad
          </button>
        </form>
      </div>
      <div className="post_ad-posted-ads-container">
        <h2>Posted Ads:</h2>
        <ul>
          {postedAds.map((ad, index) => (
            <li key={index}>
              <strong>Title:</strong> {ad.title}
              <br />
              <strong>Description:</strong> {ad.description}
              <br />
              <strong>Contact:</strong> {ad.contact}
              <br />
              <strong>From Date:</strong> {ad.from}
              <br />
              <strong>To Date:</strong> {ad.to}
              <br />
              <strong>Category:</strong> {ad.category}
              <br />
              <strong>Link:</strong>{" "}
              {ad.link ? (
                <a href={ad.link} target="_blank" rel="noopener noreferrer">
                  Click here
                </a>
              ) : (
                "N/A"
              )}
              <br />
              <strong>Price:</strong> {ad.price}
              <br />
              <strong>Property Type:</strong> {ad.propertyType}
              <br />
              <strong>Location:</strong> {ad.location}
              <br />
              <strong>Bedrooms:</strong> {ad.bedrooms}
              <br />
              <strong>Bathrooms:</strong> {ad.bathrooms}
              <br />
              <strong>Property Size:</strong> {ad.propertySize}
              <br />
              <strong>Amenities:</strong> {ad.amenities}
              <br />
              <strong>Is Furnished:</strong> {ad.isFurnished ? "Yes" : "No"}
              <br />
              <strong>Images:</strong>{" "}
              {ad.images.length > 0
                ? ad.images.map((image, i) => (
                    <img
                      key={i}
                      src={URL.createObjectURL(image)}
                      alt="Ad"
                      style={{ width: "100px", height: "100px" }}
                    />
                  ))
                : "No images uploaded"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostAd;
