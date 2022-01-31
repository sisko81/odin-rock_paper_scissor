// Create a function called computer play,that will randomly return rock paper scissor.

function computerPlay() {
    let myArray = [
        'rock',
        'paper',
        'scissor'
]
    let randomItems = myArray[Math.floor(Math.random() * myArray.length)];
    return randomItems
}
let result = computerPlay()
console.log(computerPlay(result))