const allChoices = ["ROCK", "PAPER", "SCISSORS"]
const displayPlayerScore = document.getElementById("displayPlayerScore");
const displayComputerScore = document.getElementById("displayComputerScore");
const initializeGame = document.getElementById("initializeGame");
const startScreen = document.querySelector(".startScreen");
const generateGame = document.querySelector(".generateGame");
let computerChoice = null;
let playerChoice = null;
let playerScore = 0;
let computerScore = 0;

initializeGame.addEventListener("click", () => {
    loadGame();
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

function playerChoiceRock () {
        keepScoreCount();
        playerChoice = allChoices[0];
        computerChoice = generateComputerChoice();
    };
function playerChoicePaper () {
        keepScoreCount();
        playerChoice = allChoices[1];
        computerChoice = generateComputerChoice();
    };
function playerChoiceScissors () {
        keepScoreCount();
        playerChoice = allChoices[2];
        computerChoice = generateComputerChoice();
    };

function loadGame () {
    startScreen.remove();
    const generateGame = document.createElement("div");
    generateGame.classList.add("generateGame");
    document.body.appendChild(generateGame);
    const scoreCard = document.createElement("p");
    scoreCard.setAttribute("id", "scoreCard");
    scoreCard.innerHTML = `Current Score: Player <span id="displayPlayerScore">0</span> Computer <span id="displayComputerScore">0</span>`
    generateGame.appendChild(scoreCard);
    const outcome = document.createElement("p")
    outcome.setAttribute("id", "outcome");
    outcome.innerText = "";
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
    const scissors = document.createElement("button");
    scissors.setAttribute("id", "scissors")
    scissors.textContent = "scissors";
    generateGame.appendChild(scissors);
    scissors.addEventListener("click", () => {
        playerChoiceScissors();
    });
    } 

function match () {
        if (playerChoice === allChoices[0] && computerChoice === allChoices[2]) {
            playerScore++;
            outcome.innerText = "You win! The rock smashed the scissors";
            displayMatchResults();
        } else if (playerChoice === allChoices[1] && computerChoice === allChoices[0]) {
            playerScore++;
            outcome.innerText  = "You win! The paper covers the rock";
            displayMatchResults();
        } else if (playerChoice === allChoices[2] && computerChoice === allChoices[1]) {
            playerScore++;
            outcome.innerText  = "You win! The scissors slice through the paper";
            displayMatchResults();
        } else if (playerChoice === computerChoice) {
            outcome.innerText = "It's a tie!";
            displayMatchResults();
        } else {
            computerScore++
            outcome.innerText  = "You lose!";
            displayMatchResults();
        }
    }

function displayMatchResults () {
    scoreCard.innerText = "Current Score: Player " + playerScore + " Computer " + computerScore;
};

function keepScoreCount () {
    if (playerScore === 5 || computerScore === 5) {
        endGame();
    } else {
        match();
    }
}

function endGame () {
    const generateGame = document.querySelector(".generateGame")
    generateGame.remove();
    const displayGameConclusion = document.createElement("div")
    displayGameConclusion.classList.add("displayGameConclusion")
    document.body.appendChild(displayGameConclusion)
    if (playerScore >= 5) {
        const playerWinScreen = document.createElement("p")
        playerWinScreen.textContent = "You win! The final score is Player: " + playerScore + " vs. Computer: " + computerScore;
        displayGameConclusion.appendChild(playerWinScreen)
    } else {
        const computerWinScreen = document.createElement("p")
        computerWinScreen.innerText = "You lose! The final score is Player: " + playerScore + " vs. Computer: " + computerScore;
        displayGameConclusion.appendChild(computerWinScreen)
    }
    const newGame = document.createElement("button")
    newGame.textContent = "Play again?"
    newGame.addEventListener("click", () => {
        loadGame();
        displayGameConclusion.remove();
        playerScore = 0;
        computerScore = 0;
    })
    displayGameConclusion.appendChild(newGame); 
};
