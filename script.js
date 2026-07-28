const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

function getComputerChoice() {
    // Generate number between [0,2]
    const choice = Math.floor(Math.random() * 3);
    return choice;
}

function getHumanChoice() {
    // Enter "rock", "paper", or "scissors"
    const choice = prompt("Your Turn");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
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
        case "paper":
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
        case "scissors":
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

function playGame() {
    while (humanScore < 3 && computerScore < 3) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();