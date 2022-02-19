//Pro_Tip: console.log many places to test the output

console.log(computerPlay())

// Create a function with the name computerPlay

function computerPlay() {
    
    //Inside this function declare two variables.

    let computerList = ['rock', 'paper', 'scissor'];
    let computerRandomList = computerList[Math.floor(Math.random() * 3)];

    //Pro_Tip: console.log many places to test the output
    console.log(computerRandomList);

    /*The first variable will be and array list, with the values of:
       rock, paper and scissor.
       The second variable will generate a random list 
       with the help of math. floor and math.random methods the length is 3 so multiply by 3*/

    // Return the computerRandomList, it will be used later on.

    //Pro_Tip: console.log many places to test the output
    console.log(computerRandomList);

    return computerRandomList;

}

// It's good practice to invoke your function even before writing the code.

computerPlay()

//Pro_Tip: use the console to make sure this is returning the expected output before moving to the next step!
console.log(computerPlay())

















































































































































