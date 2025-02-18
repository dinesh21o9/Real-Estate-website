import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const PropCard = ({ property, properties, setProperties }) => {
  const {
    // rent,
    offer,
    address,
    bathroom,
    bhk,
    carpet,
    description,
    parking_area,
    price,
    prop_id,
    editAccess,
    property_name,
  } = property;

  // const handleEdit = () => {
  //   // Send an API request to update the property status as approved
  //   axios
  //     .put('/api/property', { put_prop_id: prop_id, status: 'approved' }) 
  //     .then(response => {
  //       
  //     })
  //     .catch(error => {
  //       
  //     });
  // };

  const handleDelete = () => {
  axios
    .delete(`https://homeseekrapi2.onrender.com/login/?prop_id=${prop_id}`)
    .then(response => {
      console.log("Property deleted successfully");
      setProperties(prevProperties => prevProperties.filter(item => item.prop_id !== prop_id));
    })
    .catch(error => {
      console.error("Error deleting property:", error);
    });
};

  const navigate = useNavigate();

  const handleView = (offer, prop_id) => {
    if(!localStorage.auth){
      navigate(`/loginout`);
    }else
      navigate(`/viewProp/${offer}/${prop_id}`);
  };

  return (
    <div className="prop-card">
      {offer === "sale" && (
      <div>
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
      </div>
      )}
      {offer === "rent" && (
      <div>
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

        {/* <div className="prop-card-field">
          <div className="prop-card-label">Rent:</div>
          <div className="prop-card-value">{rent}</div>
        </div> */}

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
      </div>
      )}

      {/* Buttons */}
      <div>
        <button className="prop-card-button view-propcard-button" onClick={() => handleView(offer, prop_id)}>
          View
        </button>
      </div>
      {editAccess && (
        <div className="prop-card-buttons">
          {/* <button className="prop-card-button approve-button" onClick={handleEdit}>
            Edit
          </button> */}
          <button className="prop-card-button decline-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
       )}
    </div>
  );
};

export default PropCard;
