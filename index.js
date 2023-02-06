let actualRound = 0, playerPoints = 0, computerPoints = 0;
const roundText = document.querySelector(".round-text");
const roundContainer = document.querySelector('.round-container');

let randomThree = max => Math.floor(Math.random() * max);

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  return options[randomThree(3)];
  //return options[1];
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
          roundText.textContent="Papel embrulha Pedra: Você perdeu!";
          //console.log("Paper eats Rock: You Lose!");
          return "computer";
        default:
          roundText.textContent="Pedra esmaga Tesoura: Você ganhou!";
          //console.log("Rock breaks Scissors: You Win!");
          return "player";
      }
    case "paper":
      switch (computerSelection){
        case "rock":
          roundText.textContent="Papel embrulha Pedra: Você ganhou!";
          //console.log("Paper eats Rock: You Win!");
          return "player";
        default:
          roundText.textContent="Tesoura corta Papel: Você perdeu!";
          //console.log("Scissors cut Paper: You Lose!");
          return "computer";
      }
    default:
      switch (computerSelection){
        case "rock":
          roundText.textContent="Pedra quebra Tesoura: Você perdeu!";
          //console.log("Rock breaks Scissors: You Lose!");
          return "computer";
        default:
          roundText.textContent="Tesoura corta Papel: Você ganhou!";
          //console.log("Scissors cut Paper: You Win!");
          return "player";
      }
    }
  }
}

function processRound(playerSelection){
  let result = playRound(playerSelection, getComputerChoice());
  actualRound += 1;

}

/*function getPlayerSelection(){
  let playerSelection = "";
  while (
    playerSelection != "rock" &&
    playerSelection != "paper" &&
    playerSelection != "scissors"){
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
  }
  return playerSelection;
}

function playGame(){
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
  
}*/

//playGame();

function removeTransition(e) {
  e.target.classList.remove('clicked');
}

const buttons = document.querySelectorAll(".player-selection");
console.log(buttons);
buttons.forEach( e => {
  e.addEventListener('click', () => {
    if(actualRound < 5){
      e.classList.add('clicked');

      e.addEventListener('transitionend', removeTransition);
  
      processRound(e.dataset.tool);
    }
  })
})