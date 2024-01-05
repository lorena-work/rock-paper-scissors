console.log("Get ready to play Rock Paper Scissors!")

//Begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if(choice ==  0){
        return "Rock";
    }
    else if (choice == 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
  
}

console.log(getComputerChoice())

