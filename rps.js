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



//The two parameters playerSelection and computerSelection have no value at the moment.
//A variable need to be assigned to them like so

 //The value of this variable will be rock paper or scissor, 
 //also catch the logic inside the above IF statement
 // along with the computerSelection variable.





//At this point you should be able to play a single round in the console with the code above.

//Before moving on turn the playRound function into an arrow function.

//Create the final function name it game() and make it an arrow function.
//This function will keep score and display a winner at the end after 5 rounds.
//Outside the function declare two variables to keep score of the game.

let playerScore = parseInt(0); //These variables will be incremented after player or computer win a round
let computerScore = parseInt(0);// Increment inside the playRound IF statement above. Console.log the output.



let game = () => {

    //Create a FOR LOOP inside this function to play 5 rounds.

    for(i = 0; i < 20; i++ ) { //To be safe LOOP 15 0r 20 times to cover the draw rounds

        //Inside this LOOP call the playRound function.
        //Add playerSelection, computerSelection and playerSelection toLoweerCase.

        let playerSelection = prompt('Please make a move'); //Prompt this variable so it will not be static, also add the toLowerCase method to make your input case-insensitive.
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = computerPlay();
        alert(playRound(playerSelection, computerSelection));
        alert('player score: ' + playerScore + ' VS ' +  ' computer score:' + computerScore);
        //alert('computer score:' + computerScore);

        //Inside this LOOP write an IF statement to show winner after winner 5 rounds.

        if(playerScore === 5) {
            alert('Congratulations you won the game!!')
            return;
            
        } else if(computerScore === 5) {
            alert('You lose the game try again')
            return;
            
        } else{
           
        }
    }

}

game()

