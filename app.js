const deck = document.querySelectorAll(".card");
const body = document.querySelector("body");
const attemptsMsg = document.querySelector(".attempts");
const resetBtn = document.querySelector(".reset");
const soundBtn = document.querySelector(".sound");

// Audio files
const breathing = new Audio("sounds/vader_breathing.mp3");
const cardClick = new Audio("sounds/lightsaber.mp3");
const introSound = new Audio("sounds/theme-song.mp3");
const yodaLaugh = new Audio("sounds/yoda.wav");
const vaderMatch = new Audio("sounds/vader_yes.mp3");
const allSound = [cardClick,introSound, yodaLaugh,vaderMatch];

let attempts = 0;
let matched = [];



// functions

function updateAttempt(){
    attempts += 1
    attemptsMsg.innerHTML = `${attempts} Attempts`
}

function shuffle(){
    deck.forEach(card => {
        let randomNum = Math.floor(Math.random() *16);
        card.style.order = randomNum;
    })
    }
    shuffle();
    
    function spinMatched(){
        attemptsMsg.innerHTML = `${attemptNumber} Attempts`
        setTimeout(() => {
            matched[matched.length - 1].style.transform = "rotateY(990deg)";
            matched[matched.length - 2].style.transform = "rotateY(990deg)";
          }, "200")
    }

    function matchSound(){
            vaderMatch.play();
        vaderMatch.volume = 0.05

    }

    function noMatchSound(){
            yodaLaugh.play();
        yodaLaugh.volume = 0.05

    }

    function introMusic(){
            introSound.volume = 0.03
            introSound.play();
    }

    function resetBoard(){
        setTimeout(() =>{
            for (let i = 0; i < matched.length; i++) {
                matched[i].style.transform = "rotateY(180deg)";
            }
        }, 1000);
        setTimeout(()=>{
            for (let i = 0; i < deck.length; i++) {
                deck[i].style.transform = "rotateY(0)";
                shuffle()
            matched = []
            attempts = []
            }
        }, 3000)
       
    }

    // buttons functions
 
    soundBtn.addEventListener("click", function (){
       if(soundBtn.value === "ON"){
        soundBtn.value = "OFF"
        console.log("sound OFF")
        soundBtn.innerHTML = "Sound OFF"
        allSound.forEach(function(sound){
            sound.volume = 0
        })
       }
       else if(soundBtn.value === "OFF"){
        soundBtn.value = "ON";
        console.log("Sound on")
        soundBtn.innerHTML = "Sound ON"
        introSound.volume = 0.03;
        yodaLaugh.volume = 0.05
        vaderMatch.volume = 0.2
       }
    });

    // Reset buton \/

    // resetBtn.addEventListener("click", function (){
    //    if(resetBtn.value === "ON"){
    //     console.log("btn is on")
    //    }
    // });

// Timer function

let seconds = 0
let minutes = 0
let hours = 0

function timer(){
    setInterval(()=>{
        if(seconds >= 0 && seconds < 60){
            seconds += 1;
        }
        else if (seconds === 60 && minutes <60){
        seconds = 0
        minutes += 1
        }
        else if(minutes === 60 && hours < 24){
            seconds = 0
            minutes = 0
            hours += 1
        }
        
        },1000)
   
}
// timer();

// Game Logic


for (let i = 0; i < deck.length; i++) {
    deck[i].addEventListener('click', function(){
        if(soundBtn.value === "ON"){
            introMusic()
            }
        if(!matched.includes(deck[i])){
            deck[i].style.transform = "rotateY(180deg)";
            matched.push(deck[i])
            if(matched.length % 2 === 0){
                if(matched[matched.length - 1].innerHTML === matched[matched.length - 2].innerHTML){
                    console.log("Match!")
                    spinMatched()
                    updateAttempt()
                     if(soundBtn.value === "ON"){
                         matchSound()
                     }
                      if(matched.length === 16){
                        resetBoard()
                      }
                    }
                    else{
                        updateAttempt()
                    console.log("No match");
                    if(soundBtn.value === "ON"){
                     noMatchSound();
                     }
                    setTimeout(() => {
                        matched[matched.length - 1].style.transform = "rotateY(0)";
                        matched[matched.length - 2].style.transform = "rotateY(0)";
                        matched.pop()
                        matched.pop()
                      }, "700")
                    }
    
            }
        }
        
    })
}
