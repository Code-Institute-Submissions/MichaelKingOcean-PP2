

let playerScore =0;
let computerScore =0;

function computerChoice(){
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
}

function rules(playerChoice, computerChoice) {

    let result;
    if (playerChoice == computerChoice) {

        result = "It's a TIE";
    }
    else if (playerChoice == "rock") {

        if (opponentChoice == 'lizard' || computerChoice == 'scissors') {

            result = "You WIN";

        } else if (computerChoice == 'spock' || computerChoice == 'paper') {

            result = "Opponent WIN";
        }
    }

    else if (playerChoice == 'paper') {
        if (computerChoice == 'rock' || computerChoice == 'spock') {

            result = "You WIN";
        }
        else if (computerChoice == 'scissors' || computerChoice == 'lizard') {

            result = "Opponent WIN";
        }
    }
    else if (playerChoice == 'scissors') {

        if (computerChoice == 'paper' || computerChoice == 'lizard') {

            result = "You WIN";
        }
        else if (computerChoice == 'spock' || computerChoice == 'rock') {

            result = "Opponent WIN";
        }
    }
    else if (playerChoice == 'lizard') {

        if (computerChoice == 'paper' || computerChoice == 'spock') {

            result = "You WIN";
        }
        else if (computerChoice == 'rock' || computerChoice == 'scissors') {

            result = "Opponent WIN";
        }
    }
    else if (playerChoice == 'spock') {

        if (computerChoice == 'rock' || computerChoice == 'scissors') {

            result = "You WIN";
        }
        else if (computerChoice == 'paper' || computerChoice == 'lizard') {

            result = "Opponent WIN";
        }
    }
}

function updateScore(){
    if (result === 'You WIN'){
        playerScore++;
    }
    else if (result === "Opponent WIN"){
        computerScore++;
    }
document.getElementById('score').innerText= `Score - You: ${playerScore} Computer: ${computerScore}`;
}
