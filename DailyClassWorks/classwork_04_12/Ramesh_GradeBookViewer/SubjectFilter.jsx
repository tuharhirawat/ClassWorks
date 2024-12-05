import React from 'react';
// import SubjectFilter from './SubjectFilter';


const SubjectFilter = ({ selectedSubject, onSubjectChange }) => (
  <div>
    <label htmlFor="subject">Select Subject: </label>
    <select id="subject" value={selectedSubject} onChange={onSubjectChange}>
      <option value="">All Subjects</option>
      <option value="Math">Math</option>
      <option value="Science">Science</option>
      <option value="English">English</option>
    </select>
  </div>
);

export default SubjectFilter;
