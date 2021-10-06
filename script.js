// create a function called computerPlay that will randomly pick either rock paper or scissors for the computer
let options = ['Rock', 'Paper', 'Scissors'];    // Defining the array of possible options

function computerPlay() {
    let random = Math.floor(Math.random() * options.length);    // Choosing a random number between 0 and 1, and multiplying by the length of the array, and rounding down
    return options[random]; // Returning the random number as a position in the options array
}