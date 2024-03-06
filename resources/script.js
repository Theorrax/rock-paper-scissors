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

const rock = document.body.querySelector("#rock");
const paper = document.body.querySelector("#paper");
const scissors = document.body.querySelector("#scissors");


rock.addEventListener("click", () => {
    playerChoice = allChoices[0];
    match()
});

paper.addEventListener("click", () => {
    playerChoice = allChoices[1];
    match()
});

scissors.addEventListener("click", () => {
    playerChoice = allChoices[2];
    match()
});


function match () {
if (playerChoice === allChoices[0] && computerChoice === allChoices[2]) {
    playerChoice = null
    return console.log("You win! The rock smashed the scissors")
} else if (playerChoice === allChoices[1] && computerChoice === allChoices[0]) {
    playerChoice = null
    return console.log("You win! The paper covers the rock")
} else if (playerChoice === allChoices[2] && computerChoice === allChoices[1]) {
    playerChoice = null
    return console.log("You win! The scissors slice through the paper")
} else if (playerChoice === computerChoice) {
    console.log("It's a tie!")
} else {
    return console.log("You lose!")
}
}


