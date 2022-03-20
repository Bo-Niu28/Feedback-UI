import "./App.scss";
import { useState } from "react";
import FeedbackDate from "./data/FeedbackData";
//Components
import FeedbackList from "./components/FeedbackList";
function App() {
  const [feedback, setFeedback] = useState(FeedbackDate);
  return (
    <div className="app">
      <header>
        <h1>Feedback UI</h1>
      </header>
      <FeedbackList feedback={feedback} />
    </div>
  );
}

export default App;
