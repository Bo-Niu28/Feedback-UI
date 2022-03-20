import React from "react";
import FeedbackCard from "./FeedbackCard";
const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.lenth === 0) return "No Feedback Yet!";
  return (
    <div>
      {feedback.map((item) => (
        <div>
          <FeedbackCard item={item} />
        </div>
      ))}
    </div>
  );
};
export default FeedbackList;
