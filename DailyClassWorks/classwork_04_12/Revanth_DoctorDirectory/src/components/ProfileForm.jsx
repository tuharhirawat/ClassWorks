import React, { useState } from "react";

function ProfileForm({ addProfile }) {
  const [formData, setFormData] = useState({
    name: "",
    speciality: "",
    state: "",
  });

  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addProfile(formData); 
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <h2>Profile Form</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={formData.name}
      />
      <input
        type="text"
        name="speciality"
        placeholder="Speciality"
        onChange={handleChange}
        value={formData.speciality}
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        onChange={handleChange}
        value={formData.state}
      />
      <button type="submit">Add Profile</button>
    </form>
  );
}

export default ProfileForm;
