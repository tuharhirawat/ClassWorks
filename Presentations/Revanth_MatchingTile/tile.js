const symbols = ['😊', '😊', '😍', '😍', '🤣', '🤣', '😎', '😎', '🥰', '🥰', '🫣', '🫣', '🤡', '🤡', '😀', '😀'];
let shuffledSymbols = symbols.sort(() => Math.random() - 0.5);

const gameContainer = document.getElementById('gameContainer');
const attemptsDisplay = document.getElementById('attempts');
const highScoreDisplay = document.getElementById('highScore');

let firstTile = null;
let secondTile = null;
let lockBoard = false;
let attempts = 0;
let matches = 0;
const totalMatches = symbols.length / 2;

const highScore = localStorage.getItem('highScore');
if (highScore) {
  highScoreDisplay.textContent = highScore;
}

function createTiles() {
  shuffledSymbols.forEach(symbol => {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.dataset.symbol = symbol;
    tile.addEventListener('click', handleTileClick);
    gameContainer.appendChild(tile);
  });
}

function handleTileClick(event) {
  if (lockBoard) return;
  const clickedTile = event.target;

  if (clickedTile === firstTile || clickedTile.classList.contains('matched')) return;

  clickedTile.textContent = clickedTile.dataset.symbol;

  if (!firstTile) {
    firstTile = clickedTile;
    return;
  }

  secondTile = clickedTile;
  attempts++;
  attemptsDisplay.textContent = attempts;
  checkForMatch();
}

function checkForMatch() {
  if (firstTile.dataset.symbol === secondTile.dataset.symbol) {
    firstTile.classList.add('matched');
    secondTile.classList.add('matched');
    matches++;
    if (matches === totalMatches) {
      displayGameOver();
    }
    resetSelection();
  } else {
    lockBoard = true;
    setTimeout(() => {
      firstTile.textContent = '';
      secondTile.textContent = '';
      resetSelection();
    }, 1000);
  }
}

function resetSelection() {
  firstTile = null;
  secondTile = null;
  lockBoard = false;
}

function displayGameOver() {
  gameContainer.innerHTML = `
    <div class="game-over">
      <h2>Game Over!</h2>
      <p>Your Score: ${attempts} attempts</p>
      ${updateHighScore()}
      <button onclick="resetGame()">Play Again</button>
    </div>
  `;
}

function updateHighScore() {
  if (!highScore || attempts < highScore) {
    localStorage.setItem('highScore', attempts);
    highScoreDisplay.textContent = attempts;
    return `<p>New High Score: ${attempts} attempts!</p>`;
  }
  return '';
}

function resetGame() {
  attempts = 0;
  matches = 0;
  attemptsDisplay.textContent = attempts;
  gameContainer.innerHTML = '';
  shuffledSymbols = symbols.sort(() => Math.random() - 0.5);
  createTiles();
}

document.getElementById('resetBtn').addEventListener('click', resetGame);

createTiles();
