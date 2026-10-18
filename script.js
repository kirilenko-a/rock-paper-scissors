const getPlayerName = () => {
  const playerName = prompt('Enter your name');

  return playerName;
}

const playerName = getPlayerName();

const getComputerChoice = () => {
  const variants = ['rock', 'paper', 'scissors'];

  const getRandomInt  = (max) => Math.floor(Math.random() * max);

  const computerChoice = variants[getRandomInt(3)];

  return computerChoice;
}

const getHumanChoice = () => {
  let humanChoice = prompt('Make your choice(rock, paper or scissors)');

  return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    console.log('Draw!');
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') || 
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ){
    console.log(`${playerName} wins`);
    humanScore++;
  } else {
    console.log('Computer wins!');
    computerScore++;
  }

  console.log(`${playerName} ${humanScore} - ${computerScore} Computer`);
}

const playGame = () => {
  let rounds = 1;

  while (rounds <= 5) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    console.log(`Round - ${rounds}`);
    console.log(`Your choice - ${humanSelection}`);
    console.log(`Computer choice - ${computerSelection}`);

    playRound(humanSelection, computerSelection);
    rounds++;
  }

  if (humanScore > computerScore) {
    console.log(`${playerName} wins!`);
  } else if (computerScore > humanScore) {
    console.log('Computer wins!');
  } else {
    console.log('Draw!');
  }
}

playGame();
