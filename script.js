// THE PLAN

// GOAL: To create a website that allows the user to play a 5 round game of "Rock, Paper, Scissors!" against the computer. The user will be prompted for an answer each round before determining the winner of the round, and the game will keep track of the score between the user and the computer. After the 5th and final round, the winner will be announced. For now, this game will take place in the browser console, so after returning values, the code can simply console.log() the returned values.


// ALGORITHM

// Create a function called "getComputerChoice()" that will randomly return either "Rock", "Paper", or "Scissors".

// Create a function called "playRound()" that takes two parameters - the "playerSelection" and the "computerSelection". "playerSelection" value should come from a prompt() to get input from the user. "computerSelection" value should come from "getComputerChoice()". Based on the parameters, return a string that declares the winner of the round like so: "You lose! Paper beats Rock!". (NOTE: "playerSelection" parameter should be case-insensitive so that it doesn't matter how the user capitalizes their answer. Can use the ".toLowerCase()" string method on "playerSelection" before comparing to "computerSelection".)

// Create a function called "playFiveRounds()" and loop through "playRound()" 5 times while keeping score. After completing 5 rounds, announce the score and winner.


// CODE

// Create a function called "getComputerChoice()" that will randomly return either "Rock", "Paper", or "Scissors".

function getComputerChoice() {
    let randomThree = Math.floor(Math.random() * 3)
    switch (randomThree) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
};

// Create a function called "playRound()" that takes two parameters - the "playerSelection" and the "computerSelection". "playerSelection" value should come from a prompt() to get input from the user. "computerSelection" value should come from "getComputerChoice()". Based on the parameters, return a string that declares the winner of the round like so: "You lose! Paper beats Rock!". (NOTE: "playerSelection" parameter should be case-insensitive so that it doesn't matter how the user capitalizes their answer. Can use the ".toLowerCase()" string method on "playerSelection" before comparing to "computerSelection".)

function onlyCapFirst(str) {
    str = str.toLowerCase();
    str = str.replace(str.charAt(0), str.charAt(0).toUpperCase());
    return str;
}

let playerScore = 0;
let computerScore = 0;

function playRound() {
    playerSelection = prompt("Rock, Paper, or Scissors? Which will you choose?");
    playerSelection = onlyCapFirst(playerSelection);
    console.log("Player: " + playerSelection);

    computerSelection = getComputerChoice();
    console.log("Computer: " + computerSelection);

    // This while loop prompts the user to enter another choice until the game is no longer a tie.

    while (playerSelection === computerSelection) {
        console.log("It's a tie! Try again!");

        playerSelection = prompt(`You both chose ${playerSelection}. It's a tie! Try again!`);
        playerSelection = onlyCapFirst(playerSelection);
        console.log("Player: " + playerSelection);

        computerSelection = getComputerChoice();
        console.log("Computer: " + computerSelection);
    }

    if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore++;
        return `Your opponent's ${computerSelection} beat your ${playerSelection}! You lost!`;

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++;
        return `Your opponent's ${computerSelection} beat your ${playerSelection}! You lost!`;

    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        return `Your opponent's ${computerSelection} beat your ${playerSelection}! You lost!`;

    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        return `Your ${playerSelection} beat your opponent's ${computerSelection}! You won!`;

    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore++;
        return `Your ${playerSelection} beat your opponent's ${computerSelection}! You won!`;

    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        return `Your ${playerSelection} beat your opponent's ${computerSelection}! You won!`;

    } else {
        console.log("What the heck did you type? Please just type 'Rock', 'Paper', or 'Scissors'.");
        return playRound();
    };

};

// Create a function called "playFiveRounds()" and loop through "playRound()" 5 times while keeping score. After completing 5 rounds, announce the score and winner.

function playFiveRounds() {
    playerScore = 0;
    computerScore = 0;

    for (i = 1; i <= 5; i++) {
        console.log(playRound());
    };

    if (playerScore > computerScore) {
        return `You won ${playerScore} times out of 5! You're the big winner!`;
    } else {
        return `You lost ${computerScore} times out of 5. You're actually so bad at this game.`;
    };
};
console.log(playFiveRounds());