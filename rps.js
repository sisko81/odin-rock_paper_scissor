//DOM Elements
const playerSelectionShowCase = document.querySelector('#player-selection');
let playerSelection;

const computerSelectionShowCase = document.querySelector('#computer-selection');
let computerSelection;

// Create a function with the name computerPlay


//Create three buttons
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      playerSelection = e.target.id;
      playerSelectionShowCase.textContent = playerSelection;
      console.log(playerSelection);
      console.log(computerPlay());
    })
})

const computerPlay = () => {
    computerSelection = ['rock', 'paper', 'scissors'];
    let computerRandomList = computerSelection[Math.floor(Math.random() * computerSelection.length)];

    computerSelectionShowCase.textContent = computerRandomList

    return computerRandomList;
}


let playRound = () => {
    if(playerSelection ===  computerSelection) {
        return 'draw'; // A draw will be returned IF playerSelection and computerSelection match.
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You win! Rock breaks Scissors' //IF the playerSelection is 'rock' AND computerSelection is 'scissors' the player wins the round.The rest of the code block follow the same logic.
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        return 'You lose! paper beats rock' 
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'You Win! Paper covers rock' 
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        return 'You lose! scissors beats paper' 
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return 'You Win! Scissors cuts paper' 
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        return 'You lose! rock beats scissors' 
    }

    //return the parameters to store the values.
    return 'input rock, paper or scissor'
}

let playerScore = 0; //These variables will be incremented after player or computer win a round
let computerScore = 0;// Increment inside the playRound IF statement above. Console.log the output.

const game = () => {
        
        const computerSelection = computerPlay();
        (playRound(playerSelection, computerSelection));
        ('player score: ' + playerScore + ' VS ' +  ' computer score:' + computerScore);
        ('computer score:' + computerScore);

        if(playerScore === 5) {
            ('You CRUSHED the opposition with a glorious victory!')
            return;
            
        } else if(computerScore === 5) {
            (' Pathetic, You Suck!')
            return; 
        } 
}

game();



