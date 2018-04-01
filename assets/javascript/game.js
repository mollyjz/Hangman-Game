//GLOBAL VARIABLES

var randomWords = [
    "giraffe",
    "cheetah",
    "warthog",
    "dolphin",
    "gorilla",
    "buffalo",
    "panther",
    "ostrich",
    "swallow",
    "leopard",
    "meerkat",
    "octopus",
    "manatee",
    "catfish",
    "peacock",
    "wallaby",
    "vulture",
    "buzzard",
    "muskrat",
    "sunfish",
    "penguin",
    "pollock",
    "termite",
    "piranha",
    "cricket",
    "gazelle",
    "chicken",
    "tadpole",
    "scallop",
    "opposum",
    "hamster",
    "narwhal",
    "serpent",
    "seagull",
    "sparrow",
    "ladybug",
    "mustang",
    "mammoth",
    "caribou",
    "herring",
    "raccoon",
    "echidna",
    "hamster",
    "echinda",
    "bulldog",
    "kestrel",
    "opossum",
    "wildcat",
    "lobster",
    "babboon"
];

var selectedWord = ""; //word selected by computer
var guess = event.key;
var lettersGuessed = [];
var blank = [];


//GLOBAL FUNCTIONS

function generateWord() { //generates random word
    var selectedWord = randomWords[Math.floor(Math.random() * randomWords.length)];
}

function wasLetterEntered() {   //checks to make sure letter was entered (rather than number or other character)
    if (window.event.keyCode < 66 || window.event.keyCode > 90) {
        return false;
    }

    return true;
}

function wasLetterAlreadyUsed(guess) {   //checks to see if guess is in the lettersGuessed array and add it if not
   if (lettersGuessed.indexOf(guess)) < 0) {
        lettersGuessed.push(guess);
    }
} 

function correctGuess() { //if guess is correct...
    function replaceBlank() {
        for (var i = 0; i < selectedWord.length; i++) { //starting with first letter in word, until you get to the last letter, cycle through the letters one by one. display letter you're currently on.
            console.log(selectedWord.charAt(i));
            //set blank array variable to the selected letter;
            blank[i] = selectedWord.charAt(i); //the blank corresponding to the letter you're on stores the letter you're at in the word
        }
    }
}

function wrongGuess() {
    function addToLettersGuessed() {
        document.getElementById("letters-guessed").innerHTML = guess; // print letter to "letters guessed"
        guessesLeft--; //subtract 1 from "guesses left"
    }
}

function isGameOver() {     //check to see if round should end
    if (guessesLeft < 0 || blanksLeft < 1); {
        gameOver();
    }
}

function initializeGame() { //to start game for the first time
    for (i=0; i++;) {
    guessesLeft = 12;
    blanksLeft = 7;
    lettersGuessed = [];
    wins = 0;
    generateWord();
    }
}

function restartGame() {    //to restart game after win or loss
    guessesLeft = 12;
    blanksLeft = 7;
    lettersGuessed = [];
    generateWord();
    // win count should still be there from last round
}

function gameOver() {    // conditions under which to end game
	if (blanksLeft < 1) { //win
		getElementById("game-over").innerHTML = "Great job--you won!! Let's play again"; // win
        wins++;
        getElementById("wins").innerHTML = wins;
        restartGame(); }
	} else { //loss
        getElementById("game-over").innerHTML = "Sorry, you lost... Let's try this again!"; // loss
        restartGame();
    }
}




// CALLING FUNCTIONS

document.onkeyup = initializeGame(); //start game when user presses any key

document.onkeyup = function(event) { //once game has started, any time a key is pressed...
    wasLetterEntered(); //make sure the key pressed was a letter
    wasLetterAlreadyUsed(); //make sure letter hasn't already been used this round
    var guess = String.fromCharCode(event.keyCode).toLowerCase(); //uppercase letters converted to lowercase
        if (selectedWord.indexOf(guess) > -1) { //if letter guessed appears in selected word...
            correctGuess(); //replace the corresponding blank(s) with that letter
            isGameOver(); //check to see if game is over
        else { //if letter guessed is incorrect...
            addToLettersGuessed(); //add that letter to "letters guessed" section of page
            isGameOver(); //check to see if game is over
        }
    }