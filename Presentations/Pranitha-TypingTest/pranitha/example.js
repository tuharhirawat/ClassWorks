const displayText = document.getElementById("display-text").innerText;
const inputBox = document.getElementById("input-box");
const timerElement = document.getElementById("timer");
const wordCountElement = document.getElementById("word-count");
const accuracyElement = document.getElementById("accuracy");
const restartButton = document.getElementById("restart-button");

let timer = 60;
let interval = null;
let wordCount = 0;
let correctChars = 0;
let totalCharsTyped = 0;
let typingStarted = false; 

function startTimer() {
  interval = setInterval(() => {
    timer--;
    timerElement.innerText = timer;

    if (timer === 0) {
      clearInterval(interval);
      inputBox.disabled = true;
      calculateFinalStats();
    }
  }, 1000);
}

function calculateStats() {
  const inputText = inputBox.value;
  totalCharsTyped = inputText.length;

  let correct = 0;
  for (let i = 0; i < inputText.length; i++) {
    if (inputText[i] === displayText[i]) {
      correct++;
    }
  }
  correctChars = correct;

  
  wordCount = inputText.split(" ").filter(word => word !== "").length;

  wordCountElement.innerText = wordCount;
  const accuracy = totalCharsTyped > 0 ? ((correctChars / totalCharsTyped) * 100).toFixed(2) : 100;
  accuracyElement.innerText = accuracy;
}

function calculateFinalStats() {
  const finalAccuracy = totalCharsTyped > 0 ? ((correctChars / totalCharsTyped) * 100).toFixed(2) : 100;
  
  const finalScoreElement = document.getElementById("final-score");
  const finalScore = `You typed ${wordCount} words with ${finalAccuracy}% accuracy.`;
  finalScoreElement.innerText = finalScore;  
}

function restartTest() {
  clearInterval(interval);  
  timer = 60; 
  timerElement.innerText = timer; 
  wordCount = 0; 
  wordCountElement.innerText = wordCount;
  accuracyElement.innerText = 100;  
  inputBox.value = ""; 
  inputBox.disabled = false;  
  inputBox.focus();  
  totalCharsTyped = 0;  
  correctChars = 0;  
  typingStarted = false; 

  const finalScoreElement = document.getElementById("final-score");
  finalScoreElement.innerText = ''; 
}

inputBox.addEventListener("input", () => {
  if (!typingStarted) {  
    startTimer();  
    typingStarted = true;  
  }
  calculateStats();  
});

restartButton.addEventListener("click", restartTest);