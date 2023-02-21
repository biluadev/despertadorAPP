
import Controls from "./controls.js"
import Timer from "./timer.js"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
})

const timer = Timer({
    minutesDisplay,   
    secondsDisplay,
    timerTimeOut,
    resetControls: controls.reset
})

buttonPlay.addEventListener('click', function() {
    
    controls.play()
    timer.countdown()
});

buttonPause.addEventListener('click', function() {
    
    clearTimeout/* Limpa o timeOut */(timerTimeOut)
});

buttonStop.addEventListener('click', function() {
    Controls.reset()
    timer.reset()

});

buttonSoundOn.addEventListener('click', function() {
    buttonSoundOff.classList.remove('hide')
    buttonSoundOn.classList.add('hide')
});

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOff.classList.add('hide')

    buttonSoundOn.classList.remove('hide')
});

buttonSet.addEventListener('click', function() {
    let newMinutes = controls.getMinutes()
    
    if(!newMinutes) {
        timer.resetTimer()
        return
    }

    minutes = newMinutes
    timer.updateDisplay(minutes, 0)
})

