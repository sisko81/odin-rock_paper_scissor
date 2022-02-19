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

computerPlay()

//Pro_Tip: use the console to make sure this is returning the expected output before moving to the next step!
//computerPlay function holds the value of computerRandomList inside the local scope.
//The output will be random.
console.log(computerPlay())


//Next_step: turn the above computerPlay function into an arrow function.


//Write a function that plays a single round of Rock Paper Scissors.
//Name the function playRound, and give it two parameters named playerSelection and computerSelection.

function playRound(playerSelection, computerSelection) {

    //return a string that states the winner of the round 
    //like so: "You win! Rock beats Scissor.
    

}

playRound()












































































































































