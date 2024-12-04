import React from 'react'
import './Forum.css'

function Forum() {
  return (<>
  <header>
    <h1>Student Discussion Forum</h1>
  </header>
  <div class="container">
    <form id="question-form">
      <div class="form-group">
        <label for="question-title">Question Title:</label>
        <input type="text" id="question-title" placeholder="Enter your question title" required/>
      </div>
      <div class="form-group">
        <label for="question-description">Question Description:</label>
        <textarea id="question-description"  placeholder="Provide more details about your question" required></textarea>
      </div>
      <div class="form-group">
        <button type="submit">Post Question</button>
      </div>
    </form>

        <div class="questions" id="questions">
      <h2>Recent Questions</h2>
      <div class="question-item">
        <h3>How to implement React state management?</h3>
        <p>I am new to React. Can someone explain how state management works?</p>
      </div>
      <div class="question-item">
        <h3>What is the difference between let and var?</h3>
        <p>I've been learning JavaScript and I'm confused about the difference between these two.</p>
      </div>
    </div>
  </div>
     </>)
}

export default Forum