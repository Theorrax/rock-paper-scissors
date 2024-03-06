const allChoices = ["ROCK", "PAPER", "SCISSORS"]
let computerChoice = generateComputerChoice();
let playerChoice = null;

function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min; 
}

function generateComputerChoice () {
    let number = getRandomNumber(0, 100)
    if (number <= 33) {
        return allChoices[0];
    } else if (number >= 34 && number <= 66) {
        return allChoices[1];
    } else {
        return allChoices[2];
    }
}

let displayPlayerChoice = document.getElementById("displayPlayerChoice");
const rock = document.body.querySelector("#rock");
const paper = document.body.querySelector("#paper");
const scissors = document.body.querySelector("#scissors");


rock.addEventListener("click", () => {
    playerChoice = allChoices[0];
    displayPlayerChoice.innerText = playerChoice;
});

paper.addEventListener("click", () => {
    playerChoice = allChoices[1];
    displayPlayerChoice.innerText = playerChoice;
});

scissors.addEventListener("click", () => {
    playerChoice = allChoices[2];
    displayPlayerChoice.innerText = playerChoice;
});

