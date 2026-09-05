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
const resultMessage = document.querySelector(".rps-message");

// Used for showRoundResult() and humanChoice
function toStringChoice(computerChoice) {
    switch (computerChoice) {
        case ROCK: return "rock";
        case PAPER: return "paper";
        case SCISSORS: return "scissors";
        default: return NONE;
    }
}

function showRoundResult(winner) {
    switch (winner) {
        case HUMAN:
            resultMessage.textContent = "You Win!"
            break;
        case COMPUTER:
            resultMessage.textContent = "You Lose!";
            break;
        case TIE:
            resultMessage.textContent = "Tie!";
            break;
        default:
            resultMessage.textContent = NONE;
            break;
    }
}

function getComputerChoice() {
    // Generate random number between [0,2]
    const choice = Math.floor(Math.random() * 3);
    return choice;
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
    const humanHand = document.querySelector("#human-hand");
    const computerHand = document.querySelector("#computer-hand");
    const humanScoreDisplay = document.querySelector("#human-score");
    const computerScoreDisplay = document.querySelector("#computer-score");

    let humanScore = 0;
    let computerScore = 0;

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            // Make choices and determine the winner
            const humanChoice = choice.id;
            const computerChoice = getComputerChoice();
            humanHand.src = `./images/hand-${humanChoice}.png`;
            computerHand.src = `./images/hand-${toStringChoice(computerChoice)}.png`;
            const winner = playRound(humanChoice, computerChoice);
            
            // Update the score and show result
            if (winner == HUMAN) ++humanScore;
            if (winner == COMPUTER) ++computerScore;
            humanScoreDisplay.textContent = `${humanScore}`;
            computerScoreDisplay.textContent = `${computerScore}`;
            showRoundResult(winner);
            
            // End of the game, best 3 out of 5
            if (humanScore >= 3 || computerScore >= 3) {
                choices.forEach((choice) => {
                    choice.disabled = true;
                });
            }
        });
    });
}

playGame();