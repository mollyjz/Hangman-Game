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

var selectedWord = randomWords[Math.floor(Math.random() * randomWords.length)]; //word selected by computer
var guess = KeyboardEvent.key;
var lettersGuessed = [];
var blank = [];
var guessesLeft = 12;
var blanksLeft = 7;
var wins = 0;


//GLOBAL FUNCTIONS

//generates random word
function generateWord() { 
    var selectedWord = randomWords[Math.floor(Math.random() * randomWords.length)]; 
}

//checks to make sure letter was entered (rather than number or other character) and that it hasn't already been used this round
function mainGame () { 
    if (window.event.keyCode < 66 || window.event.keyCode > 90) {
        return false; //if not a letter, don't print
    } else if (lettersGuessed.indexOf(guess) < 0) { //otherwise, if letter, if that letter not guessed before this round, push to "letters guessed" array
        lettersGuessed.push(guess);
    } if (selectedWord.indexOf(guess) > -1)  { //if guess is correct...
        for (var i = 0; i < selectedWord.length; i++) { //starting with first letter in word, until you get to the last letter, cycle through the letters one by one. display letter you're currently on.
            blank[i] = selectedWord.charAt(i); //set blank array variable to the selected letter; the blank corresponding to the letter you're on stores the letter you're at
    } else { //if guess is incorrect...
        document.getElementById("letters-guessed").innerHTML = guess; // print letter to "letters guessed"
        guessesLeft--; //subtract 1 from "guesses left"
    }
}


function isGameOver() {     //check to see if round should end
    if (blanksLeft < 1) {
        document.getElementById("game-over").innerHTML = "Great job--you won!! Let's play again"; // win
        wins++;
        document.getElementById("wins").innerHTML = wins;
        restartGame();
    } else if (guessesLeft < 0) {
        document.getElementById("game-over").innerHTML = "Sorry, you lost. Let's try this again!"; // loss
        restartGame();
    }
}

//to start game for the first time when any key is pressed
function initializeGame() {  
    for (i = 0; i < 1; i++) {
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





// CALLING FUNCTIONS

document.onload = initializeGame;//start game when user presses any key

document.onkeyup = function(event) { //once game has started, any time a key is pressed... 
   console.log(event.key)
    mainGame; //main game function
   // if (selectedWord.indexOf(guess) > -1) { //if letter guessed appears in selected word... ////starts over
        isGameOver; //check to see if game is over and restart if so
    }