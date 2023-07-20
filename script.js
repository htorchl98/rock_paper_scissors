let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock","paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices [randomIndex];
}

const randomChoice = getComputerChoice();

//Pseudocode for step 5
//Write a function that plays a single round of Rock Paper Scissors. 
//The function should take two parameters - the playerSelection and computerSelection - 
//and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
//Make your function’s playerSelection parameter case-insensitive 
//(so users can input rock, ROCK, RocK or any other variation).

//Need prompt for input of your hand,
//the hand has to be case insensitive
//need to do conditional based on both selections and print out a string saying whether youve won 
function game(){
function playHand(playerSelection, computerSelection) {
    playerSelection = prompt("Draw hand.").toLowerCase();
    computerSelection = randomChoice;
    
    let roundResult;

    if (playerSelection === "rock" && computerSelection === "rock") {
        roundResult = "It's a tie! You both drew rock"
        }
        else if (playerSelection === "rock" && computerSelection === "paper") {
        roundResult = "You lose this round! Paper beats rock.";
        computerScore += 1;
        }
        else if (playerSelection === "rock" && computerSelection === "scissors") {
        roundResult = "You win this round! Rock beats scissors.";
        playerScore += 1;
        }
        else if (playerSelection === "paper" && computerSelection === "paper") {
        roundResult = "It's a tie! You both drew paper"
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {
        roundResult = "You win this round! Paper beats rock.";
        playerScore += 1;
        }
        else if (playerSelection === "paper" && computerSelection === "scissors") {
        roundResult = "You lose this round! Scissors beats paper.";
        computerScore += 1;
        }
        else if (playerSelection === "scissors" && computerSelection === "paper") {
        roundResult = "You win this round! Scissors beats paper.";
        playerScore += 1;
        }
        else if (playerSelection === "scissors" && computerSelection === "rock") {
        roundResult = "You lose this round! Rock beats scissors.";
        computerScore += 1;
        }
        else if (playerSelection === "scissors" && computerSelection === "scissors") {
        roundResult = "It's a tie! You both drew scissors"
        }
        else {
        roundResult = "Invalid input. Play either rock, paper, or scissors"
        }
    
        return roundResult;
    
    }
    return playHand();   
}

let sele = game();
console.log(playerScore);
console.log(computerScore);
console.log(sele);

let sele1 = game();
console.log(playerScore);
console.log(computerScore);
console.log(sele1);

let sele2 = game();
console.log(playerScore);
console.log(computerScore);
console.log(sele2);

let sele3 = game();
console.log(playerScore);
console.log(computerScore);
console.log(sele3);

let sele4 = game();
console.log(playerScore);
console.log(computerScore);
console.log(sele4);

let gameResult; 
if (playerScore > computerScore) {
    console.log(`You won the game ${playerScore} to ${computerScore}!`)

}
else if(playerScore < computerScore) {
    console.log(`You lost the game ${computerScore} to ${playerScore}!`)
}
else {
    console.log("It's a tie!")
}

