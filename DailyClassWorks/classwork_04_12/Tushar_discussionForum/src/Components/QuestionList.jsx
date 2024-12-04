import React from "react";
import ReplyForm from "./ReplyForm";
import ReplyList from "./ReplyList";

function QuestionList({ questions, onAddReply }) {
  return (
    <div>
      <h2>Questions:</h2>
      {questions.length === 0 ? (
        <p>No questions yet. Be the first to ask!</p>
      ) : (
        questions.map((q) => (
          <div
            key={q.id}
            style={{
              padding: "10px",
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          >
            <p>{q.text}</p>
            <ReplyForm questionId={q.id} onAddReply={onAddReply} />
            <ReplyList questionId={q.id} replies={q.replies} onAddReply={onAddReply} />
          </div>
        ))
      )}
    </div>
  );
}

export default QuestionList;
