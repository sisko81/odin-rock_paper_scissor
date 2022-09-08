//DOM Elements
const playerScoreShowCase = document.querySelector('#p-score');
let playerScore = 0; 

const computerScoreShowCase = document.querySelector('#c-score');
let computerScore = 0;

const playerSelectionShowCase = document.querySelector('#player-selection');
let playerSelection;

const computerSelectionShowCase = document.querySelector('#computer-selection');
let computerSelection;

const resultShowCase = document.querySelector('#result');
let result;

const endResultShowCase = document.querySelector('#end-result');
let endResult;

//Create three buttons
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      playerSelection = e.target.id;
      playerSelectionShowCase.textContent = playerSelection;
      console.log(`Player Selection: ${playerSelection}`);
      computerSelection = computerPlay();
      console.log(`1: foreach function: Computer selection: ${computerSelection}`)
      console.log(`playRound() function inside foreach: ${playRound()}`)
      console.log(`2: foreach function: Results: ${result}`)
      endGame()
    })
})

const computerPlay = () => {
    computerSelection = ['rock', 'paper', 'scissors'];
    let computerRandomList = computerSelection[Math.floor(Math.random() * computerSelection.length)];

    computerSelectionShowCase.textContent = computerRandomList

    return computerRandomList;
}


const playRound = () => {
    if(playerSelection === computerSelection) {
        result = 'Draw'  
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        result = 'You Rock!! rock cracks scissors';
        playerScore++;
        playerScoreShowCase.textContent = playerScore
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper') {
        result = 'Computer win paper beats rock';
        computerScore++;
        computerScoreShowCase.textContent = computerScore
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock') {
        result = 'Player win! paper covers rock';
        playerScore++;
        playerScoreShowCase.textContent = playerScore
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        result = 'Computer win scissors beats paper';
        computerScore++;
        computerScoreShowCase.textContent = computerScore
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        result = 'Player win! scissors cut paper';
        playerScore++;
        playerScoreShowCase.textContent = playerScore
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        result = 'Computer win rock beats scissors';
        computerScore++;
        computerScoreShowCase.textContent = computerScore
    }
     resultShowCase.textContent = result
     console.log('playround function outside Result:', result)
}

const endGame = () => {
    if(playerScore == 5) {
        endResult = 'Player win the game'
    }
    else if(computerScore == 5) {
        endResult = 'Computer win the game'
    }
    endResultShowCase.textContent = endResult
}