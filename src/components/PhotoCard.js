import React from "react";

const PhotoCard = props => {
    return (
        <div className="photo-card">
            <h2>Photo Title: {props.title} </h2>
            <p>{props.date}</p>
            <p>{props.explanation}</p> 
            <img className="nasa-photo" alt="APOD-img" src={props.url}/>       
        </div>            
    );//ends return
};//ends Photocard

export default PhotoCard;