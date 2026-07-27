const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function getComputerChoice() {
    // Generate number between [0,2]
    const choice = Math.floor(Math.random() * 3);
    return choice;
}

function getHumanChoice() {
    // Enter number between [0,2]
    const choice = Number(prompt("Your Turn"));
    return choice;
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case ROCK:
            switch (computerChoice) {
                case ROCK:
                    console.log("Tie! Nobody wins this round");
                    break;
                case PAPER:
                    console.log("You lose! Paper beats Rock");
                    ++computerScore;
                    break;
                case SCISSORS:
                    console.log("You win! Rock beats Scissors!");
                    ++humanScore;
                    break;
                default:
                    console.log("N/A");
                    break;
            }
            break;
        case PAPER:
            switch (computerChoice) {
                case ROCK:
                    console.log("You win! Paper beats Rock!");
                    ++humanScore;
                    break;
                case PAPER:
                    console.log("Tie! Nobody wins this round");
                    break;
                case SCISSORS:
                    console.log("You lose! Scissors beats Paper");
                    ++computerScore;
                    break;
                default:
                    console.log("N/A");
                    break;
            }
            break;
        case SCISSORS:
            switch (computerChoice) {
                case ROCK:
                    console.log("You lose! Rock beats Scissors");
                    ++computerScore;
                    break;
                case PAPER:
                    console.log("You win! Scissors beats Paper!");
                    ++humanScore;
                    break;
                case SCISSORS:
                    console.log("Tie! Nobody wins this round");
                    break;
                default:
                    console.log("N/A");
                    break;
            }
            break;
        default:
            console.log("N/A");
            break;
    }
}

let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);