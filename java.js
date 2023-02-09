let computerScore = [0];
let playerScore = [0];

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    const computerOptions = ["rock","paper","scissors"];
    let computerSelection = computerOptions[Math.floor(Math.random()*3.)];
    playRound(computerSelection,'paper');
});

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    const computerOptions = ["rock","paper","scissors"];
    let computerSelection = computerOptions[Math.floor(Math.random()*3.)];
    playRound(computerSelection,'rock');
  });

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    const computerOptions = ["rock","paper","scissors"];
    let computerSelection = computerOptions[Math.floor(Math.random()*3.)];
    playRound(computerSelection,'scissors');
  });

const resultText = document.querySelector('.resultText');
resultText.textContent = "Lets start!";

function playRound(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    resultText.textContent = "Tie!";
  } else if (computerSelection == "rock") {
      if (playerSelection == "paper"){
            resultText.textContent = "You won! Paper beats rock!";
            playerScore++;
      } else if (playerSelection == "scissors") {
            resultText.textContent = "You lose! Rock beats scissors!";
            computerScore++;
      }
  } else if (computerSelection == "paper") {
      if (playerSelection == "scissors") {
            resultText.textContent = "You won! Scissors beat paper!";
            playerScore++;
      } else if (playerSelection == "rock") {
            resultText.textContent = "You lose! Paper beats rock!";
            computerScore++;
      }   
  } else if (computerSelection == "scissors") {
      if (playerSelection == "rock") {
            resultText.textContent = "You won! Rock beats scissors!";
            playerScore++;
      } else if (playerSelection == "paper") {
            resultText.textContent = "You lose! Scissors beats paper!";
            computerScore++;
      }
  }
const playerPoints = document.querySelector('.playerPoints');
playerPoints.textContent = 'You' + ' ' + playerScore;



const computerPoints = document.querySelector('.computerPoints');
computerPoints.textContent = 'Computer' + ' ' + computerScore;

const result = document.querySelector('.result')

if(computerScore==5) {
    result.textContent = "Computer wins!"
    result.style.fontSize = "30px";
    const newRound = document.querySelector('#newRound');
    newRound.style.display = 'block';
    newRound.addEventListener('click', () => {
       location.reload();
    });
    } else if (playerScore==5) {
        result.textContent = "You win!"
        result.style.fontSize = "30px";
        const newRound = document.querySelector('#newRound');
        newRound.style.display = 'block';
        newRound.addEventListener('click', () => {
           location.reload();
        });
    }
}