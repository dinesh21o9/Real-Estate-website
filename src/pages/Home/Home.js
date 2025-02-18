import React from "react";
import Card from "../../components/Card";
import FeaturedCard from "../../components/FeaturedCard";
import { useNavigate } from "react-router-dom";

const Featuredprops = [
  {
    cover: "./assets/images/hero/h1.png",
    name: "Family House",
    total: "12 Property",
  },
  {
    cover: "./assets/images/hero/h2.png",
    name: "House & Villa",
    total: "155 Property",
  },
  {
    cover: "./assets/images/hero/h3.png",
    name: "Apartment",
    total: "300 Property",
  },
  {
    cover: "./assets/images/hero/h4.png",
    name: "Office & Studio",
    total: "80 Property",
  },
  {
    cover: "./assets/images/hero/h5.png",
    name: "Villa & Condo",
    total: "80 Property",
  },
  {
    cover: "./assets/images/hero/h1.png",
    name: "Farm house",
    total: "80 Property",
  },
]

const property = [
  {
      imgSrc: "./assets/images/property-1.jpg",
      cardTitle: "10765 Hillshire Ave, Baton Rouge, LA 70810, USA"
  },
  {
      imgSrc: "./assets/images/property-2.jpg",
      cardTitle: "59345 STONEWALL DR, Plaquemine, LA 70764, USA"
  },
  {
      imgSrc: "./assets/images/property-3.jpg",
      cardTitle: "3723 SANDBAR DR, Addis, LA 70710, USA"
  },
  {
      imgSrc: "./assets/images/property-4.jpg",
      cardTitle: "LOT 21 ROYAL OAK DR, Prairieville, LA 70769, USA"
  },
  {
      imgSrc: "./assets/images/property-5.jpg",
      cardTitle: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA"
  },
  {
      imgSrc: "./assets/images/property-6.jpg",
      cardTitle: "5133 MCLAIN WAY, Baton Rouge, LA 70809, USA" 
  },
]

