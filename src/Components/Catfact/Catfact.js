import React, { useState } from "react";
import './Catfact.css';

const Catfact = () => {
  const [catFact, setCatFact] = useState("");

  const generateCatFact = () => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => {
        setCatFact(data.fact);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="main-div">
      <button onClick={generateCatFact}>Generate cat fact</button>
      <p className="catfact">{catFact}</p>
    </div>
  );
};

export default Catfact;