'use strict'
var gSize = 150

function onBallClick(elBall) {
    if (gSize > 400) gSize = 100
    elBall.style.width = `${gSize}px`
    elBall.style.height = `${gSize}px`
    elBall.innerText = gSize
    gSize += 50
}