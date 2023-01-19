function getComputerChoice(computer) {
    return computer[Math.floor(Math.random()*computer.length)];
}
var computer = ["rock", "paper","scissors"]

function getPlayerChoice(player) {
    return player.toLowerCase()
}
var player = prompt("What do you choose? Rock, paper or scissors?");