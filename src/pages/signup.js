import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [page, setPage] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    page : "signup",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, passwordConfirmation } = data;

    if (!name || !email || !password || !passwordConfirmation) {
      setError("Please fill in all the fields");
      return;
    }

    if (password !== passwordConfirmation) {
      setError("Passwords do not match");
      return;
    }
    console.log(data);
    axios
      .post("https://homeseekrapi2.onrender.com/login", data)
      .then(function (response) {
        console.log(response.data);
        if(response.data.status)
            setPage(true);
        else
          setError("Provided Email has an account!");
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="signup-container">
      {page ? (
        <div>
          <p className="success-message">Signup successful.</p>
          <span className="login-message">You can now</span>
          <Link to="/login" className="login-link">Login</Link>
        </div>
      ) : (
        <div>
          <h1 className="signup-title">Signup</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="input"
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="input"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="input"
                value={data.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="passwordConfirmation" className="label">Confirm Password</label>
              <input
                type="password"
                id="passwordConfirmation"
                name="passwordConfirmation"
                className="input"
                value={data.passwordConfirmation}
                onChange={handleChange}
              />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="submit-btn">Signup</button>
          </form>

          <span className="login-message">Have an account? </span>
          <Link to="/login" className="login-link">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Signup;
