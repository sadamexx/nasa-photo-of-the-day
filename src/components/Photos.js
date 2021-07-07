import React, {
    useState,
    useEffect
} from "react";
import PhotoCard from "./PhotoCard";
import axios from "axios";



export default function Photos() {
    const [photos, setPhotos] = useState();

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=cCqDSJuXdz5dyxueT2KUa7jNdhe8DES1zQFndNyx")
            .then(response => {
                console.log(response);
                setPhotos(response.data)
            }); //ends then                 
    }, []) //ends Useeffect
    console.log(photos);
    return ( 
    <div className = "container"> 
        {photos.map(item => {
                return (<PhotoCard key = {
                        // key = {item,hdurl}
                        url = {item.url}
                        title = {item.title}
                        date = {item.date}    
                        explanation = {item.explanation}                    
                    />
                )
            })}
        </div>
    ); //ends return

} //ends function