



const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const circle = document.querySelector('circle')

const perimter = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray',perimter)

let duration;

const timer = new Timer(durationInput, startButton, pauseButton ,{
    onStart(totalDuration){
            console.log('Timer started');
            duration = totalDuration
    },
    onTick(timeRemaing ){
        console.log('Timer just ticked down');

        circle.setAttribute('stroke-dashoffset',
            perimter * timeRemaing / duration - perimter

         )
 
    },
    onComplete(){
        console.log('Timer is completed');

    }
})

