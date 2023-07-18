import React from "react";
import axios from "axios";
import { useState } from "react";

const PropCard = (props) => {
  const { name, description, cost, area, estimated_emi , direction, apartment_type, no_of_bathrooms, parkingAvailable } = props.property;

  const handleApprove = () => {
    // Send an API request to update the property status as approved
    axios.put('/api/updatePropertyStatus', { put_prop_id: props.propertyData.id, status: 'approved' })
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        // Handle the error
      });
  };

  const handleDecline = () => {
    // Send an API request to delete the corresponding property
    axios.delete(`/api/deleteProperty/${props.propertyData.id}`)
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        // Handle the error
      });
  };
  
  const handleView = () => {
    
  };

  const data ={
    cookie: window.token
  };

  const [admin,setAdmin] = useState(false);

  axios
    .post('http://localhost:80/api/property/',data)
    .then(function(response){
      // console.log(response.data);
      if(response.data.status){
          setAdmin(true);
      }
    });


  return (
    <div className="prop-card">
      <div className="prop-card-field">
        <div className="prop-card-label">Name:</div>
        <div className="prop-card-value">{name}</div>
      </div>

      <div className="prop-card-field">
        <div className="prop-card-label">Description:</div>
        <div className="prop-card-value">{description}</div>
      </div>

      <div className="prop-card-field">
        <div className="prop-card-label">Cost:</div>
        <div className="prop-card-value">{cost}</div>
      </div>

      <div className="prop-card-field">
        <div className="prop-card-label">Area in sq ft:</div>
        <div className="prop-card-value">{area}</div>
      </div>

      <div className="prop-card-field">
        <div className="prop-card-label">Estimated EMI:</div>
        <div className="prop-card-value">{estimated_emi}</div>
      </div>

      <div className="prop-card-field">
        <div className="prop-card-label">Direction facing:</div>
        <div className="prop-card-value">{direction}</div>
      </div>

      <div className="prop-card-field">
        <div className="prop-card-label">Apartment Type:</div>
        <div className="prop-card-value">{apartment_type}</div>
      </div>

      <div className="prop-card-field">
        <div className="prop-card-label">No of Bathrooms:</div>
        <div className="prop-card-value">{no_of_bathrooms}</div>
      </div>

      <div className="prop-card-field">
        <div className="prop-card-label">Parking availability:</div>
        <div className="prop-card-value">{parkingAvailable ? "Yes" : "No"}</div>
      </div>

      <div>
        <button className="prop-card-button view-propcard-button" onClick={handleView}>
          View
        </button>
      </div>

      {/* Buttons */}
      {admin && (
        <div className="prop-card-buttons">
          <button className="prop-card-button approve-button" onClick={handleApprove}>
            Approve
          </button>
          <button className="prop-card-button decline-button" onClick={handleDecline}>
            Decline
          </button>
        </div>
      )}
      
    </div>
  );
};

export default PropCard;
