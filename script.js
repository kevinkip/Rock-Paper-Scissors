const choices = ['Rock', 'Paper', 'Scissors'];

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const outcome = document.querySelector('.outcome');
const gameRounds = document.querySelector('.gameRounds');
const playerPoints = document.querySelector('.pp');
const computerPoints = document.querySelector('.cp');
const buttons = document.querySelectorAll('.btn');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let resetButton;
let gameCount=0;
console.log(gameCount);
let playerScore = 0;
let computerScore = 0;
let playerHand;

function computerChoice(){
    let choice = Math.floor(Math.random() * choices.length);
    let computerSelection = choices[choice];
    console.log(computerSelection);
    return computerSelection;
}

function oneRound(){
    let roundResult;
    let playerSelection = playerHand;
    let computerSelection = computerChoice();

    if(playerSelection == 'Rock' && computerSelection == 'Rock' || 
    playerSelection == 'Paper' && computerSelection == 'Paper' ||
    playerSelection == 'Scissors' && computerSelection == 'Scissors'){
        roundResult = 'tie';
        outcome.textContent = "It's a tie.";
    }

    if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        roundResult = 'computer';
        computerScore+=1;
        outcome.textContent = "You Lose! Rock loses to Paper";

    } else if (playerSelection == 'Paper' && computerSelection == 'Rock'){
        roundResult = 'player';
        playerScore+=1;
        outcome.textContent = "You Win! Rock beats Paper";
    }

    if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
        roundResult = 'computer';
        computerScore+=1;
        outcome.textContent = "You Lose! Paper loses to Scissors";

    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
        roundResult = 'player';
        playerScore+=1;
        outcome.textContent = "You Win! Scissors beats Paper";
    }

    if (playerSelection == 'Scissors' && computerSelection == 'Rock'){
        roundResult = 'computer';
        computerScore+=1;
        outcome.textContent = "You Lose! Scissors loses to Rock";

    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        roundResult = 'player';
        playerScore+=1;
        outcome.textContent = "You Win! Rock beats Scissors";
    }
    console.log(gameCount);
    console.log(roundResult);
    gameCount+=1;  
    gameRounds.textContent = gameCount;
    playerPoints.textContent = playerScore;
    computerPoints.textContent = computerScore;

}

function checkRound(){
    if(gameCount = 5){
        gameOver;
    } else {
        start;
    }
}

function gameOver(){
    buttons.disabled = true;
    if(playerScore > computerScore){
        outcome.textContent = "Player Wins!";
    } else if(computerScore > playerScore){
        outcome.textContent = "Computer Wins!";
    }
}

function start(){
    buttons.forEach((button) => button.addEventListener('click', () => {
    let handId = button.id;
        if(handId = 'rock'){
            playerHand = 'Rock';
            oneRound();
        } else if (handId = 'paper'){
            playerHand = 'Paper';
            oneRound();
        } else if (handId = 'scissors'){
            playerHand = 'Scissors';
            oneRound();
        }
    }))                
}
start();