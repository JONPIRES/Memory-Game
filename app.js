const deck = document.querySelectorAll(".card");
const body = document.querySelector("body");
const resetBtn = document.querySelector(".reset");
const soundBtn = document.querySelector(".sound");

// Audio files
const breathing = new Audio("sounds/vader_breathing.mp3");
const cardClick = new Audio("sounds/lightsaber.mp3");
const introSound = new Audio("sounds/theme-song.mp3");
const yodaLaugh = new Audio("sounds/yoda.wav");
const vaderMatch = new Audio("sounds/vader_yes.mp3");
const allSound = [cardClick,introSound, yodaLaugh,vaderMatch];






// functions

function shuffle(){
    deck.forEach(card => {
        let randomNum = Math.floor(Math.random() *16);
        card.style.order = randomNum;
    })
    }
    shuffle();
    
    function spinMatched(){
        setTimeout(() => {
            matched[matched.length - 1].style.transform = "rotateY(990deg)";
            matched[matched.length - 2].style.transform = "rotateY(990deg)";
          }, "200")
    }

    function matchSound(){
            vaderMatch.volume = 0.2
            vaderMatch.play();
    }

    function noMatchSound(){
            yodaLaugh.volume = 0.25
            yodaLaugh.play();
    }

    function endGame(){
            introSound.volume = 0.1
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
            }
        }, 3000)
       
    }
    // function resetBoard(){
      

        
    // }

   
    // soundBtn.addEventListener("click", function (){
    //     allSound.forEach(sound, () =>{
    //         sound.muted = true
    //         sound.pause();
    //         console.log("working")
    //     })
    // });


// Game Logic

let matched = [];
for (let i = 0; i < deck.length; i++) {
    deck[i].addEventListener('click', function(){
        // breathing.play()
        introSound.play()
        introSound.volume = 0.03;
        if(!matched.includes(deck[i])){
            deck[i].style.transform = "rotateY(180deg)";
            matched.push(deck[i])
            if(matched.length % 2 === 0){
                if(matched[matched.length - 1].innerHTML === matched[matched.length - 2].innerHTML){
                    console.log("Match!")
                       matchSound()
                      spinMatched()
                      if(matched.length === 16){
                        // endGame()
                        resetBoard()
                      }
                    }
                    else{
                       console.log("No match");
                    setTimeout(() => {
                        noMatchSound();
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
