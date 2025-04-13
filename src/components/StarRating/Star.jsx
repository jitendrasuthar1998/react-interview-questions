import { useState } from "react"

/* eslint-disable react/prop-types */
const StarRating = ({total=10, value=0}) => {
    const [rating, setRating] = useState(value);
    const [hoveredStar, setHoveredStar] = useState(null);

    const handleHover = (event) => {
        // console.log("event target", event.target);
        let val = null;
        if(event && event.target && event.target.getAttribute("data-star-id") ){
            val = event.target.getAttribute("data-star-id");
            console.log(val);
        }
        setHoveredStar(val);
    }

    return <div style={{display:"flex", gap:10, width:200, height:40, flexDirection: "row", justifyContent:"center", alignItems:"center"}} onMouseOver={handleHover}
    onMouseLeave={()=> handleHover(null)}
    onClick={(e)=> setRating(e.target.getAttribute("data-star-id"))} 
    >
        {Array.from({length: total},(_,index)=> {
            return (
                <Star starId={index+1} marked={hoveredStar ? hoveredStar >= index+1 : rating >= index+1 } key={`star-${index+1}`}/>
            )
        })}
    </div>
}

const Star = ({starId, marked}) => {
    return <span data-star-id={starId} role="button" style={{cursor:'pointer'}}>
        {marked ? "\u2605" : "\u2606"}
    </span>
}

export default StarRating;