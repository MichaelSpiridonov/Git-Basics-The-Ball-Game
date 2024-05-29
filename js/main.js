'use strict'
var gSize = 150

function onBallClick(elBall, maxDiameter) {
    if (gSize > maxDiameter) gSize = 100
    elBall.style.width = `${gSize}px`
    elBall.style.height = `${gSize}px`
    elBall.innerText = gSize
    elBall.style.backgroundColor = getRandomColor()
    gSize += getRandomInt(20, 60)
}