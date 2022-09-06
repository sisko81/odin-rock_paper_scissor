// Create a function with the name computerPlay
let computerPlay = () => {
    let computerList = ['rock', 'paper', 'scissor'];
    let computerRandomList = computerList[Math.floor(Math.random() * computerList.length)];

    return computerRandomList;
}

let playRound = (playerSelection, computerSelection) => {
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

    for(let i = 0; playerScore || computerScore < 5; i++ ) { // With this logic IF playerScore or computerScore reach 5 a decision is made regardless of the draw count

        let playerSelection = prompt('type', ''); //Prompt this variable so it will not be static, also add the toLowerCase method to make your input case-insensitive.
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = computerPlay();
        alert(playRound(playerSelection, computerSelection));
        alert('player score: ' + playerScore + ' VS ' +  ' computer score:' + computerScore);
        alert('computer score:' + computerScore);

        if(playerScore === 5) {
            alert('You CRUSHED the opposition with a glorious victory!')
            return;
            
        } else if(computerScore === 5) {
            alert(' Pathetic, You Suck!')
            return; 
        } 
    }

}

game();



