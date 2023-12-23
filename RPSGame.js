function getComputerChoice() {
    let RandomNumber = Math.random()
    if (RandomNumber > 0.66) {
        return "Rock"
    }
    else if ( RandomNumber > 0.33) {
        return "Paper"
    }
    else return "Scissors"
}

function playRound(playerSelection, computerSelection) {
    a = playerSelection.slice(0,1)
    b = playerSelection.slice(1)
    playerSelection = a.toUpperCase() + b.toLowerCase()
    while (keepGoing = true) {
        if (playerSelection == computerSelection) {
            computerSelection = getComputerChoice()
        }
        else if (playerSelection == "Paper") {
            if (computerSelection == "Rock") {
                result.textContent="You Win! Paper beats Rock"
                return 1
        } else {result.textContent="You Lose! Scissors beats Paper"
                return 0}}
        else if (playerSelection == "Rock") {
            if (computerSelection == "Paper") {
                result.textContent="You Lose! Paper beats Rock"
                return 0
        } else {result.textContent="You Win! Rock beats Scissors"
                return 1}}
        else if (playerSelection == "Scissors") {
            if (computerSelection == "Paper") {
                result.textContent="You Win! Scissors beats Paper"
                return 1
        } else {result.textContent="You Lose! Rock beats Scissors"
                return 0}}
        else { result.textContent="I don't understand your selection. Choose between Scissors, Paper and Rock"
                return null}
    }}

    let playerWins = 0
    let computerWins = 0
    
let results = document.createElement('div')
let buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click',(e) => {
        if (playRound(button.id,getComputerChoice())) {
            playerWins++
        }
        else {
            computerWins++
        }
        if (playerWins < 5 && computerWins < 5) {results.textContent = `Player: ${playerWins} Computer: ${computerWins}`}
        else if (playerWins == 5) {
            results.textContent = `You won the game 5x${computerWins}`
            playerWins = 0
            computerWins = 0
        }
        else {
            results.textContent = `Computer won the game 5x${playerWins}`
            playerWins = 0
            computerWins = 0
        }
    }
    )
    
})

let result = document.createElement('div')
let body = document.querySelector('body')
body.appendChild(result)


body.appendChild(results)
