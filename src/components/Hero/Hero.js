import React from "react";
import Navbar from "../Navbar/Navbar";
import image1 from "../../images/image1.jpeg";
import image2 from "../../images/image2.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <Navbar />

      <div class="container">
        <div class="leftside">
          <div class="headings">
            <h1>Lorem Ipsum</h1>
            <h2>Nice Text</h2>
          </div>
          <div class="description">
            <p>
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div class="cta">
              <button>Google Play</button>
              <button>App Store</button>
            </div>
          </div>
        </div>
        <div class="rightside">
          <div class="image1">
            <img src={image1} alt="image1" />
          </div>
          <div class="image2">
            <img src={image2} alt="image2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
