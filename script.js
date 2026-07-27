const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function getComputerChoice() {
    // Generate number between [0,2]
    const choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case ROCK:      return "rock";
        case PAPER:     return "paper";
        case SCISSORS:  return "scissors";
        default:        return "N/A";
    }
}

function getHumanChoice() {
    // Enter number between [0,2]
    const choice = Number(prompt("Your Turn"));

    switch (choice) {
        case ROCK:      return "rock";
        case PAPER:     return "paper";
        case SCISSORS:  return "scissors";
        default:        return "N/A";
    }
}

let humanScore = 0;
let computerScore = 0;