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

const btnContainer = document.querySelector('#btn-container');

const reload = document.querySelector('#reload');

//Create three buttons
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      playerSelection = e.target.id;
      playerSelectionShowCase.textContent = playerSelection;
      console.log(`Player Selection: ${playerSelection}`);
      computerSelection = computerPlay();
      playRound()
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
    playerScoreShowCase.style.fontSize = '24px'
     computerScoreShowCase.style.fontSize = '24px'
     playerScoreShowCase.style.color = 'green'
     computerScoreShowCase.style.color = 'red'
     resultShowCase.textContent = result
}

const endGame = () => {
    if(playerScore == 5) {
        btnContainer.textContent = 'PLAYER WON THE GAME';
        btnContainer.style.fontSize = '35px';
        btnContainer.style.color = 'green';
        reload.style.visibility = 'visible';

        reload.addEventListener('click', () => {
          window.location.reload()
        })
    }
    else if(computerScore == 5) {
        btnContainer.textContent = 'COMPUTER WON GAME OVER';
        btnContainer.style.fontSize = '35px';
        btnContainer.style.color = 'red';
        reload.style.visibility = 'visible';

        reload.addEventListener('click', () => {
          window.location.reload()
        })
    }
    endResultShowCase.textContent = endResult
}