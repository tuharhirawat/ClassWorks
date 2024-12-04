import React from "react";
import ReplyForm from "./ReplyForm";

function ReplyList({ questionId, replies, onAddReply }) {
  return (
    <div style={{ marginTop: "10px", paddingLeft: "20px", borderLeft: "2px solid #eee" }}>
      <h4>Replies:</h4>
      {replies.length === 0 ? (
        <p>No replies yet. Be the first to reply!</p>
      ) : (
        replies.map((reply) => (
          <div key={reply.id} style={{ marginBottom: "10px" }}>
            <p>{reply.text}</p>
            <ReplyForm
              questionId={questionId}
              parentReplyId={reply.id}
              onAddReply={onAddReply}
            />
            {reply.replies && reply.replies.length > 0 && (
              <ReplyList
                questionId={questionId}
                replies={reply.replies}
                onAddReply={onAddReply}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default ReplyList;
