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
        playerChoice = allChoices[0];
        computerChoice = generateComputerChoice();
        keepScoreCount();
    };
function playerChoicePaper () {
        playerChoice = allChoices[1];
        computerChoice = generateComputerChoice();
        keepScoreCount();
    };
function playerChoiceScissors () {
        playerChoice = allChoices[2];
        computerChoice = generateComputerChoice();
        keepScoreCount();
    };


// Pretty sure most of my issues are coming from the face that the generateGame is defined in the function but can't be seen in the global scope. 
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
    if (playerScore >= 5 || computerScore >= 5) {
        endGame();
    } else {
        match();
    }
}

function endGame () {
    endGamePrompt.remove();
    const endGamePrompt = document.createElement("div")
    endGamePrompt.classList.add("endGamePrompt")
    document.body.appendChild(endGamePrompt)


/*
TO DO List endGame(): 

- Create a final score count that displays a final score count something that would look like 

if (playerScore >= 5) {
    "You win! The final score Player: {$playerScore} vs. Computer: {$computerScore}"
} else {
    "You Loss! The final score Player: {$playerScore} vs. Computer: {$computerScore}"
}

- Include a button "Play Again?" 

button.eventListener() => {
    loadGame()
}

- Maybe instead of creating a new div that contains a new class the function could recall the prior use of the startScreen Class but instead remain the class using the classList.add("endGame")
*/ 

    
};
