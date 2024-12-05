import React, { useState } from "react";

function ContactForm({ addContact }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    relationship: "",
  });

  const generateID = () => Math.random().toString(36).substr(2, 9);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.relationship) {
      addContact({ ...formData, id: generateID() });
      setFormData({ name: "", phone: "", relationship: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
        />
      </div>
      <div>
        <label>Relationship:</label>
        <input
          type="text"
          name="relationship"
          value={formData.relationship}
          onChange={handleChange}
          placeholder="Enter relationship"
        />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
