import React from "react";

function Task({ task = [], toggleTaskCompletion, deleteTask }) {
    return (
        <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>
                <strong>Deadline:</strong> {task.deadline}
            </p>
            <button onClick={() => toggleTaskCompletion(task.id)}>
                {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
}

export default Task;
