import inquirer from "inquirer"

// 1) Computer will gwenerate a random number

// 2) User input for guessing game

//  3) Compare user input with computer generated number and show result - dose

const randomNumber = Math.floor(Math.random() * 10 + 1)
// console.log(randomNumber);


const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);
if (answers.UserGuessedNumber === randomNumber ) {
    console.log("Conratulations you guessed right number. ");   
} else {
    console.log("You guessed wrong number");
    
}