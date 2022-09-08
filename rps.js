//DOM Elements
const playerSelectionShowCase = document.querySelector('#player-selection');
let playerSelection;

const computerSelectionShowCase = document.querySelector('#computer-selection');
let computerSelection;

const resultShowCase = document.querySelector('#result');
let result;

// Create a function with the name computerPlay


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
        result = 'You Rock!! rock cracks scissors'
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper') {
        result = 'Computer win paper beats rock'
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock') {
        result = 'Player win! paper covers rock'
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        result = 'Computer win scissors beats paper'
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        result = 'Player win! scissors cut paper'
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        result = 'Computer win rock beats scissors'
    }

     resultShowCase.textContent = result
     console.log('playround function outside Result:', result)
}


let playerScore = 0; //These variables will be incremented after player or computer win a round
let computerScore = 0;// Increment inside the playRound IF statement above. Console.log the output.

const game = () => {
        
        
      
}

game();



