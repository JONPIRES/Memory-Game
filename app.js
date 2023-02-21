const deck = document.querySelectorAll(".card");




let matched = [];
for (let i = 0; i < deck.length; i++) {
    deck[i].addEventListener('click', function(){
        console.log(deck[i]);
        if(!matched.includes(deck[i])){
            deck[i].style.transform = "rotateY(180deg)";
            matched.push(deck[i])
            if(matched.length % 2 === 0){
                if(matched[matched.length - 1].innerHTML === matched[matched.length - 2].innerHTML){
                    console.log("Match!")
                    }
                    else{
                       console.log("No match");
                    setTimeout(() => {
                        matched[matched.length - 1].style.transform = "rotateY(0deg)";
                        matched[matched.length - 2].style.transform = "rotateY(0deg)";
                        matched.pop()
                        matched.pop()
                      }, "500")
                    }
    
            }
        }
        
    })
}