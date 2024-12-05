import React, { useState } from "react"; 
import Child from "./Child"; 
import AddTopic from "./AddTopic";

function Parent() {
  const [topics, setTopics] = useState([  
    { id: 1, name: "React", votes: 0 }, 
    { id: 2, name: "Java", votes: 0 },
    { id: 3, name: "Node", votes: 0 },
  ]);

  const [questions, setQuestions] = useState([]);  
  
  const handleVoteTopic = (id) => {
    setTopics((prevTopics) => 
      prevTopics.map((topic) =>
        topic.id === id  
          ? { ...topic, votes: topic.votes + 1 }
          : topic  
      )
    );
  };

  
  const handleVoteQuestion = (id) => {
    setQuestions((prevQuestions) => 
      prevQuestions.map((question) =>
        question.id === id
          ? { ...question, votes: question.votes + 1 }
          : question
      )
    );
  };

  
  const handleAddTopic = (newTopic) => {
    setTopics([
      ...topics, 
      { id: topics.length + 1, name: newTopic, votes: 0 },  
    ]);
  };

  
  const handleAddQuestion = (newQuestion) => {
    setQuestions([
      ...questions,
      { id: questions.length + 1, question: newQuestion, votes: 0 },
    ]);
  };

  
  const handleDeleteTopic = (id) => {
    setTopics(topics.filter((topic) => topic.id !== id)); 
  };

  
  const getMostVotedTopic = () => {
    if (topics.length === 0) return null;
    return topics.reduce((max, topic) => (topic.votes > max.votes ? topic : max), topics[0]);
  };

  const mostVotedTopic = getMostVotedTopic();  

  return (
    <div className="App">
      <h1>Vote on Your Favorite Framework</h1>


      {topics.length === 0 ? (  
        <p>No topics available to vote on!</p>
      ) : (
        topics.map((topic) => (  
          <Child 
            key={topic.id}  
            topic={topic}  
            onVote={handleVoteTopic}  
            onDelete={handleDeleteTopic}
          />
        ))
      )}


      <AddTopic onAddTopic={handleAddTopic} />


      {mostVotedTopic && (
        <div className="most-voted">
          <h2>Most Voted Topic:</h2>
          <p>{mostVotedTopic.name} with {mostVotedTopic.votes} votes</p>
        </div>
      )}

      
    </div>
  );
}

export default Parent;
