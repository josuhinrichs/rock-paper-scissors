let actualRound = 0, playerPoints = 0, computerPoints = 0;
const roundText = document.querySelector(".round-text");
const roundContainer = document.querySelector('.round-container');
const roundDisplay = document.querySelector('#round-display');
const playerScore = document.querySelector('#player-score-text');
const computerScore = document.querySelector('#computer-score-text');
const restartButton = document.querySelector('#restart-game');
const computerDisplay = document.querySelector('.computer-choice-text');
const playerDisplay = document.querySelector('.player-choice-text');

let randomThree = max => Math.floor(Math.random() * max);

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  const choice = randomThree(3);

  switch (options[choice]){
    case "paper":
        computerDisplay.textContent = "Papel";
        break;
    case "rock":
        computerDisplay.textContent = "Pedra";
        break;
    default:
        computerDisplay.textContent = "Tesoura";
        break;
  }
  
  return options[choice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    roundText.textContent="EMPATE";
    return "tie";
  } else {
    switch (playerSelection) {
    case "rock":
      switch (computerSelection){
        case "paper":
          roundText.textContent="Papel embrulha Pedra: Você perdeu!";
          return "computer";
        default:
          roundText.textContent="Pedra esmaga Tesoura: Você ganhou!";
          return "player";
      }
    case "paper":
      switch (computerSelection){
        case "rock":
          roundText.textContent="Papel embrulha Pedra: Você ganhou!";
          return "player";
        default:
          roundText.textContent="Tesoura corta Papel: Você perdeu!";
          return "computer";
      }
    default:
      switch (computerSelection){
        case "rock":
          roundText.textContent="Pedra quebra Tesoura: Você perdeu!";
          return "computer";
        default:
          roundText.textContent="Tesoura corta Papel: Você ganhou!";
          return "player";
      }
    }
  }
}

function processRound(playerSelection){
  let result = playRound(playerSelection, getComputerChoice());
  switch (playerSelection){
    case "paper":
        playerDisplay.textContent = "Papel";
        break;
    case "rock":
        playerDisplay.textContent = "Pedra";
        break;
    default:
        playerDisplay.textContent = "Tesoura";
        break;
  }

  switch(result) {
    case "player":
        playerPoints += 1;
        break;
    case "computer":
        computerPoints += 1;
        break;
    default:
        return;
  }

  actualRound += 1;
  roundDisplay.textContent = `Round ${actualRound}`;
  computerScore.textContent = `Computador | ${computerPoints} ponto(s)`;
  playerScore.textContent = `Você | ${playerPoints} ponto(s)`;
  if (actualRound == 5){
    roundDisplay.textContent = `JOGO FINALIZADO`;
    if (playerPoints > computerPoints){
        roundText.textContent="PARABÉNS, VOCÊ GANHOU!";
    } else {
        roundText.textContent="NÃO FOI DESSA VEZ, O COMPUTADOR GANHOU! ";
    }

    restartButton.style.visibility = 'visible';
  }

}

function restartGame(){
    actualRound = 0;
    playerPoints = 0;
    computerPoints = 0;
    roundDisplay.textContent = `Inicie o jogo clicando na opção`;
    computerScore.textContent = `Computador | ${computerPoints} ponto(s)`;
    playerScore.textContent = `Você | ${playerPoints} ponto(s)`;
    roundText.textContent = "Você ainda não começou o jogo!";
    playerDisplay.textContent = "Você ainda não começou o jogo!";
    computerDisplay.textContent = "Você ainda não começou o jogo!";
    restartButton.style.visibility = 'hidden';
}

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
});

restartButton.addEventListener('click', restartGame);