import Card from "./shared/Card";
import Button from "./shared/Button";
import { useState } from "react";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleTextChange = (e) => {
    setText(e.target.value);
    if (text === "") {
      setMessage(null);
      setBtnDisabled(true);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Review need to be longer than 10 characters");
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect />
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
