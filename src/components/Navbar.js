import React from "react";

function Navbar({ navLinks }) {
  return (
    <nav className="navbar">
      <div className="left">
        <h1 className="logo">Udemy</h1>
        <span className="explore">Explore</span>
        <input className="search" placeholder="Search for anything" />
      </div>

      <div className="right">
        {navLinks.map((item, index) => (
          <a key={index} href={item.url}>{item.label}</a>
        ))}

        <button className="login">Log in</button>
        <button className="signup">Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;
