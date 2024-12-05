import React from 'react';

const Grade = ({ grade }) => (
  <div style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
    <p><strong>Subject:</strong> {grade.subject}</p>
    <p><strong>Term:</strong> {grade.term}</p>
    <p><strong>Score:</strong> {grade.score}</p>
  </div>
);

export default Grade;
