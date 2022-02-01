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
    if(computerSelection === 'scissor')  {
        console.log('The computer randomly selected scissor!')
    } else if(computerSelection === 'paper') {
        console.log('The computer randomly selected paper!')
    } else if(computerSelection === 'rock') {
        console.log('The computer randomly selected rock!')
    }
    return computerSelection
  }
  let myResults = playRound()
  const playerSelection = 'rock';
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));





















/*const choice = prompt('Choose: rock paper scissor','');
if(choice == 'rock' || choice.toUpperCase()  ) {
    console.log('you win')
}*/
















