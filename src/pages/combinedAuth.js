import React, { useState } from "react";
import axios from "axios";
import "./combined-auth.css"; // Import your CSS file here
import { Link , useNavigate } from "react-router-dom";

const CombinedAuth = () => {
  const [done, setDone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    page: "userLogin"
  });
  const clearFormData = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      page: "signup"
    });
  };
  const navigate = useNavigate(); // Initialize useNavigate
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  console.log(error);
  const handleToggleMode = () => {
    setIsSignUp(!isSignUp);
    clearFormData();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      // Handle sign-up form submission
      const { name, email, password, passwordConfirmation } = formData;
      
      if (!name || !email || !password || !passwordConfirmation) {
        setError("Please fill in all the fields");
        return;
      }
      
      if (password !== passwordConfirmation) {
        setError("Passwords do not match");
        return;
      }

      setFormData({ ...formData, page: "signup" }); // Set the page variable in formData to "signup"

      // console.log(formData);
      axios
        .post("http://localhost:80/api/login/", formData)
        .then(function (response) {
          if (response.data.status) {
            setDone(true);
            navigate("/loginout");
          } else {
            setError("Provided Email has an account!");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setError("An error occurred. Please try again.");
        });
    } 
    else {
      // Handle sign-in form submission
      
      if (!formData.email || !formData.password) {
        setError("Please enter both email and password");
        return;
      }

      setFormData({ ...formData, page: "userLogin" }); // Set the page variable in formData to "userLogin"

      // console.log(formData);
      axios
        .post("http://localhost:80/api/login/", formData)
        .then(function (response) {
          if (response.data.status) {
            //jwt is in response.data.token
            window.token = response.data.token;
            console.log(window.token);
            setDone(true);  

            navigate("/home");

          } else {
            setError("Invalid Credentials");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setError("An error occurred. Please try again.");
        });
    }
  };

  return (
    <div className={`combined-Auth-container ${isSignUp ? "combined-Auth-sign-up-mode" : ""}`}>
      {done ? (
        <div>
          <p className="combined-Auth-success-message">Authentication successful.</p>
          <span className="combined-Auth-login-message">You can now</span>
          <Link to="/post" className="combined-Auth-login-link">
            Post
          </Link>
        </div>
      ) : (
        <div class ={`container ${isSignUp ? "sign-up-mode" : ""}`}>
          <div className="combined-Auth-forms-container">
            <div className={`combined-Auth-signin-signup${isSignUp ? "-sign-up-mode" : ""}`}>

              <form className={`combined-Auth-sign-in-form${isSignUp ? "-sign-up-mode" : ""}`} onSubmit={handleSubmit}>

                <h2 className="combined-Auth-title">Sign in</h2>
                    
                <div className="combined-Auth-input-field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="combined-Auth-input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <input
                  type="submit"
                  className="combined-Auth-btn"
                  value="Login"
                />

              </form>

              <form className={`combined-Auth-sign-up-form${isSignUp ? "-sign-up-mode" : ""}`} onSubmit={handleSubmit}>

                <h2 className="combined-Auth-title">Sign up</h2>

                <div className="combined-Auth-input-field">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Username"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="combined-Auth-input-field">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="combined-Auth-input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="combined-Auth-input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="passwordConfirmation"
                    value={formData.passwordConfirmation}
                    onChange={handleChange}
                  />
                </div>
                <input
                  type="submit"
                  className="combined-Auth-btn"
                  value="Sign up"
                />
              </form>

            </div>

          </div>

          <div className="combined-Auth-panels-container">

            <div className={`combined-Auth-panel combined-Auth-left-panel ${isSignUp ? "sign-up-mode" : ""}`}>
              {/* Left panel content */}
              <div className="combined-Auth-content">
                <h3>New here?</h3>
                <p>
                  Don't miss out! Sign up and gain access to our amazing features. <br></br>No more hassle of searching for a broker!
                </p>
                <button className="combined-Auth-btn combined-Auth-transparent" onClick={handleToggleMode}>
                  Sign up
                </button>
              </div>
              <img src="./assets/images/log.png" class="combined-Auth-image" alt="" />
            </div>

            <div className={`combined-Auth-panel combined-Auth-right-panel ${isSignUp ? "sign-up-mode" : ""}`}>
              {/* Right panel content */}
              <div className="combined-Auth-content">
                <h3>One of us ?</h3>
                <p>
                  Welcome Back! Sign in for a personalized experience and access our top-notch services. 
                  We're here for you.
                </p>
                <button className="combined-Auth-btn combined-Auth-transparent" onClick={handleToggleMode}>
                  Sign in
                </button>
              </div>
              <img src="./assets/images/register.png" class="combined-Auth-image" alt="" />
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default CombinedAuth;
