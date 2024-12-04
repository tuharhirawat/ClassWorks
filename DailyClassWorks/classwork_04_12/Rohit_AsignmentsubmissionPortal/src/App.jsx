import React, { useState } from 'react';
import AssignmentDashboard from './components/AssignmentDashboard';

function App() {
  const [assignments, setAssignments] = useState([
    {
      name: 'Math Assignment 1',
      deadline: new Date().setDate(new Date().getDate() + 5), // 5 days from today
      submitted: false,
    },
    {
      name: 'Science Assignment 2',
      deadline: new Date().setDate(new Date().getDate() + 3), // 3 days from today
      submitted: false,
    },
    {
      name: 'History Assignment 3',
      deadline: new Date().setDate(new Date().getDate() + 10), // 10 days from today
      submitted: false,
    },
  ]);

  const handleSubmitAssignment = ({ assignmentName, file }) => {
    console.log('Submitting assignment:', assignmentName);
    console.log('File:', file);
    
    // Update assignment status to submitted
    setAssignments((prevAssignments) =>
      prevAssignments.map((assignment) =>
        assignment.name === assignmentName
          ? { ...assignment, submitted: true }
          : assignment
      )
    );
    
    alert(`Assignment ${assignmentName} uploaded successfully!`);
  };

  return (
    <div className="App">
      <AssignmentDashboard
        assignments={assignments}
        onSubmitAssignment={handleSubmitAssignment}
      />
    </div>
  );
}

export default App;
