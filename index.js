let randomThree = max => Math.floor(Math.random() * max);

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[randomThree(3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a Tie!");
        return "tie";
    } else {
        switch (playerSelection) {
        case "rock":
            switch (computerSelection){
                case "paper":
                    console.log("Paper eats Rock: You Lose!");
                    return "computer"
                default:
                    console.log("Rock breaks Scissors: You Win!");
                    return "player"
            }
        case "paper":
            switch (computerSelection){
                case "rock":
                    console.log("Paper eats Rock: You Win!");
                    return "player"
                default:
                    console.log("Scissors cut Paper: You Lose!");
                    return "computer"
            }
        default:
            switch (computerSelection){
                case "rock":
                    console.log("Rock breaks Scissors: You Lose!");
                    return "computer"
                default:
                    console.log("Scissors cut Paper: You Win!");
                    return "player"
            }
        }
    }
}

function getPlayerSelection(){
    let playerSelection = "";
    while (
        playerSelection != "rock" &&
        playerSelection != "paper" &&
        playerSelection != "scissors"){
        playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        }
    return playerSelection;
}

function game(){
    let roundResult,
    playerSelection,
    computerSelection,
    playerScore = 0,
    computerScore = 0;
    
    for (let i = 0; i < 5; i++){
        playerSelection = getPlayerSelection();
        computerSelection = getComputerChoice();
        roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        switch (roundResult){
            case "player":
                playerScore += 1
                break;
            case "computer":
                computerScore += 1
                break;
            default: i -= 1
                break;
        }
        
        console.log(`Scoreboard -> You - ${playerScore} | Computer - ${computerScore}`);
    }

    if (playerScore > computerScore){
        console.log("Congratulations, you are the winner!");
    } else {
        console.log("You lost :(");
    }

    console.log(`Final Scoreboard -> You - ${playerScore} | Computer - ${computerScore}`);
    
}

game();