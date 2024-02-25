// hide element by id
function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

// show element by id

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function addBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

// generate random alphabet
function getARandomAlphabet() {
  // get or create an alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  // get a random index between 0-25
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  // get a random alphabet
  const alphabet = alphabets[index];
  return alphabet;
}
