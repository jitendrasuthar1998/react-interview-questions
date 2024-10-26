/* eslint-disable react/prop-types */
import React, { useState } from "react";

const StartRating = ({ total = 10, value = 0 }) => {
  
  const [rating, setRating] = useState(value || 0);
  const [selectedStar, setSelectedStar] = useState(null);

  const onHover = (event) => {
    console.log("onHover", event.target.getAttribute("data-star-id"));
    setSelectedStar(event.target.getAttribute("data-star-id"))
  };

  const onClick = (event) => {
    setSelectedStar(null);
    // setSelectedStar(event.target.getAttribute("data-star-id"))
    setRating(event.target.getAttribute("data-star-id"))
  }

  const onMouseRemove = () => {
    setSelectedStar(null);
  }

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:5}}>
      {Array.from({ length: total }, (_, index) => {
        return (
          <Star
            onHover={onHover}
            key={index}
            onMouseRemove={onMouseRemove}
            onClick={onClick}
            marked={selectedStar && selectedStar >= index + 1 ? true : false || rating >= index + 1 ? true : false}
            starId={index + 1}
          />
        );
      })}
    </div>
  );
};

const Star = ({ marked, starId, onHover, onClick, onMouseRemove}) => {
  return (
    <div
      onMouseOver={onHover}
      onClick={onClick}
      onMouseLeave={onMouseRemove}
      style={{
        height: 10,
        width: 10,
        backgroundColor: marked ? "green" : "white",
        border: "1px solid black",
      }}
      data-star-id={starId}
    ></div>
  );
};

export default StartRating;
