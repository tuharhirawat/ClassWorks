import React, { useState } from 'react';
import SubjectFilter from './SubjectFilter';
import TermFilter from './TermFilter';
import GradeList from './GradeList';
// import './App.css';

const Gradebook = () => {
  const [grades, setGrades] = useState([
    { id: 1, subject: 'Math', term: 'Fall 2024', score: 90 },
    { id: 2, subject: 'Science', term: 'Fall 2024', score: 85 },
    { id: 3, subject: 'English', term: 'Spring 2024', score: 88 },
    { id: 4, subject: 'Math', term: 'Spring 2024', score: 92 },
  ]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTerm, setSelectedTerm] = useState('');

  // Handle subject filter change
  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  // Handle term filter change
  const handleTermChange = (event) => {
    setSelectedTerm(event.target.value);
  };

  // Filter grades based on selected subject and term
  const filteredGrades = grades.filter(grade => {
    return (selectedSubject ? grade.subject === selectedSubject : true) &&
           (selectedTerm ? grade.term === selectedTerm : true);
  });

  return (
    <div>
      <h1>Gradebook Viewer</h1>
      <div>
        <SubjectFilter selectedSubject={selectedSubject} onSubjectChange={handleSubjectChange} />
        <TermFilter selectedTerm={selectedTerm} onTermChange={handleTermChange} />
      </div>
      <GradeList grades={filteredGrades} />
    </div>
  );
};

export default Gradebook;
