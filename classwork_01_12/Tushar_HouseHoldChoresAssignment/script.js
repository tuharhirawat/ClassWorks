    // const choresForm = document.getElementById("choresForm");
    // const taskContainer = document.getElementById("taskContainer");

    // taskContainer.addEventListener("click", function (e) {
    //     if (e.target.classList.contains("addTaskBtn")) {
    //         const taskDiv = document.createElement("div");
    //         taskDiv.classList.add("task");

    //         taskDiv.innerHTML = `
    //             <input type="text" placeholder="Name the task" class="chore-input" name="chore[]" required>
    //             <input type="text" placeholder="Assigned to" class="member-input" name="member[]" required>
    //             <button type="button" class="addTaskBtn">Add Task</button>
    //             <button type="button" class="remove-btn" onclick="removeTask(this)">Remove</button>
    //         `;
    //         taskContainer.appendChild(taskDiv);
    //     }
    // });

    // window.removeTask = function (btn) {
    //     const taskDiv = btn.parentElement;
    //     taskContainer.removeChild(taskDiv);
    // };

    // choresForm.addEventListener("submit", function (e) {
    //     e.preventDefault(); 
    //     const chores = document.querySelectorAll(".chore-input");
    //     const members = document.querySelectorAll(".member-input");

    //     let isValid = true;

    //     chores.forEach((chore, index) => {
    //         if (chore.value.trim() === "") {
    //             isValid = false;
    //             alert(`Task ${index + 1} is empty. Please fill it out.`);
    //         }
    //     });

    //     members.forEach((member, index) => {
    //         if (member.value.trim() === "") {
    //             isValid = false;
    //             alert(`Assigned member for Task ${index + 1} is empty. Please fill it out.`);
    //         }
    //     });

    //     if (isValid) {
    //         displayTasks();
    //     }
    // });

    // function displayTasks() {
    //     const output = document.getElementById("output");
    //     const chores = document.querySelectorAll(".chore-input");
    //     const members = document.querySelectorAll(".member-input");

    //     output.innerHTML = "<h2>Assigned Chores</h2>";
    //     chores.forEach((chore, index) => {
    //         output.innerHTML += `
    //             <p><strong>Task:</strong> ${chore.value} <strong>Assigned to:</strong> ${members[index].value}</p>
    //         `;
    //     });

    //     choresForm.reset(); 
    // }



    // document.addEventListener("DOMContentLoaded", () => {
    //     const taskContainer = document.getElementById("taskContainer");
        
    //     // Function to remove a task
    //     window.removeTask = (button) => {
    //         button.parentElement.remove();
    //     };
    
    //     // Function to validate input
    //     const validateInput = (taskInput, memberInput) => {
    //         const errors = [];
    
    //         // Check if task input is empty or contains numbers
    //         if (!taskInput.value.trim()) {
    //             errors.push("Task cannot be empty.");
    //         } else if (/\d/.test(taskInput.value)) {
    //             errors.push("Task cannot contain numbers.");
    //         }
    
    //         // Check if member input is empty or contains numbers
    //         if (!memberInput.value.trim()) {
    //             errors.push("Assigned member cannot be empty.");
    //         } else if (/\d/.test(memberInput.value)) {
    //             errors.push("Assigned member cannot contain numbers.");
    //         }
    
    //         return errors;
    //     };
    
    //     // Add event listener for the Add Task button
    //     taskContainer.addEventListener("click", (event) => {
    //         if (event.target.classList.contains("addTaskBtn")) {
    //             const taskDiv = event.target.parentElement;
    //             const taskInput = taskDiv.querySelector(".chore-input");
    //             const memberInput = taskDiv.querySelector(".member-input");
    //             const errors = validateInput(taskInput, memberInput);
    
    //             // Clear existing error messages
    //             const existingError = taskDiv.querySelector(".error-message");
    //             if (existingError) existingError.remove();
    
    //             if (errors.length > 0) {
    //                 // Display error message
    //                 const errorMessage = document.createElement("div");
    //                 errorMessage.className = "error-message";
    //                 errorMessage.style.color = "red";
    //                 errorMessage.style.marginTop = "5px";
    //                 errorMessage.innerText = errors.join(" ");
    //                 taskDiv.appendChild(errorMessage);
    //             } else {
    //                 // Add a new task
    //                 const newTask = document.createElement("div");
    //                 newTask.className = "task";
    //                 newTask.innerHTML = `
    //                     <input type="text" placeholder="name the task" class="chore-input" name="chore[]" required>
    //                     <input type="text" placeholder="Assigned to" class="member-input" name="member[]" required>
    //                     <button type="button" class="addTaskBtn">Add Task</button>
    //                     <button type="button" class="remove-btn" onclick="removeTask(this)">Remove</button>
    //                 `;
    //                 taskContainer.appendChild(newTask);
    //             }
    //         }
    //     });
    // });
    


    // document.addEventListener("DOMContentLoaded", function () {
    //     const taskContainer = document.getElementById("taskContainer");
    
    //     // Add event listener to dynamically add tasks
    //     taskContainer.addEventListener("click", function (event) {
    //         if (event.target.classList.contains("addTaskBtn")) {
    //             const taskElement = event.target.closest(".task");
    //             const choreInput = taskElement.querySelector(".chore-input");
    //             const memberInput = taskElement.querySelector(".member-input");
    
    //             // Clear previous error messages
    //             taskElement.querySelectorAll(".error-message").forEach(msg => msg.remove());
    
    //             // Check for validation
    //             let isValid = true;
    
    //             if (choreInput.value.trim() === "") {
    //                 showError(choreInput, "Task name cannot be empty");
    //                 isValid = false;
    //             }
    //             if (memberInput.value.trim() === "" ) {
    //                 showError(memberInput, "Assigned To must be a number");
    //                 isValid = false;
    //             }
    
    //             if (isValid) {
    //                 addNewTaskRow();
    //             }
    //         }
    //     });
    
    //     // Helper function to display error messages
    //     function showError(input, message) {
    //         const error = document.createElement("span");
    //         error.classList.add("error-message");
    //         error.textContent = message;
    //         error.style.color = "red";
    //         error.style.fontSize = "0.9em";
    //         input.parentElement.appendChild(error);
    //     }
    
    //     // Add a new task row
    //     function addNewTaskRow() {
    //         const newTask = document.createElement("div");
    //         newTask.classList.add("task");
    //         newTask.innerHTML = `
    //             <input type="text" placeholder="name the task" class="chore-input" name="chore[]" required>
    //             <input type="text" placeholder="Assigned to" class="member-input" name="member[]" required>
    //             <button type="button" class="addTaskBtn">Add Task</button>
    //             <button type="button" class="remove-btn" onclick="removeTask(this)">Remove</button>
    //         `;
    //         taskContainer.appendChild(newTask);
    //     }
    // });
    
    // // Function to remove a task
    // function removeTask(button) {
    //     const taskElement = button.closest(".task");
    //     taskElement.remove();
    // }
    

