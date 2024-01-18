console.log("Get ready to play Rock Paper Scissors with me!")
let playerScore = 0;
let computerScore = 0;
//Begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice(){
    const choice = ['Rock','Paper','Scissors'];
    return choice[Math.floor(Math.random()*choice.length)];
}
//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function checkIfEmpty(playerSelection){
    if (playerSelection === null){
        return true;
    }
    return false;
}

function playRound(playerSelection, computerSelection){
    if (checkIfEmpty(playerSelection)){
        return "You canceled the match. Have a good life!";
    }
    
    let playerSelectionCapped = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    //Tie
    if (playerSelectionCapped === computerSelection){
        console.log(`We tied! We both played ${computerSelection}. Let's play another round to break the tie.`);
        return playRound(prompt("Enter rock, paper, or scissors to start the match!"), getComputerChoice());
    }
    //Rock wins
    else if(playerSelectionCapped === "Rock" && computerSelection === "Scissors"){
        playerScore = playerScore+1;
        return `I played ${computerSelection} and you played ${playerSelectionCapped}. ${playerSelectionCapped} beats ${computerSelection}. You win!`;
    }
    //Scissors wins
    else if(playerSelectionCapped === "Scissors" && computerSelection === "Paper"){
        playerScore = playerScore+1;
        return `I played ${computerSelection} and you played ${playerSelectionCapped}. ${playerSelectionCapped} beats ${computerSelection}. You win!`;
    }
    //Paper wins
    else if(playerSelectionCapped === "Paper" && computerSelection === "Rock"){
        playerScore = playerScore+1;
        return `I played ${computerSelection} and you played ${playerSelectionCapped}. ${playerSelectionCapped} beats ${computerSelection}. You win!`;
    }
    else{
        computerScore = computerScore+1;
        return `I played ${computerSelection} and you played ${playerSelectionCapped}. ${computerSelection} beats ${playerSelectionCapped}. You lose!`;
    }
}
//REVERT LATER
/*function game(){
    for(let i=0; i<5;i++){
        let playerSelection = prompt("Enter rock, paper, or scissors to start the match!")
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`This ends round ${i+1}.`);
    }
}
*/
function game(){
    
    let playerSelection = prompt("Enter rock, paper, or scissors to start the match!")
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(`This ends the match.`);
    //REVERT LATER 'This end the round.' to 'This ends the match.'
}

game();
//REVERT LATER
/*if(playerScore > computerScore){
    console.log(`You won the game! You won ${playerScore} matches out of five!`)
}
else{
    console.log(`You lost the game!  You won ${playerScore} matches out of five!`)
}*/

const buttons = document.querySelector("#buttons");
const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");

buttons.appendChild(btnRock);
buttons.appendChild(btnPaper);
buttons.appendChild(btnScissors);

btnRock.addEventListener("click", () => {
    
});