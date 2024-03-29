

let playerScore =0;
let computerScore =0;
let turns = 6;
let remainingTurns = turns;

function computerChoice(){
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
}

function gameRules(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {

        return "It's a TIE";
    }
    else if (playerChoice == "rock") {

        if (computerChoice == 'lizard' || computerChoice == 'scissors') {

            return "You WIN";

        } else if (computerChoice == 'spock' || computerChoice == 'paper') {

            return "Opponent WIN";
        }
    }

    else if (playerChoice == 'paper') {
        if (computerChoice == 'rock' || computerChoice == 'spock') {

            return "You WIN";
        }
        else if (computerChoice == 'scissors' || computerChoice == 'lizard') {

            return "Opponent WIN";
        }
    }
    else if (playerChoice == 'scissors') {

        if (computerChoice == 'paper' || computerChoice == 'lizard') {

            return"You WIN";
        }
        else if (computerChoice == 'spock' || computerChoice == 'rock') {

            return"Opponent WIN";
        }
    }
    else if (playerChoice == 'lizard') {

        if (computerChoice == 'paper' || computerChoice == 'spock') {

            return "You WIN";
        }
        else if (computerChoice == 'rock' || computerChoice == 'scissors') {

            return "Opponent WIN";
        }
    }
    else if (playerChoice == 'spock') {

        if (computerChoice == 'rock' || computerChoice == 'scissors') {

            return 'You WIN';
        }
        else if (computerChoice == 'paper' || computerChoice == 'lizard') {

            return "Opponent WIN";
        }
    }
}

function updateScore(result){
    if (result === 'You WIN'){
        playerScore++;
    }
    else if (result === "Opponent WIN"){
        computerScore++;
    }
document.getElementById('score').innerText= `Score - You: ${playerScore} Computer: ${computerScore}`;
}

function runGame(playerChoice){
    if (remainingTurns === 0){
        alert('Game Over');
        return;
    }
    const computer= computerChoice();
    const result = gameRules(playerChoice, computer);
    updateScore(result);
    document.getElementById('result').innerText = `${result} Your Choice: ${playerChoice}, Computer Choice: ${computer}`;
    remainingTurns--;
    if (remainingTurns === 0){
        alert('Game Over');
    }
}

function endGame(){
    if (playerScore > computerScore){
        alert('You win the Game');
    }
    else if(computerScore > playerScore){
        alert('Computer win the Game');
    }else{
         alert('Its a TIE') 
    }resetGame();
}

function resetGame(){
    playerScore= 0;
    computerScore - 0;
    remainingTurns = turns;
    document.getElementById('score').innerText= `Score - You: ${playerScore} Computer: ${computerScore}`;
    document.getElementById('result').innerText = '';

}
