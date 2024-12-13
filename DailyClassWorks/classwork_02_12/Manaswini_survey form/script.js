let questionCount = 0;

// Function to add a new question dynamically
function addQuestion() {
  questionCount++;

  // Create a new div container for the question
  const questionContainer = document.createElement('div');
  questionContainer.classList.add('question-container');
  questionContainer.id = `question-${questionCount}`;

  // Default question text and options
  const questionText = '';
  const options = [''];

  // Add HTML structure for the question
  questionContainer.innerHTML = `
    <h3>Question ${questionCount}:</h3>
    <label for="questionText-${questionCount}">Question Text</label>
    <input type="text" id="questionText-${questionCount}" class="question-text" placeholder="Enter your question" value="${questionText}" required>
    
    <div class="options-section" id="options-${questionCount}">
      <label>Options:</label>
      ${options.map((option, index) => `
        <div class="option-input">
          <input type="radio" name="question-${questionCount}" class="option" value="${option}" required>
          <input type="text" class="option-text" placeholder="Option ${index + 1}" value="${option}" required>
        </div>
      `).join('')}
    </div>

    <button type="button" class="btn add-btn" onclick="addOption(${questionCount})">Add Option</button>
    <button type="button" class="btn delete-btn" onclick="deleteQuestion(${questionCount})">Delete Question</button>
  `;

  // Append the new question to the form
  document.getElementById('questionsSection').appendChild(questionContainer);
}

// Function to add a new option to a question
function addOption(questionId) {
  const optionsSection = document.getElementById(`options-${questionId}`);
  const options = optionsSection.querySelectorAll('.option-input').length;

  // Add a new option input field (radio and text)
  const newOptionHTML = `
    <div class="option-input">
      <input type="radio" name="question-${questionId}" class="option" value="" required>
      <input type="text" class="option-text" placeholder="Option ${options + 1}" required>
    </div>
  `;
  
  optionsSection.innerHTML += newOptionHTML;
}

// Function to delete a question
function deleteQuestion(questionId) {
  const questionContainer = document.getElementById(`question-${questionId}`);
  questionContainer.remove();
}

// Function to handle form submission
function submitForm(event) {
  event.preventDefault();  // Prevent the default form submission

  const formData = [];

  // Loop through each question in the form
  const questions = document.querySelectorAll('.question-container');
  questions.forEach((questionContainer, index) => {
    const questionText = questionContainer.querySelector('.question-text').value.trim();
    const options = questionContainer.querySelectorAll('.option-input');

    // Get selected option
    let selectedOption = null;
    options.forEach(optionContainer => {
      const radioButton = optionContainer.querySelector('input[type="radio"]');
      if (radioButton.checked) {
        selectedOption = optionContainer.querySelector('input[type="text"]').value.trim();
      }
    });

    // Add the question and selected option to formData
    formData.push({
      question: questionText,
      selectedOption: selectedOption || "No option selected"
    });
  });

  // Here, you could either send formData to a server, or log it to the console for testing
  console.log("Survey Data Submitted:", formData);

  // Optional: Show an alert or feedback message
  alert("Survey submitted successfully!");
}

// Add event listener to the form
document.getElementById('surveyForm').addEventListener('submit', submitForm);
