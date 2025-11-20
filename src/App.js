import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import EssentialSkills from "./components/EssentialSkills.js";
import PersonalPlan from "./components/PesronalPlan.js";
import FeaturedCourses from "./components/FeaturedCourses.js";
import Trusted from "./components/Trusted.js";

import {
  navLinks,
  heroData,
  categories,
  essentialSkills,
  personalPlan,
  featuredCourses,
  trustedCompanies
} from "./data";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar navLinks={navLinks} />
      <Hero data={heroData} />
      <EssentialSkills data={essentialSkills} />
      <PersonalPlan data={personalPlan} />
      <FeaturedCourses data={featuredCourses} />
      <Trusted companies={trustedCompanies} />
    </div>
  );
}

export default App;