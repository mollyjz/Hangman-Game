//GLOBAL VARIABLES

var randomWords = ["giraffe", "cheetah", "warthog", "dolphin", "gorilla", "buffalo", "panther", "ostrich", "swallow", "leopard", "meerkat", "octopus", "manatee", "catfish", "peacock", "wallaby", "vulture", "buzzard", "muskrat", "sunfish", "penguin", "pollock", "termite", "piranha", "cricket", "gazelle", "chicken", "tadpole", "scallop", "opposum", "hamster", "narwhal", "serpent", "seagull", "sparrow", "ladybug", "mustang", "mammoth", "caribou", "herring", "raccoon", "echidna", "sea lion", "hamster", "echinda", "bulldog", "mastiff", "kestrel", "opossum", "wildcat", "lobster", "babboon", "fur seal"];

var selectedWord = ""; //word selected by computer

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var keyPressed = event.charCode; // capturing key pressed by user ?????????? "event was used before it was defined"
// var letterGuessed = String.fromCharCode(keyPressed); // converting key pressed to letter ?????????
var letterGuessed = event.key;


//GLOBAL FUNCTIONS

function generateWord() { // generates random word
    var selectedWord = randomWords[Math.floor(Math.random() * randomWords.length)];
}

function wasLetterEntered() {   // checks to make sure letter was entered (rather than number or other character)
    if (window.event.keyCode < 66 || window.event.keyCode > 90) {
        return false;
}

function wasLetterAlreadyUsed() { // checks to see if letter already appears in "blanks" or "letters already guessed"
    document.getElementById("blanks");
    document.getElementById("letters-guessed");
    if (letterGuessed === ___) { // ??????????????????????
        preventDefault; // ????????????
    }
}

function correctGuess() { //if guess is correct...
        function replaceBlank() {
        if (indexOf(correctGuess) === 0) { //if letter guessed appears in blank 0 of selected word...
            document.getElementById("blank0").innerHTML = correctGuess;// replace blank0 with that letter
        } // not sure what error is on all these lines...
        if (indexOf(correctGuess) === 1) { //is there a way to say and/or?
            document.getElementById("blank1").innerHTML = correctGuess;
        }
        if (indexOf(correctGuess) === 2) {
            document.getElementById("blank2").innerHTML = correctGuess;
        }
        if (indexOf(correctGuess) === 3) {
            document.getElementById("blank3").innerHTML = correctGuess;
        }    
        if (indexOf(correctGuedss) === 4) {
            document.getElementById("blank4").innerHTML = correctGuess;
        }
        if (indexOf(correctGuess) === 5) {
            document.getElementById("blank5").innerHTML = correctGuess;
        }
        if (indexOf(correctGuess) === 6) {
            document.getElementById("blank6").innerHTML = correctGuess;
        blanksLeft--; // but what if the letter guessed appears in answer twice??????
    }
    
function wrongGuess() {
    function addToLettersGuessed() {
        document.getElementById("letters-guessed").innerHTML = letterGuessed; // print letter to "letters guessed" 
        guessesLeft--; //subtract 1 from "guesses left"
    }
}

function isGameOver() {     // check to see if round should end
    if (guessesLeft < 0 || blanksLeft < 1); {
        gameOver();
    }
}

function initializeGame () {
    for (i=0; i++;) {
    guessesLeft = 12;
    blanksLeft = 7;
    lettersGuessed = [];
    wins = 0;
    generateWord();
}

function restartGame() {    // to restart game
    guessesLeft = 12;
    blanksLeft = 7;
    lettersGuessed = [];
    generateWord();
    // win count should still be there from last round
}

function gameOver() {    // conditions under which to end game
	if (blanksLeft < 1) { // win
		getElementById("game-over").innerHTML = "Great job--you won!! Let's play again"; // win
        wins++;
        getElementById("wins").innerHTML = wins;
        restartGame();
	} else { // loss
        getElementById("game-over").innerHTML = "Sorry, you lost... Let's try this again!"; // loss
        restartGame();
    }
    






// CALLING FUNCTIONS

document.onkeyup = initializeGame(); //start game when user presses any key

document.onkeyup = function(event) { //once game has started, any time a key is pressed...
    wasLetterEntered(); //make sure the key pressed was a letter
    wasLetterAlreadyUsed(); //make sure letter hasn't already been used this round
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); //uppercase letters converted to lowercase
        if (selectedWord.indexOf(letterGuessed) > -1) { //if letter guessed appears in selected word...
            correctGuess(); //replace the corresponding blank(s) with that letter
            isGameOver(); //check to see if game is over
        else { //if letter guessed is incorrect...
            addToLettersGuessed(); //add that letter to "letters guessed" section of page
            isGameOver(); //check to see if game is over
        }
    }
    


}
