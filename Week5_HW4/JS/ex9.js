function guessNumber() {
  let playAgain = true;

  while (playAgain) {
      const numberToGuess = Math.floor(Math.random() * 100) + 1;
      let attempts = 0;
      let guessedCorrectly = false;

      alert("Guess the number between 1 and 100!");

      while (!guessedCorrectly) {
          let guess = prompt("Enter your guess (1-100):");

          if (guess === null)
            
          {
            // User cancels the game
              alert("Game was cancelled!");
              return;
          }

          guess = Number(guess);

          if (isNaN(guess) || guess < 1 || guess > 100)
  {
              alert("Invalid input! Please enter a number between 1 and 100.");
              continue;
  }

          attempts++;

          if (guess < numberToGuess) {
              alert("Too low, try again.");
          } else if (guess > numberToGuess)
          
            {
              alert("Too high, try again.");
          } else
{
              alert(`Correct! It took you about ${attempts} attempt to guess the rightnumber.`);
              guessedCorrectly = true;
}
      }

      playAgain = confirm("Do you wanna try again?");
  }

  alert("Thanks for playing! See ya!");
}

// Start the game

guessNumber();
