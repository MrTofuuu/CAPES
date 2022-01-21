//TODO: Figure out how to save the star rating once a user clicks a star, even after refresh
import React, { useState } from "react";
import {FaStar} from "react-icons/fa";

// CREATE STAR RATING COMPONENT
function Rating() {
    // SET STATE HOOK FOR RATING STARS
    const [rating, setRating] = useState(null);
    // SET STATE HOOK FOR HOVER EFFECT
    const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
                <input 
                    type="radio" 
                    name="rating" 
                    value={ratingValue} 
                    onClick={()=>setRating(ratingValue)}
                />
                <FaStar 
                    className="star" 
                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                    size={30}
                    onMouseEnter={()=>setHover(ratingValue)}
                    onMouseLeave={()=>setHover(null)}
                />
            </label>
          )
        }
      )}
    </div>
  );
}

export default Rating;
