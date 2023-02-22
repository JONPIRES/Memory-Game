const deck = document.querySelectorAll(".card");
const body = document.querySelector("body");

// Audio effects
const breathing = new Audio("sounds/vader_breathing.mp3");
const cardClick = new Audio("sounds/lightsaber.mp3");
const introSound = new Audio("sounds/theme-song.mp3");
const yodaLaugh = new Audio("sounds/yoda.wav");
const vaderMatch = new Audio("sounds/vader_yes.mp3");


// functions

(function shuffle(){
    deck.forEach(card => {
        let randomNum = Math.floor(Math.random() *16);
        card.style.order = randomNum;
    })
    })()
    function spinMatched(){
        setTimeout(() => {
            matched[matched.length - 1].style.transform = "rotateY(990deg)";
            matched[matched.length - 2].style.transform = "rotateY(990deg)";
          }, "700")
    }
    function matchSound(){
        setTimeout(() => {
            vaderMatch.volume = 0.1
            vaderMatch.play();
          }, "100")
    }
    function noMatch(){
        setTimeout(() => {
            yodaLaugh.volume = 0.2
            yodaLaugh.play();
          }, "100")
    }

    function returnCards(){
        setTimeout(() =>{
            for (let i = 0; i < matched.length; i++) {
                matched[i].style.transform = "rotateY(180deg)";
            }
        }, 2000)
    }

    function resetGame(){
        
    }

// Game Logic

let matched = [];
for (let i = 0; i < deck.length; i++) {
    deck[i].addEventListener('click', function(){
        if(!matched.includes(deck[i])){
            deck[i].style.transform = "rotateY(180deg)";
            matched.push(deck[i])
            if(matched.length % 2 === 0){
                if(matched[matched.length - 1].innerHTML === matched[matched.length - 2].innerHTML){
                    console.log("Match!")
                       matchSound()
                      spinMatched()
                      if(matched.length === 16){
                        introSound.play();
                        returnCards()
                      }
                    }
                    else{
                       console.log("No match");
                    setTimeout(() => {
                        noMatch();
                        matched[matched.length - 1].style.transform = "rotateY(0deg)";
                        matched[matched.length - 2].style.transform = "rotateY(0deg)";
                        matched.pop()
                        matched.pop()
                      }, "700")
                    }
    
            }
        }
        
    })
}
