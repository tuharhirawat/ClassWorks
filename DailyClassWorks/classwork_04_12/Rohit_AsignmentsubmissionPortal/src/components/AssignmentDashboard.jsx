import React from 'react';
import FileUploadForm from './FileUploadForm';

const AssignmentDashboard = ({ assignments, onSubmitAssignment }) => {
  return (
    <div>
      <h1>Assignment Dashboard</h1>

      <div>
        <h3>Your Assignments</h3>
        <ul>
          {assignments.map((assignment, index) => (
            <li key={index}>
              <strong>{assignment.name}</strong>
              <br />
              Deadline: {new Date(assignment.deadline).toLocaleDateString()}
              <br />
              Status: {assignment.submitted ? 'Submitted' : 'Not Submitted'}
            </li>
          ))}
        </ul>
      </div>

      <FileUploadForm onSubmitAssignment={onSubmitAssignment} />
    </div>
  );
};

export default AssignmentDashboard;
