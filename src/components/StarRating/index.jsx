/* eslint-disable react/prop-types */
import  { useState } from "react";

const StartRating = ({ total = 10, value = 0 }) => {
  
  const [rating, setRating] = useState(value || 0);
  const [selectedStar, setSelectedStar] = useState(null);

  const onHover = (event) => {
    console.log("onHover", );
    let val = null;
    if(event && event.target && event.target.getAttribute("data-star-id")){
      val = event.target.getAttribute("data-star-id");
    }

    setSelectedStar(val)
  };

  // const onClick = (event) => {
  //   // setSelectedStar(null);
  //   // setSelectedStar(event.target.getAttribute("data-star-id"))
  //   setRating(event.target.getAttribute("data-star-id"))
  // }

  // const onMouseRemove = () => {
  //   // setSelectedStar(null);
  // }

  return (
    <div onMouseLeave={() => onHover(null)}
    onMouseOver={onHover}
    onClick={(e) =>
      setRating(e.target.getAttribute("data-star-id") || rating)
    }>
      {Array.from({ length: total }, (_, index) => {
        return (
          <Star
            marked={selectedStar ? selectedStar >= index + 1 : rating >= index + 1}
            starId={index + 1}
            key={`star_${index}`}
          />
        );
      }
      )}
    </div>
  );
};

// const Star = ({ marked, starId, onClick}) => {
//   return (
//     <div
//       onClick={onClick}
//       style={{
//         height: 10,
//         width: 10,
//         backgroundColor: marked ? "green" : "white",
//         border: "1px solid black",
//       }}
//       data-star-id={starId}
//     ></div>
//   );
// };

const Star = ({ marked, starId }) => {
  return (
    <span data-star-id={starId} style={{cursor:"pointer"}} className="star" role="button">
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};


export default StartRating;
