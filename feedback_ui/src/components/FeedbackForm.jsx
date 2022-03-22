import React from "react";
import { useState } from "react";

const FeedbackForm = ({ submithandler, setInput, input }) => {
  const [isShort, setIsShort] = useState(true);
  const [message, setMessage] = useState("");

  const textChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const textLengthHandler = () => {
    if (isShort && input.length <= 10) {
      setMessage("The message should be longer than 10 Character");
    } else {
      setMessage(null);
    }
  };
  console.log(input.length);
  return (
    <div className="feedback-card">
      <div className="container">
        <form>
          <div className="rate-number">
            <div className="number">1</div>
            <div className="number">2</div>
            <div className="number">3</div>
            <div className="number">4</div>
            <div className="number">5</div>
            <div className="number">6</div>
            <div className="number">7</div>
            <div className="number">8</div>
            <div className="number">9</div>
            <div className="number">10</div>
          </div>
          <div className="feedback-form">
            <input
              type="text"
              className="feedback-form__text"
              placeholder="Write a review"
              onChange={textChangeHandler}
              onChange={textLengthHandler}
            />
            <button className="feedback-form__btn" onClick={submithandler}>
              Send
            </button>
            {isShort && <div>{message}</div>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
