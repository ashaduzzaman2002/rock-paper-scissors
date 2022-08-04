const playerScore = document.getElementById('player-score')
const hands = document.getElementById('hands')
const result = document.getElementById('result')
const endGameButton = document.getElementById('endGameButton')
const rpsBtn = document.querySelectorAll('.rpsBtn')


totalScore = {'playerTotalScore': 0}

// Computer choice function
const getComputerChoice = () => {
    const rspChoices = ['Rock', 'Paper', 'Scissors']
    const computerChoice = Math.floor(Math.random() * rspChoices.length)
    return rspChoices[computerChoice]
}


// Result checking function
const getResult = (playerChoice, computerChoice) => {
    let score;

    if (playerChoice === computerChoice) {
        score = 0
    }
    else if(playerChoice === 'Rock' && computerChoice === 'Scissors'){
        score = 1
    }
    else if(playerChoice === "Paper" && computerChoice === "Rock"){
        score = 1
    }
    else if(playerChoice === 'Scissors' && computerChoice === 'Paper'){
        score = 1
    }
    else {
        score = -1
    }
    return score
}

// Show the result to the web page
const showResutl = (score, playerChoice, computerChoice) => {

    switch(score){
        case -1:
            result.innerText = `You Lose!`
            break;
        case 0:
            result.innerText = `It's a Draw!`
            break;
        case 1:
            result.innerText = `You Win!`
            break;
    }

    playerScore.innerText = `Your score: ${Number(totalScore['playerTotalScore']) + score}`
    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}


// Player choice function
const playerChoice = (playerChoice) => {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice, computerChoice)
    showResutl(score, playerChoice, computerChoice)
}


//Game play function
const playGame = () => {

    rpsBtn.forEach(btn => {
        btn.onclick = () => playerChoice(btn.value)
    })    
}

// End game function

endGameButton.onclick = () => {
    totalScore['playerTotalScore'] = 0
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
}

playGame()