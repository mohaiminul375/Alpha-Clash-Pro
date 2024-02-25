
// capture keyboard key press
document.addEventListener('keyup', function(e){
  // get player pressed
const playerPressed = e.key;
console.log('player pressed',playerPressed)
// get the expected to press
const currentAlphabetElement = document.getElementById("current-alphabet");
const currentAlphabet =  currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase()
// console.log('current alphabet',expectedAlphabet);

// check mach or not
if(playerPressed === expectedAlphabet){
  console.log('you got a point');
  // remove background color after get a new alphabet
  removeBackgroundColorById(playerPressed);
  // get a new alphabet
  continueGame()
} else{
 console.log('you lose a point')
}
})


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
