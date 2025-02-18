import React, { useState } from "react";
import axios from "axios";
import "./Combined-auth.css"; 
import { useNavigate } from "react-router-dom";
import { BounceLoader } from "react-spinners";

const CombinedAuth = () => {
  const [done, setDone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    page: "userLogin",
  });
  const clearFormData = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      page: "signup",
    });
  };
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(error);
  const handleToggleMode = () => {
    setIsSignUp(!isSignUp);
    clearFormData();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggleSignup = () => {
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (isSignUp) {
      // Handle sign-up form submission
      const { name, email, password, passwordConfirmation } = formData;

      if (!name || !email || !password || !passwordConfirmation) {
        setError("Please fill in all the fields");
        setLoading(false);
        return;
      }

      if (password !== passwordConfirmation) {
        setError("Passwords do not match");
        setLoading(false);
        return;
      }

      setFormData({ ...formData, page: "signup" }); // Set the page variable in formData to "signup"

      // console.log(formData);
      axios
        // https://homeseekrapi.000webhostapp.com/api/login/
        // http://homeseekrapi.000.pe/login/
        // http://localhost:80/api/login/
        // https://homeseekrapi2.onrender.com/login

        .post("https://homeseekrapi2.onrender.com/login", formData)
        .then(function (response) {
          if (response.data.status) {
            setDone(true);
          } else {
            setError("Provided Email has an account!");
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setError("An error occurred. Please try again later");
          setLoading(false);
        });
    } else {
      // Handle sign-in form submission

      if (!formData.email || !formData.password) {
        setError("Please enter both email and password");
        setLoading(false);
        return;
      }

      setFormData({ ...formData, page: "userLogin" }); // Set the page variable in formData to "userLogin"

      // console.log(formData);
      axios
        // https://homeseekrapi.000webhostapp.com/api/login/
        // http://homeseekrapi.000.pe/login/
        // http://localhost:80/api/login/
        // https://homeseekrapi2.onrender.com/login
        .post("https://homeseekrapi2.onrender.com/login", formData)
        .then(function (response) {
          if (response.data.status) {
            //jwt is in response.data.token
            window.token = response.data.token;
            // console.log(window.token);
            setDone(true);
            localStorage.setItem("auth", window.token);
            navigate("/home");
            window.location.reload(); //to reload the header
          } else {
            setError("Invalid Credentials");
          }
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          console.error("Error:", error);
          setError("An error occurred. Please try again.");
          setLoading(false);
        });
    }
  };

  return (
    <div
      className={`combined-Auth-container ${
        isSignUp ? "combined-Auth-sign-up-mode" : ""
      }`}
    >
      {done ? (
        <div className="done-box">
          <p className="combined-Auth-success-message">
            Registeration successful.
          </p>
          <span className="combined-Auth-login-message">You can now</span>
          <button
            id="go-to-login"
            className="combined-Auth-login-link"
            onClick={handleToggleSignup}
          >
            Sign-in!
          </button>
        </div>
      ) : (
        <div class={`container ${isSignUp ? "sign-up-mode" : ""}`}>
          <div className="combined-Auth-forms-container">
            <div
              className={`combined-Auth-signin-signup${
                isSignUp ? "-sign-up-mode" : ""
              }`}
            >
              <form
                className={`combined-Auth-sign-in-form${
                  isSignUp ? "-sign-up-mode" : ""
                }`}
                onSubmit={handleSubmit}
              >
                <h2 className="combined-Auth-title">Sign in</h2>

                <div className="combined-Auth-input-field">
                  <i className="fas fa-envelope"></i>
                  <input
                    id="email-login"
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
                    id="password-login"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                {error && <p className="error">{error}</p>}
                {/* <input
                  type="submit"
                  className="combined-Auth-btn"
                  value="Login"
                /> */}
                <button
                  id="submit-button-login"
                  type="submit"
                  className={`combined-Auth-btn${loading ? "-loading" : ""}`} // Add a "loading" class when loading
                >
                  {loading ? (
                    <div className="loader-wrapper">
                      <BounceLoader
                        color={"white"}
                        size={20}
                        loading={loading}
                      />
                      <span style={{ margin: "10px" }}>Loading...</span>
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
              </form>

              <form
                className={`combined-Auth-sign-up-form${
                  isSignUp ? "-sign-up-mode" : ""
                }`}
                onSubmit={handleSubmit}
              >
                <h2 className="combined-Auth-title">Sign up</h2>

                <div className="combined-Auth-input-field">
                  <i className="fas fa-user"></i>
                  <input
                    id="username-signup"
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
                    id="email-signup"
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
                    id="password-signup"
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
                    id="password-confirmation-signup"
                    type="password"
                    placeholder="Confirm Password"
                    name="passwordConfirmation"
                    value={formData.passwordConfirmation}
                    onChange={handleChange}
                  />
                </div>
                {error && <p className="error">{error}</p>}
                {/* <input
                  type="submit"
                  className="combined-Auth-btn"
                  value="Sign up"
                /> */}
                <button
                  id="submit-button-signup"
                  type="submit"
                  className={`combined-Auth-btn${loading ? "-loading" : ""}`} // Add a "loading" class when loading
                  value="Sign up"
                >
                  {loading ? (
                    <div className="loader-wrapper">
                      <BounceLoader
                        color={"white"}
                        size={20}
                        loading={loading}
                      />
                      <span style={{ margin: "10px" }}>Loading...</span>
                    </div>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="combined-Auth-panels-container">
            <div
              className={`combined-Auth-panel combined-Auth-left-panel ${
                isSignUp ? "sign-up-mode" : ""
              }`}
            >
              {/* Left panel content */}
              <div className="combined-Auth-content">
                <h3>New here?</h3>
                <p>
                  Don't miss out! Sign up and gain access to our amazing
                  features. <br></br>No more hassle of searching for a broker!
                </p>
                <button
                  className="combined-Auth-btn combined-Auth-transparent"
                  onClick={handleToggleMode}
                >
                  Sign up
                </button>
              </div>
              <img
                src="./assets/images/log.png"
                class="combined-Auth-image"
                alt=""
              />
            </div>

            <div
              className={`combined-Auth-panel combined-Auth-right-panel ${
                isSignUp ? "sign-up-mode" : ""
              }`}
            >
              {/* Right panel content */}
              <div className="combined-Auth-content">
                <h3>One of us ?</h3>
                <p>
                  Welcome Back! Sign in for a personalized experience and access
                  our top-notch services. We're here for you.
                </p>
                <button
                  className="combined-Auth-btn combined-Auth-transparent"
                  onClick={handleToggleMode}
                >
                  Sign in
                </button>
              </div>
              <img
                src="./assets/images/register.png"
                class="combined-Auth-image"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CombinedAuth;
