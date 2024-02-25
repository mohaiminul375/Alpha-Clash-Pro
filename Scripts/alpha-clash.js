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
  showElementById("play-ground");
  // start game
  continueGame();
}
