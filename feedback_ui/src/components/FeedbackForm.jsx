import React from "react";

const FeedbackForm = ({ submithandler }) => {
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
            <input type="text" className="feedback-form__text" />
            <button className="feedback-form__btn" onClick={submithandler}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
