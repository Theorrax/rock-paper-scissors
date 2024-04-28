const allChoices = ["ROCK", "PAPER", "SCISSORS"]
const outcome = document.getElementById("outcome");
const displayPlayerScore = document.getElementById("displayPlayerScore");
const displayComputerScore = document.getElementById("displayComputerScore");
const initializeGame = document.getElementById("initializeGame");
let computerChoice = null;
let playerChoice = null;
let matchResults = null;
let playerScore = 0;
let computerScore = 0;

initializeGame.addEventListener("click", () => {
    loadGame();
});

function loadGame () {
    initializeGame.remove();
    const generateGame = document.createElement("div");
    generateGame.classList.add("generateGame");
    document.body.appendChild(generateGame);
    const scoreCard = document.createElement("p");
    scoreCard.setAttribute("id", "scoreCard");
    scoreCard.innerHTML = `Current Score: Player <span id="displayPlayerScore">0</span> Computer <span id="displayComputerScore">0</span>`
    generateGame.appendChild(scoreCard);
    const outcome = document.createElement("p")
    outcome.setAttribute("id", "outcome");
    generateGame.appendChild(outcome);
    const rock = document.createElement("button");
    rock.setAttribute("id", "rock")
    rock.textContent = "Rock";
    generateGame.appendChild(rock);
    rock.addEventListener("click", () => {
        playerChoiceRock();
    });
    const paper = document.createElement("button");
    paper.setAttribute("id", "paper")
    paper.textContent = "Paper";
    generateGame.appendChild(paper);
    paper.addEventListener("click", () => {
        playerChoicePaper();
    });
    const Scissors = document.createElement("button");
    Scissors.setAttribute("id", "scissors")
    Scissors.textContent = "Scissors";
    generateGame.appendChild(Scissors);
    scissors.addEventListener("click", () => {
        playerChoiceScissors();
    });
}

function playerChoiceRock () {
    playerChoice = allChoices[0];
    computerChoice = generateComputerChoice();
    match();
};

function playerChoicePaper () {
    playerChoice = allChoices[1];
    computerChoice = generateComputerChoice();
    match();
};

function playerChoiceScissors () {
    playerChoice = allChoices[2];
    computerChoice = generateComputerChoice();
    match();
};

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

/*To Do: 
    - The game will begin with a start button. 
    -Once the start button is clicked. The game will generate, this can be achieved using a eventListener. 
    -Once the game is loaded, the game screen will display the three choices that the player can make. This screen will also display a running count of the score of the game starting at 0 v. 0. Below the buttons will be a box that will display the outcome of the match 
*/

if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
        //Display the player winning code
    } else {
        //Display the computer winning code
    }
} else {
    //Continue to play the game 
    //match should be used here. 
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
    scoreCard.innerText = "Current Score: Player " + playerScore + " Computer " + computerScore
};