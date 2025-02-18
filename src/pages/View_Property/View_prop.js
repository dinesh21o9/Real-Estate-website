import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import "./View_prop.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import { PuffLoader } from "react-spinners";

const ViewProp = () => {
  const [property, setProperty] = useState({});
  const [user, setUser] = useState({});
  // const [isSaved, setIsSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  //Used to get offer and prop_id which are in link
  const { offer, prop_id } = useParams();

  useEffect(() => {
    getProperty(prop_id, offer);
  }, [prop_id, offer]);

  const getProperty = (propId, offer) => {
    axios
      // https://homeseekrapi.000webhostapp.com/api/login/
      // http://homeseekrapi.000.pe/login/
      // http://localhost:80/api/login/
      // https://homeseekrapi2.onrender.com/login
      .post("https://homeseekrapi2.onrender.com/login", {
        prop_id: propId,
        offer: offer,
        page: "viewProp",
      })
      .then((response) => {
        console.log(response.data);
        setProperty(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching property data:", error);
        setLoading(false);
      });

    const dummyUser = {
      user_id: 1,
      name: " Dinesh surya",
      number: " 8121400482",
    };

    setUser(dummyUser);
    // setIsSaved(false);
  };

  // const handleSave = () => {
  //   setIsSaved(!isSaved);
  // };

  return (
    <div>
      <Header />

      {loading ? ( // Render loading state
        <div className="loading-container">
          <PuffLoader color={"#123abc"} size={60} loading={loading} />
          <span style={{ color: "#6e82c4" }}>Loading...</span>
        </div>
      ) : (
        <section className="view-property">
          <div className="Section-Wrapper">
            <div className="Wrapper">
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
                    <p className="property-info">
                      <i>Rooms:</i>
                      <span>{property.bhk} BHK</span>
                    </p>
                    <p className="property-info">
                      <i>Deposit Amount:</i>
                      <span>
                        <span
                          className="fa fa-indian-rupee-sign"
                          style={{ marginRight: ".5rem" }}
                        ></span>
                        {property.deposite}
                      </span>
                    </p>
                    <p className="property-info">
                      <i>Status:</i>
                      <span>{property.status}</span>
                    </p>
                    <p className="property-info">
                      <i>Bedroom:</i>
                      <span>{property.bedroom}</span>
                    </p>
                    <p className="property-info">
                      <i>Bathroom:</i>
                      <span>{property.bathroom}</span>
                    </p>
                    <p className="property-info">
                      <i>Balcony:</i>
                      <span>{property.balcony}</span>
                    </p>
                  </div>
                  <div className="box">
                    <p className="property-info">
                      <i>Carpet Area:</i>
                      <span>{property.carpet} sqft</span>
                    </p>
                    <p className="property-info">
                      <i>Age:</i>
                      <span>{property.age} years</span>
                    </p>
                    <p className="property-info">
                      <i>Total Floors:</i>
                      <span>{property.total_floors}</span>
                    </p>
                    <p className="property-info">
                      <i>Room Floor:</i>
                      <span>{property.room_floor}</span>
                    </p>
                    <p className="property-info">
                      <i>Furnished:</i>
                      <span>{property.furnished}</span>
                    </p>
                    <p className="property-info">
                      <i>Loan:</i>
                      <span>{property.loan}</span>
                    </p>
                  </div>
                </div>
                <h3 className="title">Amenities</h3>
                <div className="flex">
                  <div className="box">
                    <p className="amenity">
                      <span>Lifts</span>
                      <i
                        className={`fa ${
                          property.lift === "Yes" ? "fa-check" : "fa-times"
                        }`}
                      ></i>
                    </p>
                    <p className="amenity">
                      <span>Security Guards</span>
                      <i
                        className={`fa ${
                          property.security_guard === "Yes"
                            ? "fa-check"
                            : "fa-times"
                        }`}
                      ></i>
                    </p>
                    <p className="amenity">
                      <span>Play Ground</span>
                      <i
                        className={`fa ${
                          property.play_ground === "Yes"
                            ? "fa-check"
                            : "fa-times"
                        }`}
                      ></i>
                    </p>
                    <p className="amenity">
                      <span>Gardens</span>
                      <i
                        className={`fa ${
                          property.garden === "Yes" ? "fa-check" : "fa-times"
                        }`}
                      ></i>
                    </p>
                    <p className="amenity">
                      <span>Water Supply</span>
                      <i
                        className={`fa ${
                          property.water_supply === "Yes"
                            ? "fa-check"
                            : "fa-times"
                        }`}
                      ></i>
                    </p>
                    <p className="amenity">
                      <span>Power Backup</span>
                      <i
                        className={`fa ${
                          property.power_backup === "Yes"
                            ? "fa-check"
                            : "fa-times"
                        }`}
                      ></i>
                    </p>
                  </div>
                  <div className="box">
                    <p className="amenity">
                      <span>Parking Area</span>
                      <i
                        className={`fa ${
                          property.parking_area === "Yes"
                            ? "fa-check"
                            : "fa-times"
                        }`}
                      ></i>
                    </p>
                    <p className="amenity">
                      <span>Gym</span>
                      <i
                        className={`fa ${
                          property.gym === "Yes" ? "fa-check" : "fa-times"
                        }`}
                      ></i>
                    </p>
                    <p className="amenity">
                      <span>Shopping Mall</span>
                      <i
                        className={`fa ${
                          property.shopping_mall === "Yes"
                            ? "fa-check"
                            : "fa-times"
                        }`}
                      ></i>
                    </p>
                    <p className="amenity">
                      <span>Hospital</span>
                      <i
                        className={`fa ${
                          property.hospital === "Yes" ? "fa-check" : "fa-times"
                        }`}
                      ></i>
                    </p>
                    <p className="amenity">
                      <span>Schools</span>
                      <i
                        className={`fa ${
                          property.school === "Yes" ? "fa-check" : "fa-times"
                        }`}
                      ></i>
                    </p>
                    <p className="amenity">
                      <span>Market Area</span>
                      <i
                        className={`fa ${
                          property.market_area === "Yes"
                            ? "fa-check"
                            : "fa-times"
                        }`}
                      ></i>
                    </p>
                  </div>
                </div>
                <h3 className="title">Description</h3>
                <p className="description">{property.description}</p>
                {/* <form className="flex-btn">
              <input type="hidden" name="property_id" value={property.id} />
              <button type="button" onClick={handleSave} className={`save ${isSaved ? "saved" : ""}`}>
                 <i className={`fa ${isSaved ? "fa-heart" : "fa-heart"}`}></i> 
                <span>{isSaved ? "Saved" : "Save"}</span>
              </button>
              <button type="button" onClick={handleSave} className="view_prop_btn">
                Contact the seller
              </button>
            </form> */}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ViewProp;
