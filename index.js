function getComputerChoice() {
  let value = Math.random()
  if (value >= 0 && value <= 0.33){
    return 'rock'
  }
  else if (value > 0.33 && value <= 0.66){
    return 'paper'
  }
  else if (value > 0.66 && value <= 1){
    return 'scissor'
  }
}

var playerSelection = prompt("What's your choice")
const computerSelection = getComputerChoice()


function runTheGame(playerSelection){
  if(playerSelection === null || playerSelection.trim() === ""){
    alert("You need an input to play the game")
    return false
  }
  return true
}

function singleRound(computerSelection, playerSelection){
  while(runTheGame(playerSelection)) {
  playerSelection = playerSelection.toLowerCase()
  var choice = ["rock", "paper", "scissor"]
  if (!choice.includes(playerSelection)) {
    playerSelection = prompt("What's your choice?")
  } 
  console.log(`The computer selection: ${computerSelection}`)
  if (computerSelection === playerSelection){
    return "It is a tie"
  }
  else if (playerSelection === "default"){
    return "You cancelled the game"
  }
  else {
    if(computerSelection === "rock" && playerSelection === "paper") {
      return "You Win! Paper beats Rock"
    }
    else if(computerSelection === "rock" && playerSelection === "scissor"){
      return "You Lose! Rock beats scissor"
    }
    else if(computerSelection === "paper" && playerSelection === "scissor"){
      return "You Win! Scissor beats paper"
    }
    else if(computerSelection === "paper" && playerSelection === "rock"){
      return "You Lose! Paper beats Rock"
    }
    else if(computerSelection === "scissor" && playerSelection === "rock"){
      return "You Win! Rock beats scissor"
    }
    else if(computerSelection === "scissor" && playerSelection === "paper"){
      return "You Lose! Scissor beats paper"
    }
  }
}
}
console.log(singleRound(computerSelection, playerSelection))