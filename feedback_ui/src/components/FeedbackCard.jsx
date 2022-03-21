import React from "react";
import { FaTimes, FaRegEdit } from "react-icons/fa";
const FeedbackCard = ({ item, deleteHandler }) => {
  return (
    <div className="feedback-card">
      <div className="container">
        <div className="feedback-card__item">
          <div className="feedback-card__rate">{item.rate}</div>
          <div className="feedback-card__btns">
            <div className="feedback-card__btn">
              <FaRegEdit color="purple" />
            </div>
            <div
              className="feedback-card__btn"
              onClick={() => deleteHandler(item.id)}
            >
              <FaTimes color="purple" />
            </div>
          </div>
        </div>
        <div className="feedback-card__content">
          <p>{item.text}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
