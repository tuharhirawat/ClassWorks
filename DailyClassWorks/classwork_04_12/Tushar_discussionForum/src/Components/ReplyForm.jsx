import React, { useState } from "react";
import '../App.css';

function ReplyForm({ questionId, parentReplyId = null, onAddReply }) {
  const [newReply, setNewReply] = useState("");
  const [error, setError] = useState("");

  const handleReplySubmit = () => {
    if (newReply.trim() === "") {
      setError("Reply cannot be empty!");
      return;
    }
    setError("");
    onAddReply(questionId, newReply, parentReplyId);
    setNewReply("");
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <input
        type="text"
        placeholder="Write a reply..."
        value={newReply}
        onChange={(e) => setNewReply(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={handleReplySubmit}
        style={{
          marginTop: "5px",
          padding: "8px 16px",
          backgroundColor: "#28A745",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Reply
      </button>
      {error && (
        <p className="ReplyError">{error}</p>
      )}
    </div>
  );
}

export default ReplyForm;
