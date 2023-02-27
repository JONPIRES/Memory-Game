# Memory-Game
Project-one-0206-SEIR

- Star wars Memory
-   As the user I want to be able to click on a card and have it flip up
-   After two cards have flipped up. I want to be able to compare them
-   If the two flipped cards do not match, I want them to flip back down.
-   Once I'm able to flip all the cards I want the timmer to stop 
-   I made it so you can't click on the same card twice

Game Description - Memory Game
This is a Memory Game. the objective of the game is to be able to match all card pairs on the board. I added a timer feature, and when the player clicks on the first card, the timer will start, and in that way the player will know how long it took to finish the game. I made it so, when a player is able to match a card, the cards will spin and then disappear out of the board. If the player is not able to match the cards, then the cards flip back down. For every attempt, that a player makes, the Attempts message gets updated with the number of attempt the player has had so far.
I made it so the player can choose to play with sound or with no sound in case they want to play and can't make noise.
Once the player is able to match all the cards on the board, all the cards will spin back and return to the board facing up so he can see where the cards were. after a few seconds, the cards will flip back down, the timer will reset, the attempts will reset and the cards will shuffle again allowing the player to start the game again.




Game pictures.


This is the inicial display of the game with all the cars facing down and the the Attempts and timer set to 0.

![homepage](./Readme%20imgs/start.png)



this is how the cards are displayed on teh board.





this is when the cards are out of the board




this is the end when all the cards are displayed back at the bard.


Technologies Used



I used HTML to create the basic display of the game, to add the images for the cards and the card structure. I added a space background image to bring the theme of the game. I displayed messages on the boards for the attempts and a timer. I used buttons so the player is able to reset the game and choose to mute all the sound.


I used CSS to style the game, using grid to display my cards, using colors to resamble the theme of Star Wars. Changing font sizes and colors to give a space theme.

I mainly used Javascript for the functionality of the game. I used a forEach loop to shuffle the cards. event listeners to the cards and buttons to activate functions like turning the cards and muting or reseting the game.
I used conditional statement to determine if the cards flipped were a match.

Challenging Code Parts

 making is so the card could bot be clicked again if it was turned or if it was a match

making a timer from scratch I was using strict equals when I should be using double equals.

adding conditionals for the buttons and game sounds so they would work properly.

adjusting the setTimeout function so it wouldn't overlap with another function and create a bug in the game.

Link to Game
https://jonpires.github.io/Memory-Game/

Next Steps

I would like to add better styling to the game, starting with the images used for the cards so they'll be more uniform. I would like to add better animation when the cards come back to the board.

As far as functionality, I would like to add dificulty levels to the game where the player would only have a certain amount of tries depending on the dificulty chosen. Also have diferent levels where you could star with less cards and increasingly go up as you passed each level.

