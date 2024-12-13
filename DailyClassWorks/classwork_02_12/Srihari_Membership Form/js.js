    document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("membership-form");
    const familyMembers = document.getElementById("family-members");
    const addMemberButton = document.getElementById("add-member");
  
  
    addMemberButton.addEventListener("click", () => {
      const memberCount = familyMembers.children.length;
      const newMember = document.createElement("div");
      newMember.classList.add("family-member");
  
      newMember.innerHTML = `
        <label for="name-${memberCount}">Full Name:</label>
        <input type="text" id="name-${memberCount}" name="name[]" class="name" placeholder="Enter full name" required>
        <span class="error"></span>
  
        <label for="age-${memberCount}">Age:</label>
        <input type="number" id="age-${memberCount}" name="age[]" class="age" placeholder="Enter age" min="0" required>
        <span class="error"></span>
  
        <label for="email-${memberCount}">Email:</label>
        <input type="email" id="email-${memberCount}" name="email[]" class="email" placeholder="Enter email" required>
        <span class="error"></span>
  
        <button type="button" class="remove-btn">Remove</button>
      `;
  
      familyMembers.appendChild(newMember);
  
     
      const removeButton = newMember.querySelector(".remove-btn");
      removeButton.style.display = "block";
      removeButton.addEventListener("click", () => {
        familyMembers.removeChild(newMember);
      });
    });
  
    // Live validation
    familyMembers.addEventListener("input", (event) => {
      const input = event.target;
      const errorSpan = input.nextElementSibling;
  
      if (input.classList.contains("name")) {
        if (input.value.trim() === "") {
          errorSpan.textContent = "Name is required.";
        } else {
          errorSpan.textContent = "";
        }
      }
  
      if (input.classList.contains("age")) {
        if (input.value < 0 || input.value === "") {
          errorSpan.textContent = "Age must be a positive number.";
        } else {
          errorSpan.textContent = "";
        }
      }
  
      if (input.classList.contains("email")) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(input.value)) {
          errorSpan.textContent = "Invalid email format.";
        } else {
          errorSpan.textContent = "";
        }
      }
    });
  
   
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Form submitted successfully!");
    });
  });
  


  function Counter(){
    const[count,setcount]=useState(0)
    const handleincrement=()=>{
        
    }
  }