import React, { useState } from 'react';

const FileUploadForm = ({ onSubmitAssignment }) => {
  const [file, setFile] = useState(null);
  const [assignmentName, setAssignmentName] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setAssignmentName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file && assignmentName) {
      onSubmitAssignment({ assignmentName, file });
      setFile(null);  // Clear file input after submission
      setAssignmentName('');  // Clear name input
    } else {
      alert('Please fill in the details');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Assignment Name:</label>
      <input
        type="text"
        value={assignmentName}
        onChange={handleNameChange}
        required
      />
      <br />
      <label>Upload Assignment:</label>
      <input
        type="file"
        onChange={handleFileChange}
        required
      />
      <br />
      <button type="submit">Submit Assignment</button>
    </form>
  );
};

export default FileUploadForm;
