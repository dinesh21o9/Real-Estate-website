import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Header() {
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

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header" data-header>
      <div className="container">
        <a href="/#" className="logo">
          <ion-icon name="Home"></ion-icon> HomeSeekr
        </a>

        <nav className="navbar container" data-navbar>
          <ul className="navbar-list">
            <li>
              <NavLink to="/" className="navbar-link" data-nav-link>
                Home
              </NavLink>
            </li>
            
            {/* <li>
              <a href="/#" className="navbar-link" data-nav-link>
                Buy
              </a>
            </li> */}
            {/* <li>
              <a href="/#" className="navbar-link" data-nav-link>
                Rent
              </a>
            </li>    */}
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
            <li>
              <a href="/#" className="navbar-link" data-nav-link>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
        <NavLink to="/signup" className="btn btn-secondary btn-lg" data-nav-link>
          Signup / Login
        </NavLink>

        <button className="nav-toggle-btn" data-nav-toggler>
          <ion-icon name="menu-outline" className="menu-icon"></ion-icon>
          <ion-icon name="close-outline" className="close-icon"></ion-icon>
        </button>
      </div>
    </header>
  );
}

export default Header;
