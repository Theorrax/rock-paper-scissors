const allChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return allChoices[(Math.floor(Math.random() * allChoices.length))];
}

console.log(getComputerChoice());
//Line 9 is a test 