import React, {useState, useEffect} from "react";
import PhotoCard from "./components/PhotoCard"
import axios from "axios";
import "./App.css";


function App() {
  const [photos, setPhotos] = useState();

  useEffect (() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=cCqDSJuXdz5dyxueT2KUa7jNdhe8DES1zQFndNyx")
      .then(response => {
        console.log(response);
        setPhotos(response.data);
      })//ends then
  }, []);//ends useeffect


  return (
    <div className="App">
      <div className="header">
        <h1>Daily Dose of SPACE STUFF!</h1>
      </div>
    <div className="hero-container">
       {photos&&<PhotoCard title={photos.title} date={photos.date} explanation={photos.explanation} url={photos.url}/>}
      
      </div>  
    </div>
  );
}

export default App;
