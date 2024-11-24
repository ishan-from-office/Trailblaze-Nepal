import React, {useState, useEffect} from "react";
import ReactStar from "react-rating-stars-component";

const ChildRatingComponent = ({ ratingValue }) => {
  const [rating, setRating] = useState(ratingValue || 0);
  const ratingOptions = {
    edit: false,
    count: 5,
    color: '#DEDDDC',
    activeColor: '#fb8500',
    value: rating, // Initial value
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 28,
  };
  useEffect(() => {
    setRating(ratingValue); // Update the rating when ratingValue prop changes
  }, [ratingValue]);
  const handleRatingChange = (value) => {
    setRating(value); // Update the rating value in the state
  };
  return <div>
             <ReactStar key={rating} {...ratingOptions} onChange={handleRatingChange} />
          </div>;
};

export default ChildRatingComponent;
