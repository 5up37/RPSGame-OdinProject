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
                console.log("You Win! Paper beats Rock")
                return 1
        } else {console.log("You Lose! Scissors beats Rock")
                return 0}}
        else if (playerSelection == "Rock") {
            if (computerSelection == "Paper") {
                console.log("You Lose! Paper beats Rock")
                return 0
        } else {console.log("You Win! Rock beats Scissors")
                return 1}}
        else if (playerSelection == "Scissors") {
            if (computerSelection == "Paper") {
                console.log("You Win! Scissors beats Paper")
                return 1
        } else {console.log("You Lose! Rock beats Scissors")
                return 0}}
        else { console.log("I don't understand your selection. Choose between Scissors, Paper and Rock")
                return null}
    }}

function game() {
    let playerSelection = prompt('Rock, Paper or Scissors', 'Rock')
    let playerWins = 0
    let computerWins = 0

    if(playRound(playerSelection, getComputerChoice())) { playerWins++
}
else {computerWins++}
console.log('Player:' + playerWins + '   Computer:' + computerWins)
    playerSelection = prompt('Rock, Paper or Scissors', 'Rock')

    if(playRound(playerSelection, getComputerChoice())) { playerWins++
}
else {computerWins++}
console.log('Player:' + playerWins + '   Computer:' + computerWins)
    playerSelection = prompt('Rock, Paper or Scissors', 'Rock')
    if(playRound(playerSelection, getComputerChoice())) { playerWins++
}
else {computerWins++}
console.log('Player:' + playerWins + '   Computer:' + computerWins)
    playerSelection = prompt('Rock, Paper or Scissors', 'Rock')
    if(playRound(playerSelection, getComputerChoice())) { playerWins++
}
else {computerWins++}
console.log('Player:' + playerWins + '   Computer:' + computerWins)
    playerSelection = prompt('Rock, Paper or Scissors', 'Rock')
    if(playRound(playerSelection, getComputerChoice())) { playerWins++
    }
    else {computerWins++}
    console.log('Player:' + playerWins + '   Computer:' + computerWins)

    if (playerWins >= 3) {console.log('You Won!')}
        else {console.log('You Lose!')}
    }