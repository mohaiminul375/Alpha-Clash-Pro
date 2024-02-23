// function play(){
//     // hide the home screen. to hide the screen add the class hidden to the home screen
//     document.getElementById('home-screen').classList.add('hidden'); 
    
//     // show play ground
//     document.getElementById('play-ground').classList.remove('hidden'); 
// }
function continueGame(){
//   step1 generate a random game
  const alphabet = getARandomAlphabet()

// set randomly generated alphabet to the screen
const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText =alphabet;
   addBackgroundColorById(alphabet);
}
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}