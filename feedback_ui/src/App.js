import "./App.scss";
import { useState } from "react";
import FeedbackDate from "./data/FeedbackData";
//Components
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
function App() {
  const [feedback, setFeedback] = useState(FeedbackDate);
  const [input, setInput] = useState();

  //Handler
  const submitHandler = () => {
    console.log(test);
  };

  const deleteHandler = (id) => {
    console.log(id);
  };
  return (
    <div className="app">
      <header>
        <h1>Feedback UI</h1>
      </header>
      <FeedbackForm onClick={submitHandler} />
      <FeedbackList feedback={feedback} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
