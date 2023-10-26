//This function chooses a number between 0 - 2 which the result is then stored in rndIntegerChoice variable. 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var rndIntegerChoice = getRndInteger(0,2);

//Test getRndInteger Function to see if the function is working properly, and make sure it's displayed in the proper var. 
console.log(rndIntegerChoice);

//Assigns a return message to the result stored in rndIntegerChoice 
function getComputerChoice (rndIntegerChoice){
    if (rndIntegerChoice === 0){
        return "Rock";
    } else if (rndIntegerChoice === 1){
        return "Paper";
    } else {
        return "Scissor";
    }
}

//Randomly selects a choice between between Rock, Paper, or Scissor. (Test the functionality of the function getComputerChoice. 
console.log(getComputerChoice(rndIntegerChoice));

//Stores the result of the random computer choice inside a variable. 
var computerSelection = getComputerChoice(rndIntegerChoice);

//Test the variable computerSelection to make sure that the result is correct. 
console.log(computerSelection);

var getPlayerChoice = prompt("Choose your fighter: Rock, Paper or Scissors.")