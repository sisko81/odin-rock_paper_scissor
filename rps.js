// Create a function with the name computerPlay

let computerPlay = () => {
    
    //Inside this function declare two variables.

    let computerList = ['rock', 'paper', 'scissor'];
    let computerRandomList = computerList[Math.floor(Math.random() * 3)];

    /*The first variable will be and array list, with the values of:
       rock, paper and scissor.
       The second variable will generate a random list 
       with the help of math. floor and math.random methods the length is 3 so multiply by 3*/

    // Return the computerRandomList, it will be used later on.

    return computerRandomList;

}

// It's good practice to invoke your function even before writing the code.

//computerPlay();

//Pro_Tip: use the console to make sure this is returning the expected output before moving to the next step!
//computerPlay function holds the value of computerRandomList inside the local scope.
//The output will be random.
//console.log(computerPlay());

//Next_step: turn the above computerPlay function into an arrow function.


//Write a function that plays a single round of Rock Paper Scissors.
//Name the function playRound, and give it two parameters named playerSelection and computerSelection.

let playRound = (playerSelection, computerSelection) => {

    //return a string that states the winner of the round 
    //like so: You win! Rock beats Scissor.
    //The first IF statement will return a draw.
    
    if(playerSelection ===  computerSelection) {
        return 'draw'; // A draw will be returned IF playerSelection and computerSelection match.
    } else if(playerSelection === 'rock' && computerSelection === 'scissor') {
        return 'You win! Rock breaks Scissor' //IF the playerSelection is 'rock' AND computerSelection is 'scissor' the player wins the round.The rest of the code block follow the same logic.
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! paper beats rock' 
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper covers rock' 
    } else if(playerSelection === 'paper' && computerSelection === 'scissor') {
        return 'You lose! scissor beats paper' 
    } else if(playerSelection === 'scissor' && computerSelection === 'paper') {
        return 'You Win! Scissor cuts paper' 
    } else if(playerSelection === 'scissor' && computerSelection === 'rock') {
        return 'You lose! rock beats scissor' 
    }

    //return the parameters to store the values.
    return playerSelection, computerSelection
}



//The two parameters playerSelection and computerSelection have no value at the moment.
//A variable need to be assigned to them like so

 //The value of this variable will be rock paper or scissor, 
 //also catch the logic inside the above IF statement
 // along with the computerSelection variable.

let playerSelection = prompt(''); //Prompt this variable so it will not be static, also add the toLowerCase method to make your input case-insensitive.
playerSelection = playerSelection.toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(computerSelection);


//At this point you should be able to play a single round in the console with the code above.

//Before moving on turn the playRound function into an arrow function.

//Create the final function name it game() and make it an arrow function.
//This function will keep score and display a winner at the end after 5 rounds.
//Outside the function declare two variables to keep score of the game.

let playerScore = parseInt(0); //These variables will be incremented after player or computer win a round
let computerScore = parseInt(0);



let game = () => {

    //Create a FOR LOOP inside this function to play 5 rounds.

    for(i = 0; i < 5; i++ ) {

        //Inside this LOOP call the playRound function,
        // along with both playerSelection and computerSelection and playerSelection toLoweerCase.
    }

}

game()






































































































































