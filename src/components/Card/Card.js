import React from "react";
import "./Card.css";

const Card = ({ img, text }) => {
  return (
    <div className="card">
      <div className="card-container">
        {img}
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
