import React from "react";
const FeedbackCard = ({ item }) => {
  return (
    <div className="feedback-card">
      <div className="container">
        <div className="feedback-card__item">
          <div className="feedback-card__rate">{item.rate}</div>
          <div className="feedback-card__btn">modify</div>
          <div className="feedback-card__btn">delete</div>
        </div>
        <div className="feedback-card__content">
          <p>{item.text}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
