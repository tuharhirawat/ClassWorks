import React, { useState } from "react";

function QuestionForm({ onAddQuestion }) {
  const [newQuestion, setNewQuestion] = useState("");

  const handleSubmit = () => {
    if (newQuestion.trim() === "") 
      return "Question Blank"; // Prevent empty questions
    onAddQuestion(newQuestion);
    setNewQuestion("");
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Ask a question..."
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Post Question
      </button>
    </div>
  );
}

export default QuestionForm;
