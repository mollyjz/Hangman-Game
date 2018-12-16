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

var selectedWord = randomWords[Math.floor(Math.random() * randomWords.length)];
var lettersGuessed = [];
var correctGuesses = [];
var guessesLeft = 12;
var blanksLeft = 7;
var wins = 0;
var selectedWord = "";

function mainGame(event) { 
    var guess = event.key;
    console.log("current letter guess: " + guess);
    if (event.keyCode < 65 || event.keyCode > 90) {
        return false; //if not a letter, don't print
    } else if ((lettersGuessed.indexOf(guess) < 0) && (lettersGuessed.length < 12) && (correctGuesses.indexOf(guess) < 0)) { //if letter not yet guessed this round...
        
        if (selectedWord.indexOf(guess) > -1) { //if guess is correct...
            for (var i = 0; i < selectedWord.length; i++) {
                if (selectedWord[i] == guess) {
                    document.getElementById("blank" + i).innerHTML = selectedWord[i]; //fill in the blank
                    blanksLeft--;
                    correctGuesses.push(guess);
                }
            }
        } else if (selectedWord.indexOf(guess) === -1) { //if guess is incorrect...
            lettersGuessed.push(guess);
            document.getElementById("letters-guessed").innerHTML = lettersGuessed.join(', '); //print to screen
            guessesLeft--;
            document.getElementById("guesses-left").innerHTML = guessesLeft;
        };
    
        if (blanksLeft < 1) {
            document.getElementById("game-over").innerHTML = "Great job--you won!! Let's play again!";
            wins++;
            document.getElementById("wins").innerHTML = wins;
            restartGame();
        } else if (guessesLeft < 1) {
            guessesLeft = 0;
            document.getElementById("guesses-left").innerHTML = guessesLeft;
            document.getElementById("game-over").innerHTML = "Sorry, you lost. Let's play again!";
            restartGame();
        }    
    };
};

function initializeGame() {
    guessesLeft = 12;
    blanksLeft = 7;
    lettersGuessed = [];
    wins = 0;
    selectedWord = randomWords[Math.floor(Math.random() * randomWords.length)];
};

function restartGame() { //to restart game after win or loss
    document.getElementById("wins").innerHTML = wins;
    blanksLeft = 7;
    lettersGuessed = [];
    correctGuesses = [];
    function clear() {
        document.getElementById("game-over").innerHTML = "";
        document.getElementById("blanks").innerHTML = '<span id="blank0">_&nbsp;</span>' + '<span id="blank1">_&nbsp;</span>' + '<span id="blank2">_&nbsp;</span>' + '<span id="blank3">_&nbsp;</span>' + '<span id="blank4">_&nbsp;</span>' + '<span id="blank5">_&nbsp;</span>' + '<span id="blank6">_&nbsp;</span>';
        document.getElementById("letters-guessed").innerHTML = "";
        guessesLeft = 12;
        document.getElementById("guesses-left").innerHTML = guessesLeft;
        selectedWord = randomWords[Math.floor(Math.random() * randomWords.length)];
    };
    setTimeout(clear, 2000);
};

//////////////////////////////////////////////////////////

window.onload = initializeGame;
document.onkeyup = function(event) { 
   mainGame(event);
}