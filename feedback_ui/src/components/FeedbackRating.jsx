import React from "react";

const FeedbackRating = ({ feedback }) => {
  const averageRate =
    feedback.reduce((acc, cur) => {
      return acc + cur.rate;
    }, 0) / feedback.length;
  return (
    <div className="feedback-rating">
      <div className="container row">
        <p className="quantity">{feedback.length} Reviews</p>
        <p className="average-rating">
          Average Rating: {isNaN(averageRate) ? 0 : averageRate.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

export default FeedbackRating;
