document.getElementById("goalForm").addEventListener("submit", function(e) {
    e.preventDefault();  

    
    const goal = document.getElementById("goal").value;
    const target = document.getElementById("target").value;
    const progress = document.getElementById("progress").value;

    
    if (!goal || !target || !progress) {
        displayMessage("Please fill in all fields.", "error");
        return;
    }

    
    const goalRegex = /^[A-Za-z\s]+$/;  
    if (!goalRegex.test(goal)) {
        displayMessage("Please enter letters only for the fitness goal.", "error");
        return;
    }

    if (target <= 0 || progress < 0) {
        displayMessage("Target must be greater than 0 and progress cannot be negative.", "error");
        return;
    }

    if (progress > target) {
        displayMessage("Progress cannot exceed the target value.", "error");
        return;
    }

    
    addGoal(goal, target, progress);


    document.getElementById("goal").value = "";
    document.getElementById("target").value = "";
    document.getElementById("progress").value = "";
});

function addGoal(goal, target, progress) {
    const goalList = document.getElementById("goalList");


    const goalItem = document.createElement("div");
    goalItem.classList.add("goal-item");

    
    const progressPercentage = (progress / target) * 100;


    goalItem.innerHTML = `
        <span><strong>${goal}</strong></span>
        <div class="progress-bar-container">
            <div class="progress-bar" style="width: ${progressPercentage}%;"></div>
        </div>
        <span>${progress}/${target}</span>
    `;

    
    goalList.appendChild(goalItem);


    displayMessage("Goal added successfully!", "success");
}

function displayMessage(message, type) {
    const messageBox = document.getElementById("message");
    messageBox.textContent = message;
    messageBox.style.color = type === "error" ? "red" : "green";
    setTimeout(() => {
        messageBox.textContent = "";
    }, 3000);
}
