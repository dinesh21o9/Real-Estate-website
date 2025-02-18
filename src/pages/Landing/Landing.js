import React from "react";
import { FiArrowRight } from "react-icons/fi";
import "./Landing.css";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();

  return (
    <div className="landing-home-container">
      <div className="landing-home-banner-container">
        <div className="landing-home-text-section">
          <h1 className="landing-primary-heading">
            Your gateway to the perfect home!
          </h1>
          <p className="landing-primary-text">
            Explore an extensive selection of real estate listings and find the home of your dreams today!
          </p>
          <div className="landing-button-container">
            <button className="landing-secondary-button" onClick={() => navigate("/loginout")}>
              Sign in <FiArrowRight />
            </button>
            <button className="landing-secondary-button" onClick={() => navigate("/home")}>
              Home
            </button>
          </div>
        </div>

        <div className="landing-home-bannerImage-container">
          <img src="./assets/images/home-banner-background.png" alt="" />
          <div className="landing-decor">
            <img src ="./assets/images/landing.png" alt = "" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
