const allChoices = ["ROCK", "PAPER", "SCISSORS"]
let computerChioce = generateComputerChoice();
let playerChoice = "";

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

const rock = document.body.querySelector("#rock");

rock.addEventListener("click", () => {
    return playerChoice = allChoices[0];
});

const paper = document.body.querySelector("#paper")

paper.addEventListener("click", () => {
    return playerChoice = allChoices[1];
});

const scissors = document.body.querySelector("#scissors")

scissors.addEventListener("click", () => {
    return playerChoice = allChoices[2];
});

