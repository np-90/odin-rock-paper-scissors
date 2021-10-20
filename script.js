const options = ['Rock', 'Paper', 'Scissors'];    // Defining the array of possible options
const roundResult = document.querySelector('#round-result');
const gameResult = document.querySelector('#game-result')
const btns = document.querySelectorAll('button'); // select all of the buttons and put in a node list called btns
let gamesPlayed = 0
let playerScore = 0
let computerScore = 0

// create a function called computerPlay that will randomly pick either rock paper or scissors for the computer
function computerPlay() {
    let random = Math.floor(Math.random() * options.length);    // Choosing a random number between 0 and 1, and multiplying by the length of the array, and rounding down
    return options[random]; // Returning the random number as a position in the options array
}

function checkResult() { // checks to see if anyone has 5 points - if so disables buttons and ends the game
    if (playerScore === 5 || computerScore === 5) {
        btns[0].disabled = true;
        btns[1].disabled = true;
        btns[2].disabled = true;
        gameResult.innerText = `Final score - Computer ${computerScore} - Player ${playerScore}`; // shows the final score in the div
    }
}
// create user selection
function playRound() {
    let computerSelection = computerPlay();     // Computer makes their selection

    // if computer choice and player choice are the same, return Tie
    if (computerSelection === playerSelection) {
        gamesPlayed++;   // Increase the tally of games played
        checkResult();
        return `You DRAW! ${playerSelection} ties with ${computerSelection}! No points awarded. Current score - Computer ${computerScore} - Player ${playerScore}`;
    } else

    // if computer chooses rock and player chooses paper, YOU WIN
    // if computer chooses scissors and player chooses rock, YOU WIN
    // if computer chooses paper and player chooses scissors, you WIN
    if ((computerSelection === 'Rock' && playerSelection === 'Paper') || (computerSelection === 'Scissors' && playerSelection === 'Rock') || (computerSelection === 'Paper' && playerSelection === 'Scissors')) {
        gamesPlayed++;   // Increase the tally of games played
        playerScore++;   // Give 1 point to the player if they win
        checkResult();
        return `You WIN! ${playerSelection} beats ${computerSelection}! Current score - Computer ${computerScore} - Player ${playerScore}`;
    } else

    // if computer chooses rock and player chooses scissors, YOU LOSE
    // if computer chooses scissors and player chooses paper, YOU LOSE
    // if computer chooses paper and player chooses rock, you LOSE
    if ((computerSelection === 'Rock' && playerSelection === 'Scissors') || (computerSelection === 'Scissors' && playerSelection === 'Paper') || (computerSelection === 'Paper' && playerSelection === 'Rock')) {
        gamesPlayed++;   // Increase the tally of games played
        computerScore++;     // Give 1 point to the computer if they win
        checkResult();
        return `You LOSE! ${computerSelection} beats ${playerSelection}! Current score - Computer ${computerScore} - Player ${playerScore}`;
    }
}

btns.forEach(btn => btn.addEventListener('click', function() { //loop through the nodelist and add an eventlistener for a click
    playerSelection = btn.value; // on click, set PlayerSelection to the value of the button
    roundResult.innerText = playRound(); // calls the playRound and displays the result in the div
}));