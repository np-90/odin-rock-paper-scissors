const options = ['rock', 'paper', 'scissors'];    // Defining the array of possible options
let gamesPlayed = 0
let playerScore = 0
let computerScore = 0

function game() {

while (gamesPlayed < 5) {
    console.log(playRound());
}
    
console.log(`Final score - Computer ${computerScore} - Player ${playerScore}`)
}
    
// create a function called computerPlay that will randomly pick either rock paper or scissors for the computer
function computerPlay() {
    let random = Math.floor(Math.random() * options.length);    // Choosing a random number between 0 and 1, and multiplying by the length of the array, and rounding down
    return options[random]; // Returning the random number as a position in the options array
}

    // create user selection
    function playRound() {
        let computerSelection = computerPlay();     // Computer makes their selection
        let playerSelectionAsk = prompt("What is your selection? Choose from either Rock, Paper or Scissors");    // Prompt player for their selection
        let playerSelection = playerSelectionAsk.toLowerCase();     // Converts selection to lower case
    
        // if computer choice and player choice are the same, return Tie
        if (computerSelection === playerSelection) {
            gamesPlayed++;   // Increase the tally of games played
            return `You DRAW! ${playerSelection} ties with ${computerSelection}! No points awarded. Computer ${computerScore} - Player ${playerScore}`;
        } else

        // if computer chooses rock and player chooses paper, YOU WIN
        // if computer chooses scissors and player chooses rock, YOU WIN
        // if computer chooses paper and player chooses scissors, you WIN
        if ((computerSelection === 'rock' && playerSelection === 'paper') || (computerSelection === 'scissors' && playerSelection === 'rock') || (computerSelection === 'paper' && playerSelection === 'scissors')) {
            gamesPlayed++;   // Increase the tally of games played
            playerScore++;   // Give 1 point to the player if they win
            return `You WIN! ${playerSelection} beats ${computerSelection}! Computer ${computerScore} - Player ${playerScore}`;
        } else

        // if computer chooses rock and player chooses scissors, YOU LOSE
        // if computer chooses scissors and player chooses paper, YOU LOSE
        // if computer chooses paper and player chooses rock, you LOSE
        if ((computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'scissors' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'rock')) {
            gamesPlayed++;   // Increase the tally of games played
            computerScore++;     // Give 1 point to the computer if they win
            return `You LOSE! ${computerSelection} beats ${playerSelection}! Computer ${computerScore} - Player ${playerScore}`;
        }
    }

game();