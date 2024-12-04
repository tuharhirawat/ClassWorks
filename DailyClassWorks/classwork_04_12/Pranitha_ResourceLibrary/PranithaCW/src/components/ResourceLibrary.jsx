import React, { useState } from "react"; 
import FileUploadForm from "./Fileuploadform";

const ResourceLibrary = () => {
  const [resources, setResources] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleUpload = (newResource) => {
    setResources((prev) => [...prev, newResource]);
  };

  const filteredResources = resources.filter(
    (resource) =>
      (!selectedSubject || resource.subject === selectedSubject) &&
      (!selectedCategory || resource.category === selectedCategory)
  );

  return (
    <div>
      <h1>Resource Library</h1>

      {/* Upload Form */}
      <FileUploadForm onUpload={handleUpload} />

      {/* Filters */}
      <div>
        <label>Filter by Subject:</label>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="">All Subjects</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
        </select>

        <label>Filter by Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Notes">Notes</option>
          <option value="Assignments">Assignments</option>
          <option value="Exams">Exams</option>
        </select>
      </div>

      {/* Resource List */}
      <div>
        {filteredResources.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Subject</th>
                <th>Category</th>
                <th>File</th>
              </tr>
            </thead>
            <tbody>
              {filteredResources.map((resource, index) => (
                <tr key={index}>
                  <td>{resource.title}</td>
                  <td>{resource.subject}</td>
                  <td>{resource.category}</td>
                  <td>
                    {resource.file ? (
                      <a href={URL.createObjectURL(resource.file)} target="_blank" rel="noopener noreferrer">
                        View File
                      </a>
                    ) : (
                      "No file"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No resources found.</p>
        )}
      </div>
    </div>
  );
};
export default ResourceLibrary