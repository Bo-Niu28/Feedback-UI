import React from "react";
import FeedbackCard from "./FeedbackCard";
const FeedbackList = ({ feedback, deleteHandler }) => {
  if (!feedback || feedback.lenth === 0) return "No Feedback Yet!";
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackCard key={item.id} item={item} deleteHandler={deleteHandler} />
      ))}
    </div>
  );
};
export default FeedbackList;
