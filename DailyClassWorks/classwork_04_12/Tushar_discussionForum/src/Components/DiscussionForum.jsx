import React, { useState } from "react";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function DiscussionForum() {
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = (newQuestion) => {
    const question = {
      id: Date.now(),
      text: newQuestion,
      replies: [], 
    };
    setQuestions([question, ...questions]);
  };

  const handleAddReply = (questionId, replyText, parentReplyId = null) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) => {
        if (question.id === questionId) {
          const updatedReplies = addNestedReply(question.replies, replyText, parentReplyId);
          return { ...question, replies: updatedReplies };
        }
        return question;
      })
    );
  };

  const addNestedReply = (replies, replyText, parentReplyId) => {
    if (!parentReplyId) {
      return [...replies, { id: Date.now(), text: replyText, replies: [] }];
    }

    return replies.map((reply) => {
      if (reply.id === parentReplyId) {
        return {
          ...reply,
          replies: [...reply.replies, { id: Date.now(), text: replyText, replies: [] }],
        };
      }
      return { ...reply, replies: addNestedReply(reply.replies, replyText, parentReplyId) };
    });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Discussion Forum</h1>
      <QuestionForm onAddQuestion={handleAddQuestion} />
      <QuestionList questions={questions} onAddReply={handleAddReply} />
    </div>
  );
}

export default DiscussionForum;
