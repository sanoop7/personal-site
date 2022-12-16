import React from "react";
import HomePage from "./pages/home/home";
import "./App.css";
import ParticleBackground from "./components/particleBackground/ParticleBackground";
function App() {
  return (
    <div className="Root">
      <ParticleBackground />
      <HomePage />
    </div>
  );
}

export default App;
