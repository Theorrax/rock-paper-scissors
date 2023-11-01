const allChoices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice(){
    return allChoices[(Math.floor(Math.random() * allChoices.length))];
}

var playerEntry = prompt("Choose your hand: Rock, Paper or Scissors").toUpperCase()
let playerScore = 0;
let computerScore = 0;

function playRound (computerSelection, playerSelection){
    var computerSelection = getComputerChoice();
    var playerSelection = playerEntry;
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        playerScore += 1;
        return "You win Rock smashes Scissors!";
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        playerScore += 1;
        return "You win Paper suffocates Rock!";
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        playerScore += 1;
        return "You're sharp, Scissors beats Paper!";
    } else if (playerSelection === computerSelection) {
        return "It's a tie try again!"
    } else {
        computerScore +=1;
        return "You lose, try again!";
    }
}

console.log(playRound());

//TO DO: Make a loop until the computer or the player gets to five.
