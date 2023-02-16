
// const jsConfetti = import("js-confetti");

const choices = ['Rock', 'Paper', 'Scissors'];

const outcome = document.querySelector('.outcome');
const gameRounds = document.querySelector('.gameRounds');
const playerPoints = document.querySelector('.pp');
const computerPoints = document.querySelector('.cp');
const buttons = document.querySelectorAll('.btn');
const images = document.querySelectorAll('.images');


let resetButton;
let gameCount=0;
console.log(gameCount);
let playerScore = 0;
let computerScore = 0;
let playerName = '';
console.log(playerName);

function computerChoice(){
    let choice = Math.floor(Math.random() * choices.length);
    let computerSelection = choices[choice];
    console.log(computerSelection);
    return computerSelection;
}

function oneRound(hand){
    let roundResult;
    let playerSelection = hand;
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
    if(gameCount < 5){
        gameRounds.textContent = gameCount;
        playerPoints.textContent = playerScore;
        computerPoints.textContent = computerScore;
    } else if (gameCount >= 5){
        gameOver();
    }
}

function gameOver(){
    images.disabled=true;
    buttons.disabled=true;

    if(playerScore > computerScore){
        outcome.textContent =  `You've won ${playerName}. Congratulations!`;
        jsConfetti.addConfetti();
    } else if(computerScore > playerScore){
        outcome.textContent = "Computer Wins! Sucks to suck :)";
    } else if(playerScore == computerScore){
        outcome.textContent = `Looks like you're tied with the computer ${playerName}!`;
    }

}

function start(){
    let playerHand;
    buttons.forEach((button) => button.addEventListener('click', () => {
    let handId = button.id;
        if(handId = 'rock'){
            playerHand = 'Rock';
        } else if (handId = 'paper'){
            playerHand = 'Paper';
        } else if (handId = 'scissors'){
            playerHand = 'Scissors';
        }    
        console.log(playerHand)
        oneRound(playerHand);
    }));                
}
start(playerName = prompt("What's your name", ));