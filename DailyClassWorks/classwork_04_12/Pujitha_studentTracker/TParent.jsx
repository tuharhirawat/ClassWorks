// import React, { useState } from "react";
// import TaskForm from "./TaskForm";
// import TaskList from "./TaskList";

// function App() {
//     const [tasks, setTasks] = useState([]);

//     // Add a new task
//     const addTask = (task) => {
//         setTasks((prevTasks) => [...prevTasks, { ...task, id: Date.now(), completed: false }]);
//     };

//     // Toggle task completion status
//     const toggleTaskCompletion = (taskId) => {
//         setTasks((prevTasks) =>
//             prevTasks.map((task) =>
//                 task.id === taskId ? { ...task, completed: !task.completed } : task
//             )
//         );
//     };

//     // Delete a task
//     const deleteTask = (taskId) => {
//         setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
//     };

//     return (
//         <div>
//             <h1>Daily Homework Tracker</h1>
//             <TaskForm addTask={addTask} />
//             {tasks.length === 0 ? (
//                 <p>No homework assigned yet!</p>
//             ) : (
//                 <TaskList
//                     tasks={tasks}
//                     toggleTaskCompletion={toggleTaskCompletion}
//                     deleteTask={deleteTask}
//                 />
//             )}
//         </div>
//     );
// }

// export default App;
