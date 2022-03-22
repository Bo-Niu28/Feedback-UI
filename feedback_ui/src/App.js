import "./App.scss";
import { useState } from "react";
import FeedbackDate from "./data/FeedbackData";
//Components
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackRating from "./components/FeedbackRating";
function App() {
  const [feedback, setFeedback] = useState(FeedbackDate);
  const [input, setInput] = useState();

  //Handler
  const submitHandler = () => {
    console.log(test);
  };

  const deleteHandler = (id) => {
    if (window.confirm("Do you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const avergeRatingHandler = (arr) => {
    return (
      arr.forEach((item) => {
        num = num + item.rate;
      }) / arr.length
    );
  };
  return (
    <div className="app">
      <header>
        <h1>Feedback UI</h1>
      </header>
      <FeedbackForm onClick={submitHandler} />
      <FeedbackRating
        feedback={feedback}
        avergeRatingHandler={avergeRatingHandler}
      />
      <FeedbackList feedback={feedback} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
