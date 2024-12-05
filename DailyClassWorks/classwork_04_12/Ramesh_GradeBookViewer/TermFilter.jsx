import React from 'react';

const TermFilter = ({ selectedTerm, onTermChange }) => (
  <div>
    <label htmlFor="term">Select semester: </label>
    <select id="term" value={selectedTerm} onChange={onTermChange}>
      <option value="">All semester</option>
      <option value="Fall 2024">Fall 2024</option>
      <option value="Spring 2024">Spring 2024</option>
    </select>
  </div>
);

export default TermFilter;
