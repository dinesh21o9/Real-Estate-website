import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from 'react-router-dom';
import "./view_prop.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";

const ViewProp = () => {
  const [property, setProperty] = useState({});
  const [user, setUser] = useState({});
  const [isSaved, setIsSaved] = useState(false);
  
  //Used to get offer and prop_id which are in link
  const { offer, prop_id } = useParams();

  useEffect(() => {
    getProperty(prop_id,offer);
  }, [prop_id,offer]);

  const getProperty = (propId, offer) => {
    axios
      .post("http://localhost:80/api/property/", {
        prop_id: propId,
        offer: offer,
        page: 'viewProp',
      })
      .then((response) => {
        console.log(response.data);
        setProperty(response.data);
      })
      .catch((error) => {
        console.error("Error fetching property data:", error);
      });

    // Fake data
    // const dummyProperty = {
    //   prop_id: 2,
    //   property_name: "Adi emrald homes",
    //   address: "Jubliee hills, hyderabad",
    //   price: " 2,00,000/-",
    //   type: "Apartment",
    //   offer: "Rent",
    //   date: "15-07-2023",
    //   bhk: 3,
    //   deposite: " 10,000/-",
    //   status: "Constructed",
    //   bedroom: 3,
    //   bathroom: 2,
    //   balcony: 1,
    //   carpet: 1500,
    //   age: 5,
    //   total_floors: 10,
    //   room_floor: 5,
    //   furnished: "Yes",
    //   loan: "Yes",
    //   lift: "Yes",
    //   security_guard: "No",
    //   play_ground: "Yes",
    //   garden: "No",
    //   water_supply: "Yes",
    //   power_backup: "No",
    //   parking_area: "Yes",
    //   gym: "No",
    //   shopping_mall: "Yes",
    //   hospital: "No",
    //   school: "Yes",
    //   market_area: "No",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    // };

    const dummyUser = {
      user_id: 1,
      name: " Dinesh surya",
      number: " 8121400482",
    };

    // setProperty(dummyProperty);
    setUser(dummyUser);
    setIsSaved(false);

  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div>

      <Header />

      {property && (
        <section className="view-property">
          <h1 className="heading">Property Details</h1>
          <div className="details">
            <h3 className="name">{property.property_name}</h3>
            <p className="location">
              <i className="fa fa-map-marker-alt"></i>
              <span>{property.address}</span>
            </p>
            <div className="info">
              <p>
                <i className="fa fa-indian-rupee-sign"></i>
                <span>{property.price}</span>
              </p>
              {user && (
                <>
                  <p>
                    <i className="fa fa-user"></i>
                    <span>{user.name}</span>
                  </p>
                  <p>
                    <i className="fa fa-phone"></i>
                    <a href={`tel:${user.number}`}>{user.number}</a>
                  </p>
                </>
              )}
              <p>
                <i className="fa fa-building"></i>
                <span>{property.type}</span>
              </p>
              <p>
                <i className="fa fa-house"></i>
                <span>{property.offer}</span>
              </p>
              <p>
                <i className="fa fa-calendar"></i>
                <span>{property.date}</span>
              </p>
            </div>
            <h3 className="title">Details</h3>
            <div className="flex">
              <div className="box">
                <p>
                  <i>Rooms:</i>
                  <span>{property.bhk} BHK</span>
                </p>
                <p>
                  <i>Deposit Amount:</i>
                  <span>
                    <span className="fa fa-indian-rupee-sign" style={{ marginRight: ".5rem" }}></span>
                    {property.deposite}
                  </span>
                </p>
                <p>
                  <i>Status:</i>
                  <span>{property.status}</span>
                </p>
                <p>
                  <i>Bedroom:</i>
                  <span>{property.bedroom}</span>
                </p>
                <p>
                  <i>Bathroom:</i>
                  <span>{property.bathroom}</span>
                </p>
                <p>
                  <i>Balcony:</i>
                  <span>{property.balcony}</span>
                </p>
              </div>
              <div className="box">
                <p>
                  <i>Carpet Area:</i>
                  <span>{property.carpet} sqft</span>
                </p>
                <p>
                  <i>Age:</i>
                  <span>{property.age} years</span>
                </p>
                <p>
                  <i>Total Floors:</i>
                  <span>{property.total_floors}</span>
                </p>
                <p>
                  <i>Room Floor:</i>
                  <span>{property.room_floor}</span>
                </p>
                <p>
                  <i>Furnished:</i>
                  <span>{property.furnished}</span>
                </p>
                <p>
                  <i>Loan:</i>
                  <span>{property.loan}</span>
                </p>
              </div>
            </div>
            <h3 className="title">Amenities</h3>
            <div className="flex">
              <div className="box">
                <p>
                  <span>Lifts</span>
                  <i className={`fa ${property.lift === "Yes" ? "fa-check" : "fa-times"}`}></i>
                </p>
                <p>
                  <span>Security Guards</span>
                  <i className={`fa ${property.security_guard === "Yes" ? "fa-check" : "fa-times"}`}></i>
                </p>
                <p>
                  <span>Play Ground</span>
                  <i className={`fa ${property.play_ground === "Yes" ? "fa-check" : "fa-times"}`}></i>
                </p>
                <p>
                  <span>Gardens</span>
                  <i className={`fa ${property.garden === "Yes" ? "fa-check" : "fa-times"}`}></i>
                </p>
                <p>
                  <span>Water Supply</span>
                  <i className={`fa ${property.water_supply === "Yes" ? "fa-check" : "fa-times"}`}></i>
                </p>
                <p>
                  <span>Power Backup</span>
                  <i className={`fa ${property.power_backup === "Yes" ? "fa-check" : "fa-times"}`}></i>
                </p>
              </div>
              <div className="box">
                <p>
                  <span>Parking Area</span>
                  <i className={`fa ${property.parking_area === "Yes" ? "fa-check" : "fa-times"}`}></i>
                </p>
                <p>
                  <span>Gym</span>
                  <i className={`fa ${property.gym === "Yes" ? "fa-check" : "fa-times"}`}></i>
                </p>
                <p>
                  <span>Shopping Mall</span>
                  <i className={`fa ${property.shopping_mall === "Yes" ? "fa-check" : "fa-times"}`}></i>
                </p>
                <p>
                  <span>Hospital</span>
                  <i className={`fa ${property.hospital === "Yes" ? "fa-check" : "fa-times"}`}></i>
                </p>
                <p>
                  <span>Schools</span>
                  <i className={`fa ${property.school === "Yes" ? "fa-check" : "fa-times"}`}></i>
                </p>
                <p>
                  <span>Market Area</span>
                  <i className={`fa ${property.market_area === "Yes" ? "fa-check" : "fa-times"}`}></i>
                </p>
              </div>
            </div>
            <h3 className="title">Description</h3>
            <p className="description">{property.description}</p>
            <form className="flex-btn">
              <input type="hidden" name="property_id" value={property.id} />
              <button type="button" onClick={handleSave} className={`save ${isSaved ? "saved" : ""}`}>
                {/* <i className={`fa ${isSaved ? "fa-heart" : "fa-heart"}`}></i> */}
                <span>{isSaved ? "Saved" : "Save"}</span>
              </button>
              <button type="button" onClick={handleSave} className="view_prop_btn">
                Contact the seller
              </button>
            </form>
          </div>
        </section>
      )}
    </div>
  );
};

export default ViewProp;
