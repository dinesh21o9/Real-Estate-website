import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useLocation } from "react-router-dom";
import userIcon from "../assets/logos/user.png";

function Header() {
  const location = useLocation();
  const [userName, setUserName] = useState(null);
  
  const data = {
    page: 'header',
    cookie: localStorage.getItem("auth")
  }
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await axios.post("https://homeseekrapi2.onrender.com/login", data);
        setUserName(response.data.userName);
      } catch (error) {
        console.error("Error fetching user name:", error);
      }
    };
    fetchUserName();
  });

  function handleLogOut() {
    localStorage.removeItem("auth");
  }

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("[data-header]");
      const backTopBtn = document.querySelector("[data-back-top-btn]");
      if (window.scrollY >= 20) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathsToHideHeader = ["/", "/loginout"];

  const shouldHideHeader = pathsToHideHeader.includes(location.pathname);

  if (shouldHideHeader) {
    return null;
  }

  return (
    <header className="header" data-header>
      <div className="container">
        <a href="/#" className="logo">
          <ion-icon name="Home"></ion-icon> HomeSeekr
        </a>

        <nav className="navbar container" data-navbar>
          <ul className="navbar-list">
            <li>
              <NavLink to="/home" className="navbar-link" data-nav-link>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/post" className="navbar-link" data-nav-link>
                Post
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" className="navbar-link" data-nav-link>
                Dashboard
              </NavLink>
            </li>
            {/* <li>
              <a href="/post_ad" className="navbar-link" data-nav-link>
                Post Ads
              </a>
            </li> */}
          </ul>
        </nav>

        {userName && (
        <div
          className="user-info"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={userIcon}
            style={{ width: "30px", height: "30px", margin: "auto" }}
            alt="user"
          />
          <span
            className="user-greeting"
            style={{ padding: "10px", color: "black" }}
          >
            Hello, {userName}
          </span>
        </div>
        )} 

        {localStorage.auth ? (
          <NavLink
            to="/loginout"
            onClick={handleLogOut}
            className="btn btn-secondary btn-lg"
            data-nav-link
          >
            Log out
          </NavLink>
        ) : (
          <NavLink
            to="/loginout"
            onClick={handleLogOut}
            className="btn btn-secondary btn-lg"
            data-nav-link
          >
            Log in
          </NavLink>
        )}

        <button className="nav-toggle-btn" data-nav-toggler>
          <ion-icon name="menu-outline" className="menu-icon"></ion-icon>
          <ion-icon name="close-outline" className="close-icon"></ion-icon>
        </button>
      </div>
    </header>
  );
}

export default Header;
