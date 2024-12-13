import React, { useState } from "react";

function ProfileForm({ addProfile }) {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        class: "",
        rollno: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addProfile(formData);
        setFormData({ name: "", age: "", class: "", rollno: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Profile</h2>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="class"
                placeholder="Class"
                value={formData.class}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="rollno"
                placeholder="Roll Number"
                value={formData.rollno}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Profile</button>
        </form>
    );
}

export default ProfileForm;
