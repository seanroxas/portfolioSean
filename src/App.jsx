import React, { useState } from "react";

import "./stylesheets/App.css";
import "./stylesheets/index.css";
import "./stylesheets/styles.css";
import Navigation from "./components/navigation.jsx";
import AboutMe from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  return (
    <div className="bg-slate-900">
      <Navigation />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