function Home() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/dashboard");
  };

  const navigateToPostAd = () => {
    navigate("/post_ad");
  }

  return (
    <div>
      <main>
        <article class="article">
          <section class="section hero" aria-label="hero">
            <div class="container">
              <div class="hero-bg">
                <div class="hero-content">
                  <h1 class="h1 hero-title">
                    Searching for your new <span class="span">Wonderful</span>{" "}
                    home made easy
                  </h1>

                  <p class="hero-text">
                    Where Dreams Find Their Address, and Houses Become Homes.
                    <br />
                    Bringing Dreams Home, One Address at a Time
                  </p>
                </div>
              </div>

              <div class="hero-form-wrapper">
                <div class="form-tab">
                  <button class="tab-btn active" data-tab-btn>
                    Buy
                  </button>
                  <button class="tab-btn" data-tab-btn>
                    Rent
                  </button>
                  <button class="tab-btn" data-tab-btn>
                    PG/Co-living
                  </button>
                  <button class="tab-btn" data-tab-btn>
                    Projects
                  </button>
                  <button class="tab-btn" data-tab-btn>
                    Commercial
                  </button>
                  <button class="tab-btn" data-tab-btn>
                    Plot & Land
                  </button>
                </div>

                <form action="" class="hero-form">
                  <div class="input-wrapper">
                    <input
                      type="search"
                      name="search"
                      id="search"
                      placeholder="Search your home"
                      required
                      class="input-field"
                    />
                    <ion-icon name="search-outline"></ion-icon>
                  </div>

                  <div class="input-drop">
                    <select
                      name="Select Categories"
                      id="category"
                      class="dropdown-list"
                    >
                      <option value="Select Categories">
                        Select Categories
                      </option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="offices">Offices</option>
                      <option value="townhome">Townhome</option>
                    </select>
                  </div>

                  <div class="input-drop">
                    <select
                      name="Select Range"
                      id="Select Range"
                      class="dropdown-list"
                    >
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

                  <button
                    type="submit"
                    class="search-btn btn btn-outline-success"
                    onClick={handleSubmit}
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </section>

          <section class="section about" aria-label="about">
            <div class="container">
              <div
                class="about-banner img-holder"
                style={{ width: 400, height: 500 }}
              >
                <img
                  src="./assets/images/about-banner.jpg"
                  width="600"
                  height="700"
                  loading="lazy"
                  alt="about banner"
                  class="img-cover"
                />

                <button class="play-btn" aria-label="play video">
                  <ion-icon name="play" aria-hidden="true"></ion-icon>
                </button>
              </div>

              <div class="about-content">
                <h2 class="h2 section-title">
                  Efficiency. Transparency. Control.
                </h2>

                <p class="section-text">
                  Transparency is essential in building trust and credibility with users. 
                  It can be fostered through open communication, clear terms of service, 
                  and accessible customer support. Providing detailed product or service 
                  descriptions, avoiding hidden fees, and ensuring data privacy further reinforce transparency. 
                  Businesses should proactively disclose any potential conflicts of interest, 
                  acknowledge mistakes when they occur, and take corrective action.
                </p>

                <a href="/#" class="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </section>

          <section class="section service" aria-label="service">
            <div class="container">
              <h2 class="h2 section-title">How It Works</h2>

              <p class="section-text">
                A great plateform to buy, sell and rent your properties without
                any agent or commisions.
              </p>

              <ul class="service-list">
                <li>
                  <div class="service-card">
                    <div class="card-icon">
                      <ion-icon name="home-outline"></ion-icon>
                    </div>
                    <h3 class="h3 card-title">Evaluate Property</h3>
                    <p class="card-text">
                      Thorough analysis of market trends and property for making
                      informed decisions.
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
                      A meeting with a knowledgeable agent can provide valuable
                      insights in your decisions.
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
                      Closing the deal requires meticulous attention to detail,
                      clear communication.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Features */}
          <section className="featured background section service">
            <div className="container">
              <h2 class="h2 section-title"> Property Types </h2>
              <p class="section-text">Types of properties</p>
              <ul class="service-list">
                {Featuredprops.map((props) => (
                  <FeaturedCard
                    cover={props.cover}
                    name={props.name}
                    total={props.total}
                  />
                ))}
              </ul>
            </div>
          </section>

          {/* property */}
          <section class="section property" aria-label="property">
            <div class="container">
              <h2 class="h2 section-title">Featured Properties</h2>

              <p class="section-text">
                A great plateform to buy, sell and rent your properties without
                any agent or commision.
              </p>

              <ul class="property-list">
                {property.map((prop) => (
                  <Card imgSrc={prop.imgSrc} cardTitle={prop.cardTitle} />
                ))}
              </ul>
            </div>
          </section>

          <section class="section contact" aria-label="contact">
            <div class="container">
              <h2 class="h2 section-title">Have Question ? Get in touch!</h2>

              <p class="section-text">
                A great plateform to buy, sell and rent your properties without
                any agent or commisions.
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
                <h2 class="h2 section-title">Add posts to HomeSeekr!</h2>

                <p class="section-text">
                  You can add posts and we will display it for you!
                </p>
              </div>

              <form action="" class="newsletter-form">
                <input
                  type="email"
                  name="email_address"
                  placeholder=" "
                  aria-label="Enter your email"
                  required
                  class="email-field"
                />

                <button type="submit" class="btn btn-secondary" onClick={navigateToPostAd}>
                  Post Ads
                </button>
              </form>
            </div>
          </section>
        </article>
      </main>

      <footer class="footer">
        <div class="footer-top">
          <div class="container">
            <div class="footer-brand">
              <a href="/#" class="logo">
                <ion-icon name="home"></ion-icon> HomeSeekr
              </a>

              <p class="footer-text">
                A great plateform to buy, sell and rent your properties without
                any agent or commisions.
              </p>
            </div>

            <ul class="footer-list">
              <li>
                <p class="footer-list-title">Company</p>
              </li>

              <li>
                <a href="/#" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">About us</span>
                </a>
              </li>

              <li>
                <a href="/#" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Services</span>
                </a>
              </li>

              <li>
                <a href="/#" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Pricing</span>
                </a>
              </li>

              <li>
                <a href="/#" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Blog</span>
                </a>
              </li>

              <li>
                <a href="/#" class="footer-link">
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
                <a href="/#" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Terms of Services</span>
                </a>
              </li>

              <li>
                <a href="/#" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Privacy Policy</span>
                </a>
              </li>

              <li>
                <a href="/#" class="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span class="span">Listing</span>
                </a>
              </li>

              <li>
                <a href="/#" class="footer-link">
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
                  NIT Kurukshetra,
                  <br />
                  Thanesar,
                  <br />
                  Haryana
                  <a href="/#" class="address-link">
                    View on Google map
                  </a>
                </address>
              </li>

              <li class="footer-item">
                <ion-icon name="mail-outline"></ion-icon>

                <a href="mailto:dineshsurya.2002@gmail.com" class="footer-link">
                  dineshsurya.2002@gmail.com
                </a>
              </li>

              <li class="footer-item">
                <ion-icon name="call-outline"></ion-icon>

                <a href="tel:8121400482" class="footer-link">
                  +91 8121400482
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container">
            <p class="copyright">&copy; 2023 HomeSeekr Made by Dinesh Surya</p>

            <ul class="social-list">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100006378244531"
                  class="social-link"
                >
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/roiyaru_ryuga/"
                  class="social-link"
                >
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="/#" class="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/gidijala-dinesh-surya-4844b3224/"
                  class="social-link"
                >
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <script src="./HomeIndex.js" type="text/jsx"></script>
    </div>
  );
}

export default Home;
