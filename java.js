let playerScore = 0;
let computerScore = 0;

for (let i=0; i<5; i++) {
     
const computerOptions = ["rock","paper","scissors"];
const playerChoice = prompt("What do you choose? Rock, paper or scissors?");

let computerSelection = computerOptions[Math.floor(Math.random()*3.)];
let playerSelection = playerChoice.toLowerCase();

console.log("Computer choose" + " " + computerSelection)
console.log("You choose" + " " + playerSelection)

function playRound(computerSelection,playerSelection) {
    if (computerSelection == playerSelection) {
        console.log("Tie!");
    } else if (computerSelection == "rock") {
        if (playerSelection == "paper"){
            console.log("You won! Paper beats rock!")
            playerScore++;
        } else if (playerSelection == "scissors") {
            console.log("You lose! Rock beats scissors!")
            computerScore++;
        }
    } else if (computerSelection == "paper") {
        if (playerSelection == "scissors") {
            console.log("You won! Scissors beat paper!")
            playerScore++;
        } else if (playerSelection == "rock") {
            console.log("You lose! Paper beats rock!")
            computerScore++;
        }   
    } else if (computerSelection == "scissors") {
        if (playerSelection == "rock") {
            console.log("You won! Rock beats scissors!")
            playerScore++;
        } else if (playerSelection == "paper") {
            console.log("You lose! Scissors beats paper!")
            computerScore++;
        }
    }
}
console.log(playRound(computerSelection, playerSelection))
console.log("Player score: " + playerScore)
console.log("Computer score: " + computerScore)
    }
    if (computerScore > playerScore) {
        console.log("Computer wins!")
    } else if (playerScore > computerScore) {
        console.log("You win!")
    } else {
        console.log("It's a tie!")
    }
    let finalScore = ("Computer" + " " + computerScore) + ", " + ("You" + " " + playerScore);
    console.log(finalScore)