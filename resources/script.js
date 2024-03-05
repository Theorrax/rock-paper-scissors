const allChoices = ["ROCK", "PAPER", "SCISSORS"]
let computerChioce = generateComputerChoice();

function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min; 
}

function generateComputerChoice () {
    let number = getRandomNumber(0, 100)
    if (number <= 33) {
        return allChoices[0];
    } else if (number >= 34 && number <= 66) {
        return allChoices[1];
    } else if (number >= 67) {
        return allChoices[2];
    }
}
