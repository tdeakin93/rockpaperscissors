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
    window.alert("👔 It's a Tie! 👔");
}

// Check if player wins
else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "S" && computerChoice === "P") ||
    (userChoice === "P" && computerChoice === "R") 
) {
    wins++;
    window.alert("🔥✨You Win!✨🔥");   
}

// else player Lost
else {
    losses++;
    window.alert("👎You lose!👎")
}

// print stats to the screen
window.alert(`stats:
🔥 wins: ${wins}
👎 losses: ${losses}
👔 ties: ${ties}
`);

//ask to play again
    let playAgain = window.confirm("Play Again?");
    
    if(playAgain === true) {
        playGame();
    }

}

playGame();