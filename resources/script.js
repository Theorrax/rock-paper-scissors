//Variable that stores the choice of Rock, Paper, or Scissor.
const allChoices = ["ROCK", "PAPER", "SCISSORS"]

function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min; 
}

