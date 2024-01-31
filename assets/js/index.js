function runGame(playerChoice) {
    let resultsDisplay = document.getElementById("resultsDisplay");
    const pscore = document.getElementById("pscore");
    const oscore = document.getElementById("oscore");

    let player = 0;
    let opponent = 0;

    const choice = ["rock", "paper", "scissors", "lizard", "spock"];
    const opponentChoice = choice[Math.floor(Math.random() * choice.length)];

    /*const result =
    winner(playerChoice, opponentChoice);*/

    let result;
    if (playerChoice == opponentChoice) {

        result = "It's a TIE";
    }
    else if (playerChoice == "rock") {

        if (opponentChoice == 'lizard' || opponentChoice == 'scissors') {

            result = "You WIN";

        } else if (opponentChoice == 'spock' || opponentChoice == 'paper') {

            result = "Opponent WIN";
        }
    }

    else if (playerChoice == 'paper') {
        if (opponentChoice == 'rock' || opponentChoice == 'spock') {

            result = "You WIN";
        }
        else if (opponentChoice == 'scissors' || opponentChoice == 'lizard') {

            result = "Opponent WIN";
        }
    }
    else if (playerChoice == 'scissors') {

        if (opponentChoice == 'paper' || opponentChoice == 'lizard') {

            result = "You WIN";
        }
        else if (opponentChoice == 'spock' || opponentChoice == 'rock') {

            result = "Opponent WIN";
        }
    }
    else if (playerChoice == 'lizard') {

        if (opponentChoice == 'paper' || opponentChoice == 'spock') {

            result = "You WIN";
        }
        else if (opponentChoice == 'rock' || opponentChoice == 'scissors') {

            result = "Opponent WIN";
        }
    }
    else if (playerChoice == 'spock') {

        if (opponentChoice == 'rock' || opponentChoice == 'scissors') {

            result = "You WIN";
        }
        else if (opponentChoice == 'paper' || opponentChoice == 'lizard') {

            result = "Opponent WIN";
        }
    }

    resultsDisplay.textContent = result;
}

