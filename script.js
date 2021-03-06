// available choices
let choices = ["R", "P", "S"];

// game stats
let wins = 0;
let losses = 0;
let ties = 0;

function playGame(){
// prompt user for their selection, store it in variable
let userChoice = window.prompt("Enter R, P, or S: Where R=Rock, P=Paper and S=Scissors")
userChoice = userChoice.toUpperCase();
window.alert(`You chose ${userChoice}`);

// assign a random choice for the computer
let index = Math.floor(Math.random() * choices.length)
let computerChoice = choices[index];
window.alert(`The computer chose ${computerChoice}`);

// check if game is a tie
if (userChoice === computerChoice) {
    ties++;
    window.alert("ð It's a Tie! ð");
}

// Check if player wins
else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "S" && computerChoice === "P") ||
    (userChoice === "P" && computerChoice === "R") 
) {
    wins++;
    window.alert("ð¥â¨You Win!â¨ð¥");   
}

// else player Lost
else {
    losses++;
    window.alert("ðYou lose!ð")
}

// print stats to the screen
window.alert(`stats:
ð¥ wins: ${wins}
ð losses: ${losses}
ð ties: ${ties}
`);

//ask to play again
    let playAgain = window.confirm("Play Again?");
    
    if(playAgain === true) {
        playGame();
    }

}

playGame();