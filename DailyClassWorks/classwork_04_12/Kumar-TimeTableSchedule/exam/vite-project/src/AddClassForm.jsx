import React, { useState } from 'react';

function AddClassForm({ addClass }) {
  const [classDetails, setClassDetails] = useState({
    id: '',
    name: '',
    time: '',
    location: ''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClassDetails({ ...classDetails, [name]: value });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!classDetails.name || !classDetails.time || !classDetails.location) {
      alert('Please fill out all fields.');
      return;
    }
   
    addClass({ ...classDetails, id: Date.now() });
    setClassDetails({ id: '', name: '', time: '', location: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Class</h3>
      <input
        type="text"
        name="name"
        value={classDetails.name}
        onChange={handleChange}
        placeholder="Class Name"
      />
      <input
        type="text"
        name="time"
        value={classDetails.time}
        onChange={handleChange}
        placeholder="Class Time"
      />
      <input
        type="text"
        name="location"
        value={classDetails.location}
        onChange={handleChange}
        placeholder="Class Location"
      />
      <button type="submit">Add Class</button>
    </form>
  );
}

export default AddClassForm;
