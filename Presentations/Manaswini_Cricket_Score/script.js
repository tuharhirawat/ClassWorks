totalScoreA = document.getElementById('teamA-score');
totalScoreB = document.getElementById('teamB-score');

let teamAScore = 0;
let teamBScore = 0;

function updateScore(team, runs) {
  if (team === 'teamA') {
    teamAScore += runs;
    totalScoreA.textContent = teamAScore;
  } else if (team === 'teamB') {
    teamBScore += runs;
    totalScoreB.textContent = teamBScore;
  }
}

