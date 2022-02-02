// Create a function called computer play,that will randomly return rock paper scissor inside the console.

function computerPlay() {
    const myArray = [
        'rock',
        'paper',
        'scissor'
]
    const randomItems = myArray[Math.floor(Math.random() * myArray.length)];
    return randomItems
}
const result = computerPlay()
//console.log(computerPlay(result))


//const choice = prompt('choose','')

function playRound(playerSelection, computerSelection) {
    // your code here!
    if(playerSelection === 'rock' && computerSelection === 'paper'  )  {
        console.log('You Lose! Paper beats Rock')
    } else if(playerSelection === 'rock' && computerSelection === 'scissor') {
        console.log('You win! rock breaks scissor')
    } else if(playerSelection === 'rock' && computerSelection === 'rock') {
        console.log('Tie game!')
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You win! paper covers rock')
    } else if(playerSelection === 'paper' && computerSelection === 'scissor') {
        console.log('You lose! scissor beats paper')
    } else if(playerSelection === 'paper' && computerSelection === 'paper') {
        console.log('Tie game!')
    } else if(playerSelection === 'scissor' && computerSelection === 'paper') {
        console.log('You win! scissor cuts paper')
    } else if(playerSelection === 'scissor' && computerSelection === 'rock') {
        console.log('You lose! rock beats scissor')
    } else if(playerSelection === 'scissor' && computerSelection === 'scissor') {
        console.log('Tie game!')
    } 
    return playerSelection, computerSelection
  }
  let myResults = playRound()
  let playerSelection = 'rock';
  playerSelection = prompt('', '')
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection,computerSelection));
  





















/*const choice = prompt('Choose: rock paper scissor','');
if(choice == 'rock' || choice.toUpperCase()  ) {
    console.log('you win')
}*/
















