import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(
      "http://localhost:5000/feedback?_sort=id&_order=desc"
    );
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want ot delete this feedback?")) {
      await fetch(`http://localhost:5000/feedback/${id}`, {
        method: "DELETE",
      });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = async (id, updItem) => {
    // setFeedback(
    //   feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    // );
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    const editedFeedback = feedback.map((item) => {
      if (item.id === id) {
        return { ...item, text: data.text, rating: data.rating };
      }
      return item;
    });
    setFeedback(editedFeedback);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
