// capture keyboard key press
document.addEventListener("keyup", function (e) {
  // get player pressed
  const playerPressed = e.key;
  // stop the game if pressed 'Esc' key
  if (playerPressed === "Escape") {
    gameOver();
  }

  console.log("player pressed", playerPressed);
  // get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // console.log('current alphabet',expectedAlphabet);

  // check mach or not
  if (playerPressed === expectedAlphabet) {
    const currentScore = getTextElementValueById("current-score");
    const newScore = currentScore + 1;

    setTextElementValueById("current-score", newScore);

    // ----
    // console.log("you got a point");
    // // update Score
    // // 1.get the current score
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // // convert to number
    // let currentScore = parseInt(currentScoreText);
    // // increase 1 score every right alphabet press
    // currentScore ++
    // // set score ui
    // currentScoreElement.innerText = currentScore;
    // score update from module method

    /**
     * const newScore = current score + 1;
     * than set innerText the newScore;
     */

    // remove background color after get a new alphabet
    removeBackgroundColorById(playerPressed);
    // get a new alphabet
    continueGame();
  } else {
    const currentLife = getTextElementValueById("current-life");
    const newLife = currentLife - 1;
    setTextElementValueById("current-life", newLife);
    //
    if (newLife === 0) {
      gameOver();
    }

    // console.log("you lose a point");
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeUpdate = currentLifeElement.innerText;
    // let currentLife = parseInt(currentLifeUpdate);
    // currentLife--
    // currentLifeElement.innerText = currentLife;
  }
});

function continueGame() {
  // step-1 generate a random alphabet
  const alphabet = getARandomAlphabet();
  // set randomly generated alphabet to the screen
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  addBackgroundColorById(alphabet);
}

function play() {
  // step-1 hide the home screen
  hideElementById("home-screen");
  // step-2 show the play ground
  hideElementById("final-score");
  showElementById("play-ground");
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);
  // start game
  continueGame();
}

function gameOver() {
  //hide play ground and show score board
  hideElementById("play-ground");
  showElementById("final-score");
  // get and set value to final score
  const totalScore = getTextElementValueById("current-score");
  setTextElementValueById("total-score", totalScore);
  //  clear last selected alphabet background color
  const lastAlphabet = getTextElementById("current-alphabet");
  removeBackgroundColorById(lastAlphabet);
}