// document.addEventListener("DOMContentLoaded", () => {
//     const taskContainer = document.getElementById("taskContainer");

//     // Initially hide the Remove button for the first task
//     const firstTaskRemoveButton = taskContainer.querySelector(".remove-btn");
//     if (firstTaskRemoveButton) {
//         firstTaskRemoveButton.style.display = "none";
//     }

//     // Function to validate input fields sequentially
//     function validateFields(taskInput, memberInput) {
//         // Remove all existing error messages
//         const errorMessages = taskContainer.querySelectorAll(".error-message");
//         errorMessages.forEach((error) => error.remove());

//         // Validate task input first
//         if (!taskInput.value.trim()) {
//             showError(taskInput, "Task cannot be empty.");
//             return false;
//         } else if (/\d/.test(taskInput.value)) {
//             showError(taskInput, "Task cannot contain numbers.");
//             return false;
//         }

//         // Validate member input if task input is valid
//         if (!memberInput.value.trim()) {
//             showError(memberInput, "Assigned member cannot be empty.");
//             return false;
//         } else if (/\d/.test(memberInput.value)) {
//             showError(memberInput, "Assigned member cannot contain numbers.");
//             return false;
//         }

//         return true;
//     }

//     // Function to display an error message
//     function showError(inputElement, message) {
//         const errorMessage = document.createElement("div");
//         errorMessage.className = "error-message";
//         errorMessage.style.color = "red";
//         errorMessage.innerText = message;
//         inputElement.parentElement.appendChild(errorMessage);
//     }

