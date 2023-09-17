import React, { useState } from "react";
import "./StarRating.css"; // Make sure to import your CSS file

type StarRatingProps = {
  stars: number;
};

const StarRating: React.FC<StarRatingProps> = ({ stars }) => {
  const [rating, setRating] = useState<number | null>(null);

  const handleStarEnter = (starNumber: number) => {
    // Highlight stars on hover
    const newRating = starNumber === rating ? null : starNumber;
    setRating(newRating);
  };

  const handleStarClick = (starNumber: number) => {
    // Set the rating when a star is clicked
    setRating(starNumber);
  };

  return (
    <div>
      {[...Array(stars)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < (rating || 0) ? "highlighted" : ""}`}
          onMouseEnter={() => handleStarEnter(index + 1)}
          onMouseLeave={() => handleStarEnter(null)}
          onClick={() => handleStarClick(index + 1)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
