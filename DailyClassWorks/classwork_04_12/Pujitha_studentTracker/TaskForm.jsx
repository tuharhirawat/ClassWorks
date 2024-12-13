import React, { useState } from "react";

function TaskForm({ addTask }) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        deadline: "",
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
        addTask(formData);
        setFormData({ title: "", description: "", deadline: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Assign Homework</h2>
            <input
                type="text"
                name="title"
                placeholder="Homework Title"
                value={formData.title}
                onChange={handleChange}
                required
            />
            <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Homework</button>
        </form>
    );
}

export default TaskForm;
