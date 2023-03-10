
export default function Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    resetControls
}) {


    function updateDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    }
    
    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }
    
    // FUNCTION DO TIMER AO DAR PLAY
    function countdown() {
       timerTimeOut = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
    
            updateDisplay(minutes, 0)
    
            if(minutes <= 0) {
    
                resetControls()
                return
            }
    
            if( seconds <= 0 ) {
                seconds = 2
    
               --minutes
            }
    
            updateDisplay(minutes, String(seconds - 1))
            //RECURSÃO (A função fica chamando ela mesma)
            countdown()
        }, 1000)
    }
    
    return {
        countdown,
        reset,
        updateDisplay
    }
    
}
