'use strict'
var gSize = 150

var cycles = 0
var gameInterval = null
var moves = 0
//Define Ball1 and Ball2
var ball1 = document.querySelector('.ball1')
var ball2 = document.querySelector('.ball2')
var gMove = []


function onBallClick(elBall, maxDiameter) {
    moves++
    if (gSize > maxDiameter || gSize > 400) gSize = 100
    elBall.style.width = `${gSize}px`
    elBall.style.height = `${gSize}px`
    elBall.innerText = gSize
    elBall.style.backgroundColor = getRandomColor()
    gSize += getRandomInt(20, 60)
    gMove.push({
        id: elBall.classList[1],
        move: moves,
        size: `${gSize}px` 
    })
}

function swapColorAndSize() {
    //Obtain Size and colors
    var ball1Color = ball1.style.backgroundColor
    var ball2Color = ball2.style.backgroundColor
    var ball1Size = ball1.style.height
    var ball2Size = ball2.style.height


    //Set Color
    ball1.style.backgroundColor = ball2Color
    ball2.style.backgroundColor = ball1Color

    //Set Size
    ball1.style.width = ball2Size
    ball1.style.height = ball2Size
    ball2.style.width = ball1Size
    ball2.style.height = ball1Size

    //Set InnerText To match
    ball1.innerText = ball2Size.split('px')[0]
    ball2.innerText = ball1Size.split('px')[0]

}


function decreaseBalls() {
    //Obtain random subtraction number
    var rndSubtract = getRandomInt(20, 60)
    var size

    // Subtract from both
    size = +ball1.style.width.split('px')[0] - rndSubtract + 'px'
    if (size.split('px')[0] < 100) size = '100px'
    ball1.style.width = size
    ball1.style.height = size
    ball1.innerText = size.split('px')[0]
    size = +ball1.style.width.split('px')[0] - rndSubtract + 'px'
    if (size.split('px')[0] < 100) size = '100px'
    ball2.style.width = size
    ball2.style.height = size
    ball2.innerText = size.split('px')[0]
}

function changeBackground() {
    //Define Element Body
    var elBody = document.querySelector('body')

    //Change the color of the background as the assignment suggests
    elBody.style.backgroundColor = getRandomColor()
}

function resetGame() {
    // Define variable for default sizing
    clearInterval(gameInterval)
    gameInterval = null
    cycles = 0
    var size = '100px'
    //Reset values
    ball1.style.width = size
    ball1.style.height = size
    ball1.innerText = size.split('px')[0]
    ball2.style.width = size
    ball2.style.height = size
    ball2.innerText = size.split('px')[0]

    gMove = []
}

function startInterval() {
    if (gameInterval) return;
    setTimeout(() => {
        gameInterval = setInterval(() => {
            onBallClick(ball1, 200)
            onBallClick(ball2, 200)
            cycles++
            if (cycles > 9) stopInterval()
        }, 2000)
    }, 2000)
}

function stopInterval() {
    clearInterval(gameInterval)
    gameInterval = null
    cycles = 0
}

function undoMove() {

}

function redoMove() {

}