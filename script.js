let playerScore = 0;
let computerScore = 0;
const maxScore = 5;

const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const gameUpdate = document.getElementById("game-update");

function getComputerChoice() {
    const choices = ["rock","paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices [randomIndex];
}

function scoreIsFive() {
    drawRock.removeEventListener("click", clickRock);
    drawPaper.removeEventListener("click", clickPaper);
    drawScissors.removeEventListener("click", clickScissors);
};

function playHand(playerSelection) {
    computerSelection = getComputerChoice();
    
    let roundResult;

    if (playerSelection === computerSelection) {
        roundResult = `It's a tie! You both drew ${playerSelection}.`
    }
    else if ( (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")){
        roundResult = `You win this round, ${playerSelection} beats ${computerSelection}.`;
        playerScore += 1;
    }
    else{
        roundResult = `You lose this round, ${computerSelection} beats ${playerSelection}.`;
        computerScore += 1;
    }

    playerScoreElement.textContent = `Player's Score: ${playerScore}`;
    computerScoreElement.textContent = `Computer's Score: ${computerScore}`;

            if (playerScore >= maxScore){
                gameUpdate.textContent = "You the game! Congratz!!!"; scoreIsFive();
            } 
            else if (computerScore >= maxScore) {
                gameUpdate.textContent = "You lost the game.. Better luck next time!"; scoreIsFive();
            }
            else {
                gameUpdate.textContent = roundResult
            };
};

function clickRock(){
        playHand("rock")
    };
    function clickPaper(){
        playHand("paper")
    };
    function clickScissors(){
        playHand("scissors")
};

const drawRock = document.querySelector(".rock"); 
const drawPaper = document.querySelector(".paper"); 
const drawScissors = document.querySelector(".scissors"); 

drawRock.addEventListener("click", clickRock);
drawPaper.addEventListener("click", clickPaper);
drawScissors.addEventListener("click", clickScissors);