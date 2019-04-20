
  // Function for incrementing score after a win
  // Takes a 1 or 2 as input depending on winner
  function incrementScore(input) {
    if (input == 1){
      playerOneScore = getScore(1) + 1;
      // update scoreboard
      document.getElementById("player1ScoreDisplay").innerHTML = "Player 1: " + getScore(1);
    } else if (input == 2) {
      playerTwoScore = getScore(2) + 1;
      // update scoreboard
      document.getElementById("player2ScoreDisplay").innerHTML = "Player 2: " + getScore(2);
    } 

  }
  // Resets both player's score to 0
  function resetScore() {
    playerOneScore = 0;
    playerTwoScore = 0;
  }
  // returns the score of player 1 or 2 depending on input
  function getScore(input) {
    if (input == 1) {
      return playerOneScore;
    } else if (input == 2) {
      return playerTwoScore;
    }
  }