// DECLARING GLOBAL VARIABLES & FUNCTIONS
var randomWords = ["giraffe", "cheetah", "warthog", "dolphin", "gorilla", "buffalo", "panther", "ostrich", "swallow", "leopard", "meerkat", "octopus", "manatee", "catfish", "peacock", "wallaby", "vulture", "buzzard", "muskrat", "sunfish", "penguin", "pollock", "termite", "piranha", "cricket", "gazelle", "chicken", "tadpole", "scallop", "opposum", "hamster", "narwhal", "serpent", "seagull", "sparrow", "ladybug", "mustang", "mammoth", "caribou", "herring", "raccoon", "echidna", "sea lion", "giraffe", "hamster", "echinda","bulldog", "mastiff", "kestrel", "opossum", "wildcat", "lobster", "babboon", "fur seal"];

var selectedWord = randomWords[Math.floor(Math.random() * randomWords.length)]; // answer selected by computer

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var wins = 0; // start with 0 wins
var blanksLeft = 7; // start with 7 blanks left
var guessesLeft = 12; // start with 12 guesses left
var keyPressed = event.charCode; // capturing key pressed by user
var userGuess = String.fromCharCode(keyPressed); // converting key to character
var correctGuess; // for correct letter guesses
var wrongGuess; // for incorrect letter guesses
var lettersGuessed = [];  // empty array for letters already guessed that round
var wordGuessed;

function generateWord() { // generates random word
    var selectedWord = randomWords[Math.floor(Math.random() * randomWords.length)];
}

function wasLetterTyped() {   // checks to make sure letter was entered (rather than number or other character)
    return alphabet.indexOf(letter) > -1;
}

function wasUserGuessCorrect() { // checks to see if user's guess matches letter(s) in selected word
    if (selectedWord.indexOf(userGuess) > -1) {
        document.getElementById("blanks").innerHTML = userGuess; // not sure how to get letter to right position?????
        
    }
    else {
        document.getElementById("letters-guessed").innerHTML = userGuess; // print letter to "letters guessed" field 
        guessesLeft--;
    }
}

function isGameOver() {     // check to see if game should be over
    return guessesLeft < 0 || blanksLeft < 1;
}

function restartGame() {    // to restart game
    guessesLeft = 12;
    blanksLeft = 7;
    lettersGuessed = [];
    function generateWord();
    
function startGuessing() {
    function wasLetterTyped();
}

function gameOver() {    // conditions under which to end game
	if (blanksLeft("_") < 1) { // win
		getElementById("game-over").innerHTML = "Great work--you won!! Let's play again"; // win
        wins++;
        getElementById("wins").innerHTML = wins;
        function restartGame();
	} else { // loss
        getElementById("game-over").innerHTML = "Sorry, you lost... Let's try this again!"; // loss
        function restartGame();
    }
    






// CALLING FUNCTIONS

document.onkeyup = function(event) { // (re)start game when any key is pressed
    restartGame();
}

document.onkeyup = function(event) {   // determines (letter) key pressed
    var userGuess = event.key;
    }

p.addEventListener("keypress", function(event) {     // do nothing if key already processed this round
    if (event.defaultPrevented) {    // if letter appears in blanks or letters guessed, do nothing
        return;
    }