import React from "react";

function Navbar({ navLinks }) {
  return (
    <nav className="navbar">
      <div className="left">
        <h1 className="logo">Udemy</h1>
        <span className="explore">Explore</span>
        <div className="search-container">
          <input className="search" placeholder="Search for anything" />
        </div>
      </div>

      <div className="right">
        {navLinks.map((item, index) => (
          <a key={index} href={item.url} className="nav-link">{item.label}</a>
        ))}
        
        <div className="nav-icons">
          <img src="/images/shopping-cart.png" alt="Cart" className="nav-icon" />
        </div>

        <button className="login">Log in</button>
        <button className="signup">Sign up</button>
        <div className="nav-icons">
          <img src="/images/globe.png" alt="Language" className="nav-icon" />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;