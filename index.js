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


function runTheGame(playerSelection){
  if(playerSelection === null || playerSelection.trim() === ""){
    alert("You need an input to play the game")
    return false
  }
  return true
}


function singleRound(computerSelection, playerSelection) {
  while (runTheGame(playerSelection)) {
    playerSelection = playerSelection.toLowerCase()
    let choice = ["rock", "paper", "scissor"]
    if (!choice.includes(playerSelection)) {
      playerSelection = prompt("What's your choice?")
    }
    if (computerSelection === playerSelection) {
      console.log(`The computer selection: ${computerSelection}`)
      return "It is a tie"
    } else {
      if (computerSelection === "rock" && playerSelection === "paper") {
        console.log(`The computer selection: ${computerSelection}`)
        return "You Win! Paper beats Rock"
      }
      else if (computerSelection === "rock" && playerSelection === "scissor") {
        console.log(`The computer selection: ${computerSelection}`)
        return "You Lose! Rock beats scissor"
      }
      else if (computerSelection === "paper" && playerSelection === "scissor") {
        console.log(`The computer selection: ${computerSelection}`)
        return "You Win! Scissor beats paper"
      }
      else if (computerSelection === "paper" && playerSelection === "rock") {
        console.log(`The computer selection: ${computerSelection}`)
        return "You Lose! Paper beats Rock"
      }
      else if (computerSelection === "scissor" && playerSelection === "rock") {
        console.log(`The computer selection: ${computerSelection}`)
        return "You Win! Rock beats scissor"
      }
      else if (computerSelection === "scissor" && playerSelection === "paper") {
        console.log(`The computer selection: ${computerSelection}`)
        return "You Lose! Scissor beats paper"
      }
    }
  }
}



function playGame() {
  let computerWins = 0
  let playerWins = 0
  for (i = 0; i < 5; i++) {
    let playerSelection = prompt("What's your choice")
    const computerSelection = getComputerChoice()
    let result = singleRound(computerSelection, playerSelection)
    console.log(result)
    let statusW = "Win"
    let statusL = "Lose"
    if (result !== undefined){
      if(result.indexOf(statusW) != -1){
        playerWins += 1
      } else if (result.indexOf(statusL) != -1){
        computerWins += 1
      }
    }
  }
  if (playerWins > computerWins){
    console.log(`The player got ${playerWins - computerWins} more wins than the computer.`)
  } else if (playerWins < computerWins){
    console.log(`The computer got ${computerWins - playerWins} more wins than the player.`)
  } else {
    if (playerWins == 0 && computerWins == 0){
      console.log("The game was not played.")
    } else {
      console.log("It is a tie.")
    }
  }
}

playGame()