//     // Add event listener to the Add Task button
//     taskContainer.addEventListener("click", (event) => {
//         if (event.target.classList.contains("addTaskBtn")) {
//             const taskDiv = event.target.parentElement;
//             const taskInput = taskDiv.querySelector(".chore-input");
//             const memberInput = taskDiv.querySelector(".member-input");

//             // Validate inputs before adding a new task
//             if (validateFields(taskInput, memberInput)) {
//                 // Show the Remove button for the first task if there are multiple tasks
//                 if (taskContainer.children.length === 1) {
//                     firstTaskRemoveButton.style.display = "inline-block";
//                 }

//                 // Add a new task
//                 const newTask = document.createElement("div");
//                 newTask.className = "task";
//                 newTask.innerHTML = `
//                     <input type="text" placeholder="name the task" class="chore-input" name="chore[]" required>
//                     <input type="text" placeholder="Assigned to" class="member-input" name="member[]" required>
//                     <button type="button" class="addTaskBtn">Add Task</button>
//                     <button type="button" class="remove-btn" onclick="removeTask(this)">Remove</button>
//                 `;
//                 taskContainer.appendChild(newTask);
//             }
//         }
//     });

//     // Function to remove a task
//     window.removeTask = function(button) {
//         const taskDiv = button.parentElement;

//         // Prevent removing the last task
//         if (taskContainer.children.length > 1) {
//             taskDiv.remove();

//             // Hide the Remove button for the first task if only one task is left
//             if (taskContainer.children.length === 1) {
//                 const firstTaskRemoveBtn = taskContainer.querySelector(".remove-btn");
//                 if (firstTaskRemoveBtn) {
//                     firstTaskRemoveBtn.style.display = "none";
//                 }
//             }
//         }
//     };
// });
    


    const taskContainer = document.getElementById("taskContainer");

    function updateRemoveButtonVisibility() {
        const tasks = taskContainer.querySelectorAll(".task");
        tasks.forEach((task, index) => {
            const removeButton = task.querySelector(".remove-btn");
            if (index === 0 && tasks.length === 1) {
                removeButton.style.display = "none"; 
            } else {
                removeButton.style.display = "inline-block"; 
            }
        });
    }

    updateRemoveButtonVisibility();

    function validateFields(taskInput, memberInput) {
        const errorMessages = taskContainer.querySelectorAll(".error-message");
        errorMessages.forEach((error) => error.remove());

        if (!taskInput.value.trim()) {
            showError(taskInput, "Task cannot be empty.");
            return false;
        } else if (/\d/.test(taskInput.value)) {
            showError(taskInput, "Task field cannot contain numbers.");
            return false;
        }

        if (!memberInput.value.trim()) {
            showError(memberInput, "Assigned member cannot be empty.");
            return false;
        } else if (/\d/.test(memberInput.value)) {
            showError(memberInput, "Assigned member cannot contain numbers.");
            return false;
        }

        return true;
    }

    function showError(inputElement, message) {
        const errorMessage = document.createElement("div");
        errorMessage.className = "error-message";
        errorMessage.style.color = "red";
        errorMessage.innerText = message;
        inputElement.parentElement.appendChild(errorMessage);
    }

    taskContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("addTaskBtn")) {
            const taskDiv = event.target.parentElement;
            const taskInput = taskDiv.querySelector(".chore-input");
            const memberInput = taskDiv.querySelector(".member-input");

            const nextTask = taskDiv.nextElementSibling;
            if (nextTask) {
                const nextTaskInput = nextTask.querySelector(".chore-input");
                const nextMemberInput = nextTask.querySelector(".member-input");

                if (!validateFields(nextTaskInput, nextMemberInput)) {
                    return;
                }
            }

            if (validateFields(taskInput, memberInput)) {
                const newTask = document.createElement("div");
                newTask.className = "task";
                newTask.innerHTML = `
                    <input type="text" placeholder="name the task" class="chore-input" name="chore[]" required>
                    <input type="text" placeholder="Assigned to" class="member-input" name="member[]" required>
                    <button type="button" class="addTaskBtn">Add Task</button>
                    <button type="button" class="remove-btn" onclick="removeTask(this)">Remove</button>
                `;
                taskContainer.appendChild(newTask);
                updateRemoveButtonVisibility(); 
            }
        }
    });

    window.removeTask = function (button) {
        const taskDiv = button.parentElement;

        if (taskContainer.children.length > 1) {
            taskDiv.remove();
            updateRemoveButtonVisibility(); 
        }
    };

