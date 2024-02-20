import React from "react";
import "./heroSection.css";

function HeroSection() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button className="btn">Shop Now</button>
          <button className="btn categoryBtn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icon">
            <img src="/images/amazon.png" alt="amazon" />
            <img src="/images/flipkart.png" alt="flipkart" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="brand-shoe" />
      </div>
    </main>
  );
}

export default HeroSection;
