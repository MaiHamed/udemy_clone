import React from "react";

function PersonalPlan({ data }) {
  return (
    <section className="personal-plan">
      <div className="container">
        <div className="personal-plan-card">
          <div className="personal-plan-content">
            <div className="personal-plan-text">
              <h2>{data.title}</h2>
              <p className="description">{data.description}</p>
              <ul className="features-list">
                {data.features.map(feature => (
                  <li key={feature.id} className="feature-item">
                    <div 
                      className="feature-icon" 
                      style={{ backgroundColor: feature.bgColor }}
                    >
                      <img src={feature.icon} alt="" className="feature-svg" />
                    </div>
                    <span className="feature-text">
                      <strong>{feature.text.split(' ')[0]}</strong> {feature.text.split(' ').slice(1).join(' ')}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="plan-footer">
                <button className="learn-more-btn">{data.buttonText}</button>
                <p className="price">{data.price}</p>
              </div>
            </div>
            <div className="personal-plan-image">
              <img src={data.image} alt="AI career illustration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonalPlan;