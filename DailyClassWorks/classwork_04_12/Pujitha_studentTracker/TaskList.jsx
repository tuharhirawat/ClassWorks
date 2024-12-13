import React from "react";
import Task from "./Task";

function TaskList({ tasks = [], toggleTaskCompletion, deleteTask }) {
    return (
        <ul>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    toggleTaskCompletion={toggleTaskCompletion}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
}

export default TaskList;



// function TaskList({ task, toggleTaskCompletion, deleteTask }) {
//     return (
//         <li>
//             <input
//                 type="checkbox"
//                 checked={task.completed}
//                 onChange={() => toggleTaskCompletion(task.id)}
//             />
//             {task.text}
//             <button onClick={() => deleteTask(task.id)}>Delete</button>
//         </li>
//     );
// }

// export default TaskList;
