const allChoices = ["ROCK", "PAPER", "SCISSORS"]
const rock = document.body.querySelector("#rock");
const paper = document.body.querySelector("#paper");
const scissors = document.body.querySelector("#scissors");
const outcome = document.getElementById("outcome");
const displayPlayerScore = document.getElementById("displayPlayerScore");
const displayComputerScore = document.getElementById("displayComputerScore");
let computerChoice = null;
let playerChoice = null;
let matchResults = null;
let playerScore = 0;
let computerScore = 0;


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

function match () {
    if (playerChoice === allChoices[0] && computerChoice === allChoices[2]) {
        displayMatchResults();
        playerScore++;
        matchResults = "You win! The rock smashed the scissors";
    } else if (playerChoice === allChoices[1] && computerChoice === allChoices[0]) {
        displayMatchResults();
        playerScore++;
        matchResults = "You win! The paper covers the rock";
    } else if (playerChoice === allChoices[2] && computerChoice === allChoices[1]) {
        displayMatchResults();
        playerScore++;
        matchResults = "You win! The scissors slice through the paper";
    } else if (playerChoice === computerChoice) {
        displayMatchResults()
        matchResults = "It's a tie!";
    } else {
        displayMatchResults()
        computerScore++
        matchResults = "You lose!";
    }
}

function displayMatchResults () {
    playerChoice = null;
    computerChoice = null;
    outcome.innerText = matchResults;
    displayPlayerScore.innerText = playerScore;
    displayComputerScore.innerText = computerScore;
}