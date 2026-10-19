import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";

export default function App() {
  return (
    <main className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <p className="eyebrow">WELCOME TO</p>
          <h1>Paradise Nursery</h1>
          <p className="landing-tagline">Where every leaf tells a story.</p>
          <Link className="primary-button" to="/plants">Get Started</Link>
        </div>
        <AboutUs />
      </div>
    </main>
  );
}
