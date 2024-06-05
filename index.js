const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissor = document.querySelector(".scissor")
const results = document.querySelector(".results")
const overAllWinner = document.querySelector(".overAllWinner")
const computerScore = document.querySelector(".computerScore")
const playerScore = document.querySelector(".playerScore")


rock.addEventListener("click", func1);
paper.addEventListener("click", func1);
scissor.addEventListener("click", func1);

function func1(e) {
  let param = e.target.className
  playGame(param)
}

function getComputerChoice() {
  let value = Math.random()
  if (value >= 0 && value <= 0.33) {
    return 'rock'
  }
  else if (value > 0.33 && value <= 0.66) {
    return 'paper'
  }
  else if (value > 0.66 && value <= 1) {
    return 'scissor'
  }
}

function singleRound(computerSelection, playerSelection) {
  playerSelection = playerSelection.toLowerCase()
  let choice = ["rock", "paper", "scissor"]
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

function playGame(playerChoice) {
  let playerSelection = playerChoice
  const computerSelection = getComputerChoice()
  let result = singleRound(computerSelection, playerSelection)
  results.textContent = `Result: ${result}`
  if (result !== undefined) {
    if (result.indexOf("Win") != -1) {
      if (typeof countPlayer === "undefined") {
        countPlayer = 0;
      }
      countPlayer++
      playerScore.textContent = `Player Score: ${countPlayer}`
    } else if (result.indexOf("Lose") != -1) {
      if (typeof (countComputer) === "undefined") {
        countComputer = 0;
      }
      countComputer++
      computerScore.textContent = `Computer Score: ${countComputer}`
    }
  }
    if (countComputer === 5 || countPlayer === 5) {
      if (countComputer === 5) {
        countComputer = 0
        countPlayer = 0
        alert("The computer wins in 5 rounds.")
      } else if (countPlayer === 5) {
        countComputer = 0
        countPlayer = 0
        alert("The player wins in 5 rounds.")
      }

      playerScore.textContent = `Player Score: ${countPlayer}`
      computerScore.textContent = `Computer Score: ${countComputer}`
      results.textContent = ""
  }
}