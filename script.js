
const meowSound = document.getElementById('meow');
const applauseSound = document.getElementById('applause');
const tanoySound = document.getElementById('tanoy');
const alarmSound = document.getElementById('alarm');
const alienSound = document.getElementById('alien');
const smashSound = document.getElementById('smash');

meowSound.addEventListener("click", playSound);
applauseSound.addEventListener("click", playSound);
tanoySound.addEventListener("click", playSound);
alarmSound.addEventListener("click", playSound);
alienSound.addEventListener("click", playSound);
smashSound.addEventListener("click", playSound);

function playSound () {
    const buttonId = this.id;
    console.log(this.id)

    switch(buttonId) {
        case 'meow': 
        new Audio('sounds/meow.mp3').play();
        break;

        case 'applause': 
        new Audio('sounds/applause.mp3').play();
        break;

        case 'tanoy' : 
        new Audio('sounds/tanoy.mp3').play();
        break;

        case 'alarm' : 
        new Audio('sounds/alarm.mp3').play();
        break;

        case 'alien' : 
        new Audio('sounds/alien.mp3').play();
        break;

        case 'smash' : 
        new Audio('sounds/smash.mp3').play();
        break;

    }
}

// OR

// const buttons = document.getElementById('button')
// let current = ''

// for (const button of buttons) {
//     button.addEventListener("click", playSound())
// }

// function playSound(e) {
//     const player = new Audio('./sounds/(${e.target.id}).mp3').play()

    // this checks if current is empty and if it is then we assign player value to current and current gets paused
//     if(current == '')
//     {
//         current = player

//     }

//     current.pause()
//     current = player
// }

