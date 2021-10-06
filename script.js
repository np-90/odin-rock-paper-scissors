// create a function called computerPlay that will randomly pick either rock paper or scissors for the computer
let options = ['Rock', 'Paper', 'Scissors'];    // Defining the array of possible options

function computerPlay() {
    let random = Math.floor(Math.random() * options.length);    // Choosing a random number between 0 and 1, and multiplying by the length of the array, and rounding down
    return options[random]; // Returning the random number as a position in the options array
}

// create user selection
function playRound() {
    let computerSelection = computerPlay();     // Computer makes their selection
    let playerSelection = prompt("What is your selection?");    // Prompt player for their selection

    // if computer choice and player choice are the same, return Tie
    if (computerSelection === playerSelection) {
        return "You DRAW! " + playerSelection + " ties with " + computerSelection + "!";
    } else

    // if computer chooses rock and player chooses paper, YOU WIN
    // if computer chooses scissors and player chooses rock, YOU WIN
    // if computer chooses paper and player chooses scissors, you WIN
    if ((computerSelection === 'Rock' && playerSelection === 'Paper') || (computerSelection === 'Scissors' && playerSelection === 'Rock') || (computerSelection === 'Paper' && playerSelection === 'Scissors')) {
        return "You WIN! " + playerSelection + " beats " + computerSelection + "!";
    } else

    // if computer chooses rock and player chooses scissors, YOU LOSE
    // if computer chooses scissors and player chooses paper, YOU LOSE
    // if computer chooses paper and player chooses rock, you LOSE
    if ((computerSelection === 'Rock' && playerSelection === 'Scissors') || (computerSelection === 'Scissors' && playerSelection === 'Paper') || (computerSelection === 'Paper' && playerSelection === 'Rock')) {
        return "You LOSE! " + computerSelection + " beats " + playerSelection + "!";
    }
}