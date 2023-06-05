import React, { useState } from "react";
import './APOD.css';

const APOD = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");
  const [mediaType, setMediaType] = useState("");

  const handleDateChange = (event) => {
    const dateStr = event.target.value;
    const apiKey = "h1YytEUnsS0ZKVcguggc1ErIr3aXxKnntQi2PnIs"; // replace with your actual API key
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateStr}`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (json.media_type === "video") {
          setImageUrl(json.url);
        } else if (json.media_type === "image") {
          setImageUrl(json.url);
        } else {
          setImageUrl("");
        }
        setTitle(json.title);
        setExplanation(json.explanation);
        setMediaType(json.media_type);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="main-div">
      <input className="button" type="date" onChange={handleDateChange} />
      {imageUrl ? (
        <div className="img-div">
          {mediaType === "video" ? (
            <iframe src={imageUrl} title={title}></iframe>
          ) : (
            <img src={imageUrl} alt={title} />
          )}
          <h1 className="title">{title}</h1>
          <p className="explanation">{explanation}</p>
        </div>
      ) : (
        <p>Image not available</p>
      )}
    </div>
  );
};

export default APOD;
