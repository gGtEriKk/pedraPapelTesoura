const result = document.querySelector('.result')
const humanScore = document.getElementById('human-score')
const machineScore = document.getElementById('machine-score')
const finalResult = document.querySelector('.final-result')
const restartButton = document.querySelector('restart-button')
const finalScore = document.querySelector('.final-score')

let currentHumanScore = 0
let currentMachineScore = 0

const playHuman = (humanChoice) => {
    console.log(humanChoice)

    playingGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissor']

    const randomChoice = Math.floor(Math.random() * 3)

    return choices[randomChoice]
}

const playingGame = (human, machine) => {
    console.log('Humano: ' + human, 'Máquina: ' + machine)

    if (human === machine) {
        result.innerHTML = 'Empatou!'
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissor') ||
        (human === 'scissor' && machine === 'paper')
    ) {
        currentHumanScore++
        humanScore.innerHTML = currentHumanScore
        result.innerHTML = 'Você ganhou!'
    } else {
        currentMachineScore++
        machineScore.innerHTML = currentMachineScore
        result.innerHTML = 'Você perdeu!'
    }

    if(currentHumanScore === 10){
        finalResult.style.visibility = 'visible'
        finalScore.innerHTML = 'Você venceu!!!'
        finalScore.style.color = '#00FF00'
    } else if (currentMachineScore === 10){
        finalResult.style.visibility = 'visible'
        finalScore.innerHTML = 'Você foi derrotado.'
        finalScore.style.color = '#FF0000'
    }
}

function restartGame(){
    finalResult.style.visibility = 'hidden'
    currentHumanScore = 0
    humanScore.innerHTML = '0'
    currentMachineScore = 0
    machineScore.innerHTML = '0'
    result.innerHTML = ''
}

// papel --> pedra --> tesoura --> papel