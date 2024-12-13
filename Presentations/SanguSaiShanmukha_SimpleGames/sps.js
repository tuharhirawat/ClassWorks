const rock = document.getElementById("rock");
const paper=document.getElementById("paper");
const scissors=document.getElementById("scissors")
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const computer=document.getElementById("compresponse")
const resetbtn=document.getElementById("reset")

let spanner=document.createElement('span')

let playerScore = 0;
let computerScore = 0;
let max_score=10

function scorechecker(){
  if(playerScore ===max_score)
  {
    spanner.textContent="You Won"
    resetbtn.before(spanner)
    setTimeout(reset,5000)
    playerScore=0
    computerScore=0
    return
    
  }
  if(computerScore ===max_score)
    {
      spanner.textContent="You lose"
      resetbtn.before(spanner)
      setTimeout(reset,1000)
      playerScore=0
      computerScore=0
      return
    }
}

rock.addEventListener("click", () => {
  const result = playRound(rock.id, computerPlay());
  
  resultEl.textContent = result;
  scorechecker()
});

paper.addEventListener("click", () => {
  const result = playRound(paper.id, computerPlay());
  
  resultEl.textContent = result;
  scorechecker()
});

scissors.addEventListener("click", () => {
  const result = playRound(scissors.id, computerPlay());
  
  resultEl.textContent = result;
  scorechecker()
});

resetbtn.addEventListener('click',()=>{
  reset();
})



function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  computer.textContent=`The Computer choosed ${choices[randomChoice]}`;
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

function reset()
{
  computer.textContent=""
  resultEl.textContent=""
  spanner.textContent=""
  playerScoreEl.textContent=0
  computerScoreEl.textContent=0

}