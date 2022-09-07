//DOM Elements
const playerSelectionShowCase = document.querySelector('#player-selection');
let playerSelection
const computerSelectionShowCase = document.querySelector('#computer-selection');
let computerSelection

//Create three buttons
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      playerSelection = e.target.id;
      playerSelectionShowCase.innerHTML = playerSelection
      console.log(playerSelection)
    })
})

// Create a function with the name computerPlay
let computerPlay = () => {
    let computerList = ['rock', 'paper', 'scissor'];
    let computerRandomList = computerList[Math.floor(Math.random() * computerList.length)];

    return computerRandomList;
}

let playRound = () => {
    if(playerSelection ===  computerSelection) {
        return 'draw'; // A draw will be returned IF playerSelection and computerSelection match.
    } else if(playerSelection === 'rock' && computerSelection === 'scissor') {
        playerScore++
        return 'You win! Rock breaks Scissor' //IF the playerSelection is 'rock' AND computerSelection is 'scissor' the player wins the round.The rest of the code block follow the same logic.
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        return 'You lose! paper beats rock' 
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'You Win! Paper covers rock' 
    } else if(playerSelection === 'paper' && computerSelection === 'scissor') {
        computerScore++
        return 'You lose! scissor beats paper' 
    } else if(playerSelection === 'scissor' && computerSelection === 'paper') {
        playerScore++
        return 'You Win! Scissor cuts paper' 
    } else if(playerSelection === 'scissor' && computerSelection === 'rock') {
        computerScore++
        return 'You lose! rock beats scissor' 
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



