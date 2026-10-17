const getComputerChoice = () => {
  const variants = ['rock', 'paper', 'scissors'];

  const getRandomInt  = (max) => Math.floor(Math.random() * max);

  return variants[getRandomInt(3)];
}

const computerSelection = getComputerChoice();

const getHumanChoice = () => {
  const humanChoice = prompt('Make your choise(rock, paper or scissors)');

  return humanChoice.toLowerCase();
}

const humanSelection = getHumanChoice();

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
  
}

