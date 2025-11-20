import React from "react";

function EssentialSkills({ data }) {
  return (
    <section className="essential-skills">
      <div className="essential-skills-container">
        <div className="essential-skills-text">
          <h2>{data.title}</h2>
          <p className="description">{data.description}</p>
        </div>
        <div className="essential-skills-content">
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-image">
                  <img src={skill.image} alt={skill.name} />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EssentialSkills;