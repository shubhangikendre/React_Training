import React from "react";

const Card = ({ title, description, cardImage }) => {
  return (
    <div className="card" style={{ width: "70rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
