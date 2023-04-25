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

/*function onlyCapFirst(str) {
    str = str.toLowerCase();
    str = str.replace(str.charAt(0), str.charAt(0).toUpperCase());
    return str;
}*/

function getSelections(choice) {
    playerSelection = choice;
    console.log("Player: " + playerSelection);

    computerSelection = getComputerChoice();
    console.log("Computer: " + computerSelection);
}

let playerScore = 0;
let computerScore = 0;

const msg = document.getElementById('msg')

function playRound(choice) {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
    }

    getSelections(choice);

    if (playerSelection === computerSelection) {
        msg.textContent = "It's a tie! Try again!";
    } else if(playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore++;
        msg.textContent = `Your opponent's ${computerSelection} beat your ${playerSelection}! You lost!`;

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++;
        msg.textContent = `Your opponent's ${computerSelection} beat your ${playerSelection}! You lost!`;

    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        msg.textContent = `Your opponent's ${computerSelection} beat your ${playerSelection}! You lost!`;

    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        msg.textContent = `Your ${playerSelection} beat your opponent's ${computerSelection}! You won!`;

    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore++;
        msg.textContent = `Your ${playerSelection} beat your opponent's ${computerSelection}! You won!`;

    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        msg.textContent = `Your ${playerSelection} beat your opponent's ${computerSelection}! You won!`;

    } else {
        msg.textContent = "What the heck did you type? Please just type 'Rock', 'Paper', or 'Scissors'."
    };

    if (playerScore === 5) {
        msg.textContent = `You won! Woohoooo!`;
    } else if (computerScore === 5) {
        msg.textContent = `You lost. You're a loser. Give up.`;
    }

    document.getElementById('playerScore').textContent = `Player: ${playerScore}`;
    document.getElementById('computerScore').textContent = `Computer: ${computerScore}`;
};

// Create a function called "playFiveRounds()" and loop through "playRound()" 5 times while keeping score. After completing 5 rounds, announce the score and winner.

/*function playFiveRounds() {
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
console.log(playFiveRounds());*/

//Add event listeners to buttons that will call playRound() with correct playerSelection every time button is clicked.

document.getElementById('chooseRock').addEventListener('click', () => playRound("Rock"));
document.getElementById('choosePaper').addEventListener('click', () => playRound("Paper"));
document.getElementById('chooseScissors').addEventListener('click', () => playRound("Scissors"));
