import React from "react";

const FeedbackRating = ({ avergeRatingHandler, feedback }) => {
  console.log(avergeRatingHandler(feedback, num));
  return (
    <div className="feedback-rating">
      <div className="container row">
        <p className="quantity">Total Feedbacks: {feedback.length}</p>
        <p className="average-rating">Average Rating: 10</p>
      </div>
    </div>
  );
};

export default FeedbackRating;
