import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import DynamicFields from "../components/Dynamic_input";
import "./Post.css";


const Post = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [selectedOffer, setSelectedOffer] =useState("");

  const saleFields = [
    { type: 'number', label: 'Property price', name: 'price', required: true, min: 0, max: 9999999999, maxLength: 10, placeholder: 'Enter property price' },
    { type: 'number', label: 'Deposit amount', name: 'deposit', required: true, min: 0, max: 9999999999, maxLength: 10, placeholder: 'Enter deposit amount' },
    { type: 'text', label: 'Property address', name: 'address', required: true, maxLength: 100, placeholder: 'Enter property full address' },
    { type: 'select', label: 'Property type', name: 'type', required: true, options: [
      { value: '', label: 'Select Property Type' },
      { value: 'flat', label: 'Flat' },
      { value: 'house', label: 'House' },
      { value: 'shop', label: 'Shop' },
    ]},
    { type: 'select', label: 'Property status', name: 'status', required: true, options: [
      { value: '', label: 'Select Property Status' },
      { value: 'ready to move', label: 'Ready to move' },
      { value: 'under construction', label: 'Under construction' },
    ]},
    { type: 'select', label: 'Furnished status', name: 'furnished', required: true, options: [
      { value: '', label: 'Select Furnished Status' },
      { value: 'furnished', label: 'Furnished' },
      { value: 'semi-furnished', label: 'Semi-furnished' },
      { value: 'unfurnished', label: 'Unfurnished' },
    ]},
    { type: 'select', label: 'How many BHK', name: 'bhk', required: true, options: [
      { value: '', label: 'Select BHK' },
      { value: '1', label: '1 BHK' },
      { value: '2', label: '2 BHK' },
      { value: '3', label: '3 BHK' },
      { value: '4', label: '4 BHK' },
      { value: '5', label: '5 BHK' },
    ]},
    { type: 'select', label: 'How many bedrooms', name: 'bedroom', required: true, options: [
      { value: '', label: 'Select Number of Bedrooms' },
      { value: '0', label: '0 bedroom' },
      { value: '1', label: '1 bedroom' },
      { value: '2', label: '2 bedrooms' },
      { value: '3', label: '3 bedrooms' },
      { value: '4', label: '4 bedrooms' },
      { value: '5', label: '5 bedrooms' },
    ]},
    { type: 'select', label: 'How many bathrooms', name: 'bathroom', required: true, options: [
      { value: '', label: 'Select Number of Bathrooms' },
      { value: '1', label: '1 bathroom' },
      { value: '2', label: '2 bathrooms' },
      { value: '3', label: '3 bathrooms' },
      { value: '4', label: '4 bathrooms' },
      { value: '5', label: '5 bathrooms' },
    ]},
    { type: 'select', label: 'How many balconies', name: 'balcony', required: true, options: [
      { value: '', label: 'Select Number of Balconies' },
      { value: '0', label: '0 balcony' },
      { value: '1', label: '1 balcony' },
      { value: '2', label: '2 balconies' },
      { value: '3', label: '3 balconies' },
      { value: '4', label: '4 balconies' },
      { value: '5', label: '5 balconies' },
    ]},
    { type: 'number', label: 'Carpet area', name: 'carpet', required: true, min: 1, max: 9999999999, maxLength: 10, placeholder: 'How many square feet?' },
    { type: 'number', label: 'Property age', name: 'age', required: true, min: 0, max: 99, maxLength: 2, placeholder: 'How old is the property?' },
    { type: 'number', label: 'Total floors', name: 'total_floors', required: true, min: 0, max: 99, maxLength: 2, placeholder: 'How many floors available?' },
    { type: 'number', label: 'Floor room', name: 'room_floor', required: true, min: 0, max: 99, maxLength: 2, placeholder: 'Property floor number' },
    { type: 'select', label: 'Loan', name: 'loan', required: true, options: [
      { value: '', label: 'Select Loan Availability' },
      { value: 'available', label: 'Available' },
      { value: 'not available', label: 'Not available' },
    ]},
    { type: 'checkbox', label: 'Lifts', name: 'lift', value: 'No' },
    { type: 'checkbox', label: 'Security guard', name: 'security_guard', value: 'No' },
    { type: 'checkbox', label: 'Play ground', name: 'play_ground', value: 'No' },
    { type: 'checkbox', label: 'Garden', name: 'garden', value: 'No' },
    { type: 'checkbox', label: 'Water supply', name: 'water_supply', value: 'No' },
    { type: 'checkbox', label: 'Power backup', name: 'power_backup', value: 'No' },
    { type: 'checkbox', label: 'Parking area', name: 'parking_area', value: 'No' },
    { type: 'checkbox', label: 'Gym', name: 'gym', value: 'No' },
    { type: 'checkbox', label: 'Shopping mall', name: 'shopping_mall', value: 'No' },
    { type: 'checkbox', label: 'Hospital', name: 'hospital', value: 'No' },
    { type: 'checkbox', label: 'School', name: 'school', value: 'No' },
    { type: 'checkbox', label: 'Market area', name: 'market_area', value: 'No' },
  ];

  const rentFields = [
    { type: 'number', label: 'Rent', name: 'rent', required: true, min: 0, max: 9999999999, maxLength: 10, placeholder: 'Enter Rent per month' },
    { type: 'number', label: 'Security Deposit', name: 'security_deposit', required: true, min: 0, max: 9999999999, maxLength: 10, placeholder: 'Enter Security deposit amount' },
    { type: 'text', label: 'Address', name: 'address', required: true, maxLength: 100, placeholder: 'Enter property full address' },
    { type: 'select', label: 'Property Type', name: 'type', required: true, options: [
      { value: '', label: 'Select Property Type' },
      { value: 'flat', label: 'Flat' },
      { value: 'house', label: 'House' },
      { value: 'shop', label: 'Shop' },
    ]},
    { type: 'select', label: 'Status', name: 'status', required: true, options: [
      { value: '', label: 'Select Property Status' },
      { value: 'ready to move', label: 'Ready to move' },
      { value: 'under construction', label: 'Under construction' },
    ]},
    { type: 'select', label: 'Furnished Status', name: 'furnished', required: true, options: [
      { value: '', label: 'Select Furnished Status' },
      { value: 'furnished', label: 'Furnished' },
      { value: 'semi-furnished', label: 'Semi-furnished' },
      { value: 'unfurnished', label: 'Unfurnished' },
    ]},
    { type: 'select', label: 'How many BHK', name: 'bhk', required: true, options: [
      { value: '', label: 'Select BHK' },
      { value: '1', label: '1 BHK' },
      { value: '2', label: '2 BHK' },
      { value: '3', label: '3 BHK' },
      { value: '4', label: '4 BHK' },
      { value: '5', label: '5 BHK' },
    ]},
    { type: 'select', label: 'How many bedrooms', name: 'bedroom', required: true, options: [
      { value: '', label: 'Select Number of Bedrooms' },
      { value: '0', label: '0 bedroom' },
      { value: '1', label: '1 bedroom' },
      { value: '2', label: '2 bedrooms' },
      { value: '3', label: '3 bedrooms' },
      { value: '4', label: '4 bedrooms' },
      { value: '5', label: '5 bedrooms' },
    ]},
    { type: 'select', label: 'How many bathrooms', name: 'bathroom', required: true, options: [
      { value: '', label: 'Select Number of Bathrooms' },
      { value: '1', label: '1 bathroom' },
      { value: '2', label: '2 bathrooms' },
      { value: '3', label: '3 bathrooms' },
      { value: '4', label: '4 bathrooms' },
      { value: '5', label: '5 bathrooms' },
    ]},
    { type: 'select', label: 'How many balconies', name: 'balcony', required: true, options: [
      { value: '', label: 'Select Number of Balconies' },
      { value: '0', label: '0 balcony' },
      { value: '1', label: '1 balcony' },
      { value: '2', label: '2 balconies' },
      { value: '3', label: '3 balconies' },
      { value: '4', label: '4 balconies' },
      { value: '5', label: '5 balconies' },
    ]},
    { type: 'number', label: 'Carpet Area', name: 'carpet', required: true, min: 1, max: 9999999999, maxLength: 10, placeholder: 'How many square feet?' },
    { type: 'number', label: 'Property Age', name: 'age', required: true, min: 0, max: 99, maxLength: 2, placeholder: 'How old is the property?' },
    { type: 'number', label: 'Total Floors', name: 'total_floors', required: true, min: 0, max: 99, maxLength: 2, placeholder: 'How many floors available?' },
    { type: 'number', label: 'Floor Room', name: 'room_floor', required: true, min: 0, max: 99, maxLength: 2, placeholder: 'Property floor number' },
    
    { type: 'checkbox', label: 'Lifts', name: 'lift' },
    { type: 'checkbox', label: 'Security Guard', name: 'security_guard' },
    { type: 'checkbox', label: 'Play Ground', name: 'play_ground' },
    { type: 'checkbox', label: 'Garden', name: 'garden' },
    { type: 'checkbox', label: 'Water Supply', name: 'water_supply' },
    { type: 'checkbox', label: 'Power Backup', name: 'power_backup' },
    { type: 'checkbox', label: 'Parking Area', name: 'parking_area' },
    { type: 'checkbox', label: 'Gym', name: 'gym' },
    { type: 'checkbox', label: 'Shopping Mall', name: 'shopping_mall' },
    { type: 'checkbox', label: 'Hospital', name: 'hospital' },
    { type: 'checkbox', label: 'School', name: 'school' },
    { type: 'checkbox', label: 'Market Area', name: 'market_area' },
  ];
  
  const offerFields = {
    rent: rentFields,
    sale: saleFields
  };
  
  const selectedFields = offerFields[selectedOffer];

  const handleOfferChange = (e) =>{
    setSelectedOffer(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const values = {
      cookie: window.token,
      page: "post",
      offer: selectedOffer,
    };

    const fields = offerFields[selectedOffer]; 

    for (const field of fields) {
      if (field.name) {
        values[field.name] = event.target.elements[field.name].value;
      }
    }
    
    values['property_name'] = event.target.elements['property_name'].value;
    values['description'] = event.target.elements['description'].value;

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Iterate over each checkbox and set its value to "Yes" or "No" based on whether it is checked or not
    checkboxes.forEach((checkbox) => {
      values[checkbox.name] = checkbox.checked ? "Yes" : "No";
    });
    const requiredFields = fields.filter((field) => field.required);

    if (requiredFields.some((field) => !values[field.name])) {
      setError("Please fill in all the fields*");
      return;
    }
    
    // console.log(values);

    axios
      .post("http://localhost:80/api/property/", values)
      .then(function (response) {
        // console.log(response);
        if (response.data.status) setIsSubmitted(true);
        else {
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
        <div className="submitted-prop-card">
          <h2>Property Submitted Successfully!</h2>
          <span className="prop-sub-message">
            Kindly wait till Admins approve your Property Post!
          </span>
          <span>You can now<Link class="link" to="/post">Post</Link> or go to<Link class="link" to="/dashboard">Dashboard</Link></span>
        </div>
      ) : (
        <div className="post-card">
          <form className="post-form" onSubmit={handleSubmit}>

            <div className="box">
              <p>Property name <span>*</span></p>
              <input type="text" name="property_name" required maxLength="50" placeholder="Enter property name" className="input" />
              <p>Offer type <span>*</span></p>
                <select name="offer" value={selectedOffer} onChange={handleOfferChange} required className="input" >
                  <option value="" selected>Select Offer Type</option>
                  <option value="sale">Sale</option>
                  <option value="rent">Rent</option>
                </select>
            </div>

            {selectedOffer === 'sale' && (
              <div>
                {/* Structure for CSS in future */}
                {/* 
                <div className="flex">
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                  ...
                </div>

                <div className="checkbox">

                  <div className="box">
                    //should have 
                    <label>
                        <p>Parking area<input type="checkbox" name="parking_area" value="yes" /></p>
                    </label>
                    <label>
                        <p>Gym<input type="checkbox" name="gym" value="yes" /></p>
                    </label>
                    ...
                  </div>
                  <div className="box">
                    //should have
                    <label>
                        <p>Shopping mall<input type="checkbox" name="shopping_mall" value="yes" /></p>
                    </label>
                    <label>
                        <p>Hospital<input type="checkbox" name="hospital" value="yes" /></p>
                    </label>
                    ...
                  </div>

                </div> 
                */}
                <DynamicFields fields={saleFields}  />
              </div>
            )}

            {selectedOffer === 'rent' && (
              <div>
                  <DynamicFields fields={selectedFields} />
              </div>
            )}

            
                        

            <div className="box">
              <p>Description <span>*</span></p>
              <textarea name="description" maxLength="1000" className="input" required cols="3" rows="3" placeholder="Your description about the property.."></textarea>
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



