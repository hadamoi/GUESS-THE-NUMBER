window.onload = function(){
// 1. Create a random number
// 2. The user enters the number and presses the button go.
// 3. If the user guesses a random number, the text "Correct" appears.
// 4. random number < user number => down
// 5. random number > user number => up
// 6. Pressing the reset button will reset the game.
// 7. The game ends when you have used up your 5 chances. (no more guessing, button disabled)
// 8. If the user enters a number outside of the 1-100 range, let them know. Don't kill the opportunity.
// 9. If the user enters a number that has already been entered, it tells them that it was entered and does not subtract the number of chances.

let computerNum = 0;
let userInput = document.getElementById('user_input');
let resultArea = document.getElementById('result_area');
let chanceArea = document.getElementById('chance_area');
let guessButton = document.getElementById('guess_button');
let resetButton = document.getElementById('reset_button');
let chances = 5;
let gameOver = false;
let history = [];

guessButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);
userInput.addEventListener('focus', function() {
  userInput.value ='';
});

function pickRandomNum(){
  computerNum = Math.floor(Math.random() * 100) + 1;
};

function play(){
  let userValue = userInput.value;

  if(userValue < 1 || userValue > 100) {
    resultArea.textContent = 'ENTER A NUMBER BETWEEN 1 ~ 100';
    return;
  };

  if(history.includes(userValue)) {
    resultArea.innerHTML = "The number you've already entered. <br> Please enter a different number.";
    return;
  };

  chances --;
  chanceArea.textContent = `Remaining opportunities: ${chances}`;

  if(userValue < computerNum) {
    resultArea.textContent = "HIGHER";
  } else if(userValue > computerNum) {
    resultArea.textContent = "LOWER";
  } else {
    resultArea.textContent = "CORRECT!"
    gameOver = true;
  };

  history.push(userValue);

  if(chances < 1){
    gameOver = true;
  };

  if(gameOver == true){
    guessButton.disabled = true;
  };
};

function reset(){
  // Reset user's input
  userInput.value = '';
  // Generate a new random number
  pickRandomNum();

  resultArea.textContent ='ENTER A NUMBER BETWEEN 1 ~ 100';
  chanceArea.textContent ='Remaining Opportunities: 5';
  guessButton.disabled = false;
  history = [];
  chances = 5;
};


pickRandomNum();

};