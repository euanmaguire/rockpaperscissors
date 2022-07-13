function computerPlay() {
    let randint = Math.floor(Math.random() * 3);
    let answer = (randint == 0) ? "rock" : (randint == 1) ? "paper" : (randint == 2) ? "scissors" : undefined ;
    return answer;
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection){
        return -1;
    }
    
    if(playerSelection === "rock") {
        if(computerSelection === "paper"){
            return false;
        }
        else if(computerSelection === "scissors"){
            return true;
        }
    }
    else if(playerSelection === "paper") {
        if(computerSelection === "scissors"){
            return false;
        }
        else if(computerSelection === "rock"){
            return true;
        }
    }
    else if(playerSelection === "scissors") {
        if(computerSelection === "rock"){
            return false;
        }
        else if(computerSelection === "paper"){
            return true;
        }
    }
}


function game() {
    let computerScore = 0;
    let playerScore = 0;
    let choiceV2 = "";

    for(let i = 1; i <= 5; i++) {
        
        let choice = prompt("Round " + i + " ,do you chose rock, paper or scissors ?");
        choiceV2 = choice.toString().toLowerCase();

        let computerSelection = computerPlay();

        if(playRound(choiceV2, computerSelection) === -1){
            console.log("It's a Tie !");
        }
        else if(playRound(choiceV2, computerSelection)) {
            playerScore += 1;
            console.log("Player Wins, " + choiceV2 + " beats " + computerSelection);
        }
        else if(!playRound(choiceV2, computerSelection)) {
            computerScore += 1;
            console.log("Computer Wins, " + computerSelection + " beats " + choiceV2);
        }
    }

    if(playerScore > computerScore){
        console.log("Game finished, Player Wins " + playerScore + "-" + computerScore);
    }
    else if(playerScore < computerScore){
        console.log("Game finished, Computer Wins " + computerScore + "-" + playerScore);
    }
    else {
        console.log("Game finished, it's a Tie " + playerScore + "-" + computerScore);
    }
}

game();