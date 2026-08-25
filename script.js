// Computer choice uses RNG
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

// Determine winner
const TIE = "tie";
const COMPUTER = "computer";
const HUMAN = "human";

// Default switch case
const NONE = "N/A";

// Used for showRoundResult()
const resultMessage = document.querySelector(".rps-result");

// Used for showRoundResult() and humanChoice
function toStringChoice(computerChoice) {
    switch (computerChoice) {
        case ROCK: return "rock";
        case PAPER: return "paper";
        case SCISSORS: return "scissors";
        default: return NONE;
    }
}

function showRoundResult(humanChoice, computerChoice, winner) {
    switch (winner) {
        case HUMAN:
            resultMessage.textContent = 
                `You win! ${humanChoice} ` + 
                `beats ${toStringChoice(computerChoice)}`;
            break;
        case COMPUTER:
            resultMessage.textContent =
                `You lose! ${humanChoice} ` + 
                `beaten by ${toStringChoice(computerChoice)}`;
            break;
        case TIE:
            resultMessage.textContent =
                `Tie! Nobody wins this round`;
            break;
        default:
            console.log(NONE);
            break;
    }
}

function getComputerChoice() {
    // Generate random number between [0,2]
    const choice = Math.floor(Math.random() * 3);
    return choice;
}

function getHumanChoice() {
    // Enter "rock", "paper", or "scissors"
    const choice = prompt("Your Turn");
    return choice.toLowerCase();
}

function playGame() {
    function handleHumanRock(computerChoice) {
        switch (computerChoice) {
            case ROCK: return TIE;
            case PAPER: return COMPUTER;
            case SCISSORS: return HUMAN;
            default: return NONE;
        }
    }

    function handleHumanPaper(computerChoice) {
        switch (computerChoice) {
            case ROCK: return HUMAN;
            case PAPER: return TIE;
            case SCISSORS: return COMPUTER;
            default: return NONE;
        }
    }

    function handleHumanScissors(computerChoice) {
        switch (computerChoice) {
            case ROCK: return COMPUTER;
            case PAPER: return HUMAN;
            case SCISSORS: return TIE;
            default: return NONE;
        }
    }

    function playRound(humanChoice, computerChoice) {
        let winner = TIE;

        switch (humanChoice) {
            case toStringChoice(ROCK): 
                winner = handleHumanRock(computerChoice); 
                break;
            case toStringChoice(PAPER): 
                winner = handleHumanPaper(computerChoice); 
                break;
            case toStringChoice(SCISSORS): 
                winner = handleHumanScissors(computerChoice); 
                break;
            default: 
                console.log(NONE); 
                break;
        }

        return winner;
    }

    const choices = document.querySelectorAll(".choice-btn");

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const humanChoice = choice.id;
            const computerChoice = getComputerChoice();
            const winner = playRound(humanChoice, computerChoice);
            showRoundResult(humanChoice, computerChoice, winner);
        });
    });
}

playGame();