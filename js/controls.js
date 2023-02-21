import Timer from "./timer"

export default function Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
}) { // Factory

    function play() {
        buttonPlay.classList.add('hide')

        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
        buttonPause.classList.remove('hide')
 
    }

    function pause() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }
    function reset() {

        buttonPlay.classList.remove('hide')  
    
        buttonSet.classList.remove('hide')
        buttonStop.classList.add('hide')
        buttonPause.classList.add('hide')
    }

    function getMinutes() {
        let newMinutes = prompt('Sete o minuto do alarme: ') 

        if(!newMinutes) {
            return false
        }

        return newMinutes
    }

    return {
        reset, 
        play,
        pause,
        getMinutes
    }
}

