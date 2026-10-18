const getComputerChoice = () => {
  const variants = ['rock', 'paper', 'scissors'];

  const getRandomInt  = (max) => Math.floor(Math.random() * max);

  const computerChoice = variants[getRandomInt(3)];

  return computerChoice;
}


const getHumanChoice = () => {
  const humanChoice = prompt('Make your choise(rock, paper or scissors)');

  return humanChoice.toLowerCase();
}


let humanScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    console.log('Draw!');
  } else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log('You win!');
    humanScore++;
  } else {
    console.log('Computer wins!');
    computerScore++;
  }
}


console.log(`Your choice - ${humanSelection}`);
console.log(`Computer choice - ${computerSelection}`);
const roundResult = playRound(humanSelection, computerSelection);
console.log(roundResult);
console.log(`You ${humanScore} : ${computerScore} Computer`);