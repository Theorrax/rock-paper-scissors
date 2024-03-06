const allChoices = ["ROCK", "PAPER", "SCISSORS"]
let computerChoice = null;
let playerChoice = null;
let playerScore = 0;
let computerScore = 0;

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
let matchResults = null;
const displayMatchResults = document.getElementById("displayMatchResults");


rock.addEventListener("click", () => {
    playerChoice = allChoices[0];
    computerChoice = generateComputerChoice();
    match()
});

paper.addEventListener("click", () => {
    playerChoice = allChoices[1];
    computerChoice = generateComputerChoice();
    match()
});

scissors.addEventListener("click", () => {
    playerChoice = allChoices[2];
    computerChoice = generateComputerChoice();
    match()
});


function match () {
if (playerChoice === allChoices[0] && computerChoice === allChoices[2]) {
    playerChoice = null;
    computerChoice = null;
    playerScore++;
    matchResults = "You win! The rock smashed the scissors";
    displayMatchResults.innerText = matchResults;
} else if (playerChoice === allChoices[1] && computerChoice === allChoices[0]) {
    playerChoice = null;
    computerChoice = null;
    playerScore++;
    matchResults = "You win! The paper covers the rock";
    displayMatchResults.innerText = matchResults;
} else if (playerChoice === allChoices[2] && computerChoice === allChoices[1]) {
    playerChoice = null;
    computerChoice = null;
    playerScore++;
    matchResults = "You win! The scissors slice through the paper";
    displayMatchResults.innerText = matchResults;
} else if (playerChoice === computerChoice) {
    playerChoice = null;
    computerChoice = null;
    matchResults = "It's a tie!";
    displayMatchResults.innerText = matchResults;
} else {
    playerChoice = null
    computerChoice = null
    computerScore++
    matchResults = "You lose!";
    displayMatchResults.innerText = matchResults;
}
}


