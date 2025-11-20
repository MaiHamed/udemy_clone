import React from "react";

function Navbar({ navLinks }) {
  return (
    <nav className="navbar">
      <div className="left">
        <img src="/images/logo_udemy.svg" alt="Udemy" className="logo" />
        <span className="explore">Explore</span>
        <div className="search-container">
          <input className="search" placeholder="Search for anything" />
        </div>
      </div>

      <div className="right">
        {navLinks.map((item, index) => (
          <a key={index} href={item.url} className="nav-link">{item.label}</a>
        ))}
        
        <img src="/images/shopping-cart.png" alt="Cart" className="nav-icon" />
        <button className="login">Log in</button>
        <button className="signup">Sign up</button>
        <img src="/images/globe.png" alt="Language" className="nav-icon" />
      </div>
    </nav>
  );
}

export default Navbar;