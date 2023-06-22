import React from "react";
import Card from "./card";
import property from "../property"

function App() {
  return (
    <div>

    <header class="header" data-header>
      <div class="container">

          <a href="#" class="logo">
            <ion-icon name="business-outline"></ion-icon> HavenBliss
          </a>

          <nav class="navbar container" data-navbar>
            <ul class="navbar-list">

              <li>
                <a href="#" class="navbar-link" data-nav-link>Buy</a>
              </li>

              <li>
                <a href="#" class="navbar-link" data-nav-link>Rent</a>
              </li>

              <li>
                <a href="#" class="navbar-link" data-nav-link>Projects</a>
              </li>

              <li>
                <a href="#" class="navbar-link" data-nav-link>Agents</a>
              </li>

              <li>
                <a href="#" class="navbar-link" data-nav-link>Contact</a>
              </li>

            </ul>
          </nav>

          <a href="#" class="btn btn-secondary btn-lg">Signup</a>

          <button class="nav-toggle-btn" data-nav-toggler>
            <ion-icon name="menu-outline" class="menu-icon"></ion-icon>
            <ion-icon name="close-outline" class="close-icon"></ion-icon>
          </button>

        </div>
      </header>

      <main>
        <article class="article">

          <section class="section hero" aria-label="hero">
            <div class="container">

              <div class="hero-bg">
                <div class="hero-content">

                  <h1 class="h1 hero-title">
                    Searching for your new <span class="span">Wonderful</span> home made easy
                  </h1>

                  <p class="hero-text">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                  </p>

                </div>
              </div>

              <div class="hero-form-wrapper">
                
                <div class="form-tab">
                  <button class="tab-btn active" data-tab-btn>Buy</button>
                  <button class="tab-btn" data-tab-btn>Rent</button>
                  <button class="tab-btn" data-tab-btn>PG/Co-living</button>
                  <button class="tab-btn" data-tab-btn>Projects</button>
                  <button class="tab-btn" data-tab-btn>Commercial</button>
                  <button class="tab-btn" data-tab-btn>Plot & Land</button>
                </div>


                <form action="" class="hero-form">

                  <div class="input-wrapper">
                    <input type="search" name="search" id="search" placeholder="Search your home" required class="input-field"/>
                    <ion-icon name="search-outline"></ion-icon>
                  </div>


                  <div class="input-drop">   
                    <select name="Select Categories" id="category" class="dropdown-list">
                      <option value="Select Categories">Select Categories</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="offices">Offices</option>
                      <option value="townhome">Townhome</option>
                    </select>
                  </div>

                  <div class="input-drop">
                    <select name="Select Range" id="Select Range" class="dropdown-list">

                      <option value="Select Range">Budget</option>
                      <option value="500000">₹ 5 Lac</option>
                      <option value="1000000">₹ 10 Lac</option>
                      <option value="2000000">₹ 20 Lac</option>
                      <option value="3000000">₹ 30 Lac</option>
                      <option value="4000000">₹ 40 Lac</option>
                      <option value="5000000">₹ 50 Lac</option>
                      <option value="6000000">₹ 60 Lac</option>

                    </select>
                  </div>

                  <button type="submit" class="btn btn-outline-success">Search now</button>

                </form>
              </div>

            </div>
          </section>



          <section class="section about" aria-label="about">
            <div class="container">

              <div class="about-banner img-holder" style={{width: 600, height: 700}}>
                <img src="./assets/images/about-banner.jpg" width="600" height="700" loading="lazy" alt="about banner"
                  class="img-cover"/>

                <button class="play-btn" aria-label="play video">
                  <ion-icon name="play" aria-hidden="true"></ion-icon>
                </button>
              </div>

              <div class="about-content">

                <h2 class="h2 section-title">Efficiency. Transparency. Control.</h2>

                <p class="section-text">
                  Hously developed a platform for the Real Estate marketplace that allows buyers and sellers to easily
                  execute a
                  transaction on their own. The platform drives efficiency, cost transparency and control into the hands of
                  the consumers.
                  Hously is Real Estate Redefined.
                </p>

                <a href="#" class="btn btn-primary">Learn More</a>

              </div>

            </div>
          </section>



          <section class="section service" aria-label="service">
            <div class="container">

              <h2 class="h2 section-title">How It Works</h2>

              <p class="section-text">
                A great plateform to buy, sell and rent your properties without any agent or commisions.
              </p>

              <ul class="service-list">

                <li>
                  <div class="service-card">

                    <div class="card-icon">
                      <ion-icon name="home-outline"></ion-icon>
                    </div>

                    <h3 class="h3 card-title">Evaluate Property</h3>

                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                    </p>

                  </div>
                </li>

                <li>
                  <div class="service-card">

                    <div class="card-icon">
                      <ion-icon name="briefcase-outline"></ion-icon>
                    </div>

                    <h3 class="h3 card-title">Meeting with Agent</h3>

                    <p class="card-text">
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                  </div>
                </li>

                <li>
                  <div class="service-card">

                    <div class="card-icon">
                      <ion-icon name="key"></ion-icon>
                    </div>

                    <h3 class="h3 card-title">Close the Deal</h3>

                    <p class="card-text">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                    </p>

                  </div>
                </li>

              </ul>

            </div>
          </section>

      {/* property */}
          <section class="section property" aria-label="property">
            <div class="container">

              <h2 class="h2 section-title">Featured Properties</h2>

              <p class="section-text">
                A great plateform to buy, sell and rent your properties without any agent or commisions.
              </p>

              <ul class="property-list">
                {property.map((prop) => <Card imgSrc = {prop.imgSrc} cardTitle = {prop.cardTitle}/>)}
              </ul>

            </div>
          </section>


          <section class="section contact" aria-label="contact">
            <div class="container">

              <h2 class="h2 section-title">Have Question ? Get in touch!</h2>

              <p class="section-text">
                A great plateform to buy, sell and rent your properties without any agent or commisions.
              </p>

              <button class="btn btn-primary">
                <ion-icon name="call-outline"></ion-icon>

                <span class="span">Contact us</span>
              </button>

            </div>
          </section>



          <section class="newsletter" aria-label="newsletter">
            <div class="container">

              <div class="wrapper">
                <h2 class="h2 section-title">Subscribe to Newsletter!</h2>

                <p class="section-text">Subscribe to get latest updates and information.</p>
              </div>

              <form action="" class="newsletter-form">
                <input type="email" name="email_address" placeholder="Enter your email :" aria-label="Enter your email"
                  required class="email-field"/>

                <button type="submit" class="btn btn-secondary">Subscribe</button>
              </form>

            </div>
          </section>

        </article>
      </main>


      <footer class="footer">

        <div class="footer-top">
          <div class="container">

            <div class="footer-brand">

              <a href="#" class="logo">
                <ion-icon name="business-outline"></ion-icon> HeavenBliss
              </a>

              <p class="footer-text">
                A great plateform to buy, sell and rent your properties without any agent or commisions.
              </p>

            </div>

            <ul class="footer-list">

              <li>
                <p class="footer-list-title">Company</p>
              </li>

              <li>
                <a href="#" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">About us</span>
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Services</span>
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Pricing</span>
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Blog</span>
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Login</span>
                </a>
              </li>

            </ul>

            <ul class="footer-list">

              <li>
                <p class="footer-list-title">Useful Links</p>
              </li>

              <li>
                <a href="#" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Terms of Services</span>
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Privacy Policy</span>
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Listing</span>
                </a>
              </li>

              <li>
                <a href="#" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Contact</span>
                </a>
              </li>

            </ul>

            <ul class="footer-list">

              <li>
                <p class="footer-list-title">Contact Details</p>
              </li>

              <li class="footer-item">
                <ion-icon name="location-outline"></ion-icon>

                <address class="address">
                  If you liked the website,<br/>
                  do let me know by<br/>
                  giving Intern 
                  <a href="#" class="address-link">View on Google map</a>
                </address>
              </li>

              <li class="footer-item">
                <ion-icon name="mail-outline"></ion-icon>

                <a href="mailto:contact@example.com" class="footer-link">dineshsurya.2002@gmail.com</a>
              </li>

              <li class="footer-item">
                <ion-icon name="call-outline"></ion-icon>

                <a href="tel:+152534468854" class="footer-link">+91 8121400482</a>
              </li>

            </ul>

          </div>
        </div>

        <div class="footer-bottom">
          <div class="container">

            <p class="copyright">
              &copy; 2022 HeavenBliss.
            </p>

            <ul class="social-list">

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>

            </ul>

          </div>
        </div>

      </footer>
    </div>
  );
}

export default App;
