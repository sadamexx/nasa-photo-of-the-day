import React from "react";
import Photo from "./components/Photos"
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Daily Dose of SPACE STUFF!</h1>
      </div>
    <div className="hero-container">
      <Photo/>
      </div>  
    </div>
  );
}

export default App;
