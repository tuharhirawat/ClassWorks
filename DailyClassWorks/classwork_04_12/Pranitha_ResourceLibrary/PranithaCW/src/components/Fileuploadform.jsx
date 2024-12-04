import React, { useState } from "react"; 

const FileUploadForm = ({ onUpload }) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [category, setCategory] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!file || !title || !subject || !category) {
        alert("Please fill in all fields.");
        return;
      }
  
      const resourceData = {
        title,
        subject,
        category,
        file, // Send this to the backend
      };
  
      onUpload(resourceData); // Callback to handle file upload logic
      alert("Resource uploaded successfully!");
      setFile(null);
      setTitle("");
      setSubject("");
      setCategory("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div> 
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Subject:</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          >
            <option value="">Select Subject</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
          </select>
        </div>
        <div>
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Notes">Notes</option>
            <option value="Assignments">Assignments</option>
            <option value="Exams">Exams</option>
          </select>
        </div>
        <div>
          <label>File:</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>
        <div className="upload-btn">
        <button type="submit">Upload</button>
        </div>
      </form>
    );
  };
  
  export default FileUploadForm;