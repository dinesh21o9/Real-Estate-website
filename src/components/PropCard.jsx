import React from "react";
import axios from "axios";
import { useState } from "react";
// import { useHistory } from 'react-router-dom';

const PropCard = (props) => {
  const {
    address,
    admin_id,
    age,
    balcony,
    bathroom,
    bedroom,
    bhk,
    carpet,
    deposite, // Updated field name
    description,
    furnished, // Updated field name
    garden,
    gym,
    hospital,
    lift,
    loan,
    market_area,
    offer,
    parking_area,
    play_ground,
    power_backup,
    price,
    prop_id,
    property_name,
    room_floor,
    school,
    security_guard,
    shopping_mall,
    status,
    total_floors,
    type,
    user_id,
    user_name,
    water_supply,
  } = props.property;

  const handleApprove = () => {
    // Send an API request to update the property status as approved
    axios
      .put('/api/updatePropertyStatus', { put_prop_id: prop_id, status: 'approved' }) // Use prop_id directly
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        // Handle the error
      });
  };

  const handleDecline = () => {
    // Send an API request to delete the corresponding property
    axios
      .delete(`/api/deleteProperty/${prop_id}`) // Use prop_id directly
      .then(response => {
        // Handle the response
      })
      .catch(error => {
        // Handle the error
      });
  };

  const handleView = () => {
    // const history = useHistory();

    // Redirect to the "ViewProp" component/page and pass `prop_id` as a URL parameter
    // history.push(`/viewProp/${prop_id}`);
  };

  const data = {
    cookie: window.token,
  };

  const [admin, setAdmin] = useState(false);

  axios
    .post('http://localhost:80/api/property/', data)
    .then(function (response) {
      // console.log(response.data);
      if (response.data.status) {
        setAdmin(true);
      }
    });

  return (
    <div className="prop-card">
      <div className="prop-card-field">
        <div className="prop-card-label">Name:</div>
        <div className="prop-card-value">{property_name}</div> 
      </div>

      <div className="prop-card-field">
        <div className="prop-card-label">Address:</div>
        <div className="prop-card-value">{address}</div>
      </div>

      <div className="prop-card-field">
        <div className="prop-card-label">Description:</div>
        <div className="prop-card-value">{description}</div>
      </div>

      <div className="prop-card-field">
        <div className="prop-card-label">Cost:</div>
        <div className="prop-card-value">{price}</div>
      </div>

      <div className="prop-card-field">
        <div className="prop-card-label">Area in sq ft:</div>
        <div className="prop-card-value">{carpet}</div> 
      </div>

      <div className="prop-card-field">
        <div className="prop-card-label">BHK:</div>
        <div className="prop-card-value">{bhk}</div>
      </div>

      <div className="prop-card-field">
        <div className="prop-card-label">No of Bathrooms:</div>
        <div className="prop-card-value">{bathroom}</div>
      </div>

      <div className="prop-card-field">
        <div className="prop-card-label">Parking availability:</div>
        <div className="prop-card-value">{parking_area ? "Yes" : "No"}</div>
      </div>

      {/* Buttons */}
      <div>
        <button className="prop-card-button view-propcard-button" onClick={handleView}>
          View
        </button>
      </div>

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
