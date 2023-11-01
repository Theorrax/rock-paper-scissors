const allChoices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice(){
    return allChoices[(Math.floor(Math.random() * allChoices.length))];
}


function game (playerScore, computerScore) {
    //Line 9 is a function which plays 5 games. 
    var playerScore = 0;
    var computerScore = 0;
    function playRound (computerSelection, playerSelection){
        //line 13 is a function which plays one round, keeping track of the score and displays weather you win or lose. 
        var playerEntry = prompt("Choose your hand: Rock, Paper or Scissors").toUpperCase()
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
    function gameOutcome (){
        //Line 34 is a function which will take the running count of the score and determine who has the most points out of 5, and then displays the results of the winner in the console. 
        if (playerScore > computerScore) {
            return "You win!"
        } else if (playerScore === computerScore) {
            return "It's a draw!"
        } else {
            return "You lose!"
        }
    }
    //Lines 45-54 return the results of the round, and displays the running score count of the game.
    console.log(playRound());
    console.log("Your score is " + playerScore, "Computer score is " + computerScore);
    console.log(playRound());
    console.log("Your score is " + playerScore, "Computer score is " + computerScore);
    console.log(playRound());
    console.log("Your score is " + playerScore, "Computer score is " + computerScore);
    console.log(playRound());
    console.log("Your score is " + playerScore, "Computer score is " + computerScore);
    console.log(playRound());
    console.log("Your score is " + playerScore, "Computer score is " + computerScore);
    // Line 56 displays the results of the game in the console. 
    console.log(gameOutcome());
}

// Line 60 runs the function to play the game. 
game();

//TO DO: Make a loop function which plays the game until either the player or the computer gets to five wins. 