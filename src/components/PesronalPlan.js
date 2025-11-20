import React from "react";

function PersonalPlan({ data }) {
  // SVG icon definitions
  const getIconSVG = (iconName) => {
    const icons = {
      sparkles: (
        <svg aria-hidden="true" focusable="false" className="ud-icon ud-icon-small ud-icon-color-neutral">
          <use xlinkHref="#icon-sparkles"></use>
        </svg>
      ),
      trophy: (
        <svg aria-hidden="true" focusable="false" className="ud-icon ud-icon-small ud-icon-color-neutral">
          <use xlinkHref="#icon-trophy"></use>
        </svg>
      ),
      "question-answer-outline": (
        <svg aria-hidden="true" focusable="false" className="ud-icon ud-icon-small ud-icon-color-neutral">
          <use xlinkHref="#icon-question-answer-outline"></use>
        </svg>
      ),
      lightbulb: (
        <svg aria-hidden="true" focusable="false" className="ud-icon ud-icon-small ud-icon-color-neutral">
          <use xlinkHref="#icon-lightbulb"></use>
        </svg>
      )
    };
    return icons[iconName] || icons.sparkles;
  };

  // Format feature text to bold the first word
  const formatFeatureText = (text) => {
    const words = text.split(' ');
    const firstWord = words[0];
    const restOfText = words.slice(1).join(' ');
    
    return (
      <span className="ud-text-md">
        <strong>{firstWord}</strong> {restOfText}
      </span>
    );
  };

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
                      {getIconSVG(feature.icon)}
                    </div>
                    {formatFeatureText(feature.text)}
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