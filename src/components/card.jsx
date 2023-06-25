import React from "react";

function Card(props) {
  return ( 
  <li>
    <div class="property-card">

      <figure class="card-banner img-holder">
        <img src={props.imgSrc} width="800" height="533" loading="lazy"
          alt={props.cardTitle} class="img-cover"/>
      </figure>

      <button class="card-action-btn" aria-label="add to favourite">
        <ion-icon name="heart" aria-hidden="true"></ion-icon>
      </button>

      <div class="card-content">

        <h3 class="h3">
          <a href="/#" class="card-title">{props.cardTitle}</a>
        </h3>
        
        <ul class="card-list">

          <li class="card-item">
            <div class="item-icon">
              <ion-icon name="cube-outline"></ion-icon>
            </div>
            <span class="item-text">8000sqf</span>
          </li>

          <li class="card-item">
            <div class="item-icon">
              <ion-icon name="bed-outline"></ion-icon>
            </div>
            <span class="item-text">4 Beds</span>
          </li>

          <li class="card-item">
            <div class="item-icon">
              <ion-icon name="man-outline"></ion-icon>
            </div>
            <span class="item-text">4 Baths</span>
          </li>
        </ul>

        <div class="card-meta">
          <div>
            <span class="meta-title">Price</span>

            <span class="meta-text">$5000</span>
          </div>

          <div>
            <span class="meta-title">Rating</span>
            <span class="meta-text">
              <div class="rating-wrapper">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>
              <span>5.0(30)</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </li>
  );

}
export default Card;