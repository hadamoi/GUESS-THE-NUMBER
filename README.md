# 🎮 Guess the number
This is a game made in javascript. <br />
Guess the computer-generated random number. <br />
Enter a number between 1 and 100 and it will output a range of values. You have a total of 5 chances. <br />
Will you be able to guess it? <br />
Good luck! 🍀 

#### 📝 Description
1. Create a random number
2. The user enters the number and presses the button go.
3. If the user guesses a random number, the text "Correct" appears.
4. random number < user number => down
5. random number > user number => up
6. Pressing the reset button will reset the game.
7. The game ends when you have used up your 5 chances. (no more guessing, button disabled)
8. If the user enters a number outside of the 1-100 range, let them know. Don't kill the opportunity.
9. If the user enters a number that has already been entered, it tells them that it was entered and does not subtract the number of chances.

#### ✔️ Things to remember
```
let history = [];
history.includes(userValue);
```
* The `history` is an array, and an array is a data structure that stores multiple values. <br />
includes()` is one of the array methods, which checks whether the given value is contained in the array. <br />
This method returns a boolean value. <br />
That is, it returns true if the history array contains userValue, and false otherwise.

```
let computerNum = 0;
computerNum = Math.floor(Math.random() * 100) + 1;
```
* The `Math.floor()` function takes a number as an argument, discards decimal places, <br />
and rounds it down to the nearest integer that is less than or equal to it. <br />
The rounded result is returned as an integer.

