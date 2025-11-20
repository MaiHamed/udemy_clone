import React from "react";

function Trusted({ companies }) {
  return (
    <section className="trusted">
      <p>Trusted by over 17,000 companies and millions of learners around the world</p>
      <div className="trusted-logos">
        {companies.map((logo, index) => (
          <img key={index} src={logo} alt="company logo" />
        ))}
      </div>
    </section>
  );
}

export default Trusted;
