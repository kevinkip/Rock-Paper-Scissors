const choices = ['Rock', 'Paper', 'Scissors'];

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const outcome = document.querySelector('.outcome');
const gameRounds = document.querySelector('.gameRounds');
const playerPoints = document.querySelector('.pp');
const computerPoints = document.querySelector('.cp');

let resetButton;
let gameCount = 0;
let playerScore = 0;
let computerScore = 0;

function playerChoice(){
    const userGuess = guessField.value.toLowerCase();
    let firstLetter = userGuess.slice(0,1);
    let restOfString = userGuess.slice(1);
    let playerSelection = firstLetter.toUpperCase() + restOfString;
    console.log(playerSelection);
    return playerSelection;
}

function computerChoice(){
    let choice = Math.floor(Math.random() * choices.length);
    let computerSelection = choices[choice];
    console.log(computerSelection);
    return computerSelection;
}

function oneRound(){
    let roundResult;
    let playerSelection = playerChoice();
    let computerSelection = computerChoice();

    if(playerSelection == 'Rock' && computerSelection == 'Rock' || 
    playerSelection == 'Paper' && computerSelection == 'Paper' ||
    playerSelection == 'Scissors' && computerSelection == 'Scissors'){
        roundResult = 'tie';
        gameCount+=1;
        playerPoints.textContent = playerScore;
        computerPoints.textContent = computerScore;
        outcome.textContent = "It's a tie.";
        gameRounds.textContent = gameCount;

    }

    if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        roundResult = 'computer';
        gameCount+=1;
        computerScore+=1;
        playerPoints.textContent = playerScore;
        computerPoints.textContent = computerScore;
        outcome.textContent = "You Lose! Rock loses to Paper";
        gameRounds.textContent = gameCount;

    } else if (playerSelection == 'Paper' && computerSelection == 'Rock'){
        roundResult = 'player';
        gameCount+=1;
        playerScore+=1;
        playerPoints.textContent = playerScore;
        computerPoints.textContent = computerScore;
        outcome.textContent = "You Win! Rock beats Paper";
        gameRounds.textContent = gameCount;

    }

    if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
        roundResult = 'computer';
        gameCount+=1;
        computerScore+=1;
        playerPoints.textContent = playerScore;
        computerPoints.textContent = computerScore;
        outcome.textContent = "You Lose! Paper loses to Scissors";
        gameRounds.textContent = gameCount;

    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
        roundResult = 'player';
        gameCount+=1;
        playerScore+=1;
        playerPoints.textContent = playerScore;
        computerPoints.textContent = computerScore;
        outcome.textContent = "You Win! Scissors beats Paper";
        gameRounds.textContent = gameCount;

    }

    if (playerSelection == 'Scissors' && computerSelection == 'Rock'){
        roundResult = 'computer';
        gameCount+=1;
        computerScore+=1;
        playerPoints.textContent = playerScore;
        computerPoints.textContent = computerScore;
        outcome.textContent = "You Lose! Scissors loses to Rock";
        gameRounds.textContent = gameCount;

    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        roundResult = 'player';
        gameCount+=1;
        playerScore+=1;
        playerPoints.textContent = playerScore;
        computerPoints.textContent = computerScore;
        outcome.textContent = "You Win! Rock beats Scissors";
        gameRounds.textContent = gameCount;

    }
    console.log(gameCount);
    console.log(roundResult);
    start();
}

// Need a reset button
// Also a reset game to clear everything back to start.

function gameOver(){
    guessField.value = '';
    guessField.disabled = true;
    guessSubmit.disabled = true;
}

function start(){
    if(gameCount < 5){
        guessSubmit.addEventListener('click', oneRound);
    } else {
        if(playerScore > computerScore){
            outcome.textContent = "Player Wins!";
            gameOver();
        } else if(computerScore > playerScore){
            outcome.textContent = "Computer Wins!";
            gameOver();
        }
    }

}
start();
