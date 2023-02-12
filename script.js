const choices = ['Rock', 'Paper', 'Scissors'];

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const outcome = document.querySelector('.outcome');

let resetButton;

// function getComputerChoice(){
//     let choice = Math.floor(Math.random() * choices.length);
//     return choices[choice];
// }

// console.log(getComputerChoice());

// function getPlayerChoice(){
//     const userGuess = guessField.value.toLowerCase();
//     let firstLetter = userGuess.slice(0,1);
//     let restOfString = userGuess.slice(1);
//     let newString = firstLetter.toUpperCase() + restOfString;
//     return newString;
// }


function oneRound(){
    const userGuess = guessField.value.toLowerCase();
    let firstLetter = userGuess.slice(0,1);
    let restOfString = userGuess.slice(1);
    let playerSelection = firstLetter.toUpperCase() + restOfString;
    console.log(playerSelection);

    let choice = Math.floor(Math.random() * choices.length);
    let computerSelection = choices[choice];
    console.log(computerSelection);

    if(playerSelection == 'Rock' && computerSelection == 'Rock' || 
    playerSelection == 'Paper' && computerSelection == 'Paper' ||
    playerSelection == 'Scissors' && computerSelection == 'Scissors'){
        outcome.textContent = "It's a tie.";
    }

    if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        outcome.textContent = "You Lose! Rock loses to Paper";
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock'){
        outcome.textContent = "You Win! Rock beats Paper";
    }

    if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
        outcome.textContent = "You Lose! Scissors loses to Paper";
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
        outcome.textContent = "You Win! Scissors beats Paper";
    }

    if (playerSelection == 'Scissors' && computerSelection == 'Rock'){
        outcome.textContent = "You Lose! Scissors loses to Rock";
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        outcome.textContent = "You Win! Rock beats Scissors";
    }
}

guessSubmit.addEventListener('click', oneRound);
