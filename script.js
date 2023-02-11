const choices = ['Rock', 'Paper', 'Scissors'];
// document.getElementById('rock').onclick = () => {alert("You've chosen rock")};
const rock = document.getElementById('rock');
rock.addEventListener('click', choice);
const playerChoice = document.querySelector('.playerSelection');

document.getElementById('paper').onclick = () => {alert("You've chosen paper")};
document.getElementById('scissors').onclick = () => {alert("You've chosen scissors")};


function choice(){
    if(rock){
        alert("You've chosen rock!");
        playerChoice.textContent = 'Rock'
    }
}
const winner = document.querySelector('.winner');


function getComputerChoice(){
    const randomPick = Math.floor(Math.random() * choices.length);
    return (choices[randomPick]);
};

console.log(getComputerChoice());

function singleRound(playerSelection, computerSelection){
}


