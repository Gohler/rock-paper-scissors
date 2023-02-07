
const computerOptions = ["rock","paper","scissors"];
let computerSelection = computerOptions[Math.floor(Math.random()*3.)];


const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound(computerSelection,'paper');
});

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound(computerSelection,'rock');
  });

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playRound(computerSelection,'scissors');
  });


function playRound(computerSelection, playerSelection) {
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
