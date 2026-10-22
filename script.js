const userChoice = document.querySelectorAll('.choice');
const playerScore = document.querySelector('.player-score-counter');
const computerScore = document.querySelector('.computer-score-counter');
const reset = document.querySelector('.reset-btn');
const gameWinner = document.querySelector('.game-result');

const getComputerChoice = () => {
  const variants = ['rock', 'paper', 'scissors'];

  const computerChoice = Math.floor(Math.random() * variants.length);

  return variants[computerChoice];
}

const playRound = (playerSelection, computerSelection) => {
  const draw = `Computer choice - ${computerSelection}. Draw!`;
  const playerWin = `Computer choice - ${computerSelection}. You win!`;
  const computerWin = `Computer choice - ${computerSelection}. Computer wins!`;

  if (playerSelection === computerSelection) {
    return {
      result: 'draw',
      message: draw
    }
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') || 
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return {
      result: 'win',
      message: playerWin
    }
  } else {
    return {
      result: 'lose',
      message: computerWin
    }
  }
}

const updateUI = (result) => {
  gameWinner.textContent = result.message;

  switch (result.result) {
    case 'win':
      playerScore.textContent++;
      break;
    case 'lose':
      computerScore.textContent++;
      break;
  }
}

const getPlayerChoice = () => {
  userChoice.forEach((button) => {
    button.addEventListener('click', () => {
      const playerChoice = button.dataset.choice;

      const computerChoice = getComputerChoice();

      const gameResult = playRound(playerChoice, computerChoice);

      updateUI(gameResult);
    });
  });
}

const resetGame = () => {
  reset.addEventListener('click', () => {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    gameWinner.textContent = 'Make your move to start the game';
  })
}


resetGame();
getPlayerChoice();
