import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [page, setPage] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    page: "userLogin",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform form validation
    if (!data.email || !data.password) {
      setError("Please enter both email and password");
      return;
    }

    axios
      .post("http://localhost:80/api/login/", data)
      .then(function (response) {
        
        // console.log(response.data.status);
        if(response.data.status){
          
          //jwt is in response.data.token
          window.token = response.data.token;
          console.log(window.token);
          setPage(true);
        
        }else{
            setError("Invalid Credentials")
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("An error occurred. Please try again.");
      });
  };

  return (
    
    <div className="login-container">
        {page ? (
        <div>
          <p className="success-message">Login successful.</p>
          <span className="login-message">You can now</span>
          <Link to="/post">Post</Link>
        </div>
      ) : (
        <div>
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
            <div>
            <label htmlFor="email" className="label">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="login-box"
            />
            </div>

            <div>
            <label htmlFor="password" className="label">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                className="login-box"
            />
            </div>

            {error && <p className="error">{error}</p>}
            <button type="submit" className="submit-btn">Login</button>
        </form>

        <span className="text">Don't have an account? </span>
        <a href="/signup" className="link">Signup</a>

        </div>
      )}
    </div>
  );
};

export default Login;
