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
            console.log(
                `You win! ${humanChoice} ` + 
                `beats ${toStringChoice(computerChoice)}`
            );
            break;
        case COMPUTER:
            console.log(
                `You lose! ${humanChoice} ` + 
                `beaten by ${toStringChoice(computerChoice)}`
            );
            break;
        case TIE:
            console.log("Tie! Nobody wins this round");
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

    let humanScore = 0;
    let computerScore = 0;

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

        showRoundResult(humanChoice, computerChoice, winner);
        
        if (winner === HUMAN) ++humanScore;
        if (winner === COMPUTER) ++computerScore;
    }

    // Main game loop
    while (humanScore < 3 && computerScore < 3) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    // End of the game
    if (humanScore >= 3) console.log("You win!");
    if (computerScore >= 3) console.log("You lose");
}

playGame();