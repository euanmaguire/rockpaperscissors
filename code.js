const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const play = document.querySelector('.play');
const content = document.querySelector('.game-content');

let playerScore = 0;
let computerScore = 0;
let roundCounter = 1

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

rock.addEventListener('transitionend', removeTransition);
paper.addEventListener('transitionend', removeTransition);
scissors.addEventListener('transitionend', removeTransition);

content.removeChild(play);

function playerSelect(e){
    playerChoice = this.classList.toString();
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('pressed');
  }

function computerPlay() {
    let randint = Math.floor(Math.random() * 3);
    let answer = (randint == 0) ? "rock" : (randint == 1) ? "paper" : (randint == 2) ? "scissors" : undefined ;
    return answer;
}


function playRound(e) {

    let computerSelection = computerPlay();
    let oldPlayerScore = playerScore;
    let oldComputerScore = computerScore; 

    if(playerScore === 5 || computerScore === 5){
        if(playerScore === 5) {
            document.getElementById("outcome").textContent = "Game finished, Player Wins !"
        }
        else{
            document.getElementById("outcome").textContent = "Game finished, Computer Wins !"
        }
        content.appendChild(play)
    }
    
    else{
        if(this.classList.toString() === "rock") {
            if(computerSelection === "paper"){
                computerScore++;
            }
            else if(computerSelection === "scissors"){
                playerScore++;
            }
        }
        else if(this.classList.toString() === "paper") {
            if(computerSelection === "scissors"){
                computerScore++;
            }
            else if(computerSelection === "rock"){
                playerScore++;
            }
        }
        else if(this.classList.toString() === "scissors") {
            if(computerSelection === "rock"){
                computerScore++;
            }
            else if(computerSelection === "paper"){
                playerScore++;
            }
        }

        if(playerScore > oldPlayerScore){
            document.getElementById("outcome").textContent = `Player Wins ! ${this.classList} beats ${computerSelection}`
        }
        else if(computerScore > oldComputerScore){
            document.getElementById("outcome").textContent = `Computer Wins ! ${computerSelection} beats ${this.classList}`
        }
        else{
            document.getElementById("outcome").textContent = "It's a Tie!"
        }

        roundCounter++;
        document.getElementById("round").textContent = `Round ${roundCounter}`;
    }
    
    document.getElementById("playerScore").textContent = playerScore.toString();
    document.getElementById("computerScore").textContent = computerScore.toString();
    this.classList.add('pressed');
}

function reset() {
    content.removeChild(play);
    playerScore = 0;
    computerScore = 0;
    roundCounter = 1
    document.getElementById("playerScore").textContent = playerScore.toString();
    document.getElementById("computerScore").textContent = computerScore.toString();
    document.getElementById("round").textContent = `Round ${roundCounter}`;
    document.getElementById("outcome").textContent = ""

}
