import React from "react";

function Hero({ data }) {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-image">
          <img src={data.image} alt="hero illustration" />
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>{data.title}</h1>
            <p>{data.text}</p>
            <button className="cta-button">{data.button}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;