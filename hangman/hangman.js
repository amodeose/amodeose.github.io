var wordBank = ['perseverence', 'domineering', 'ceaseless'];
var word;
var wordField = [];
var correctLetters = 0;
var usedLetters = [];
var wins = 0;
var guesses = 5;
var blanks;

var randomWord = function() {
var index = Math.floor(Math.random() * wordBank.length);
word = wordBank[index];
blanks = word.length;
}

var generateBlanks = function() {
    for (i = 0; i < blanks; i++) {
        wordField.push("_");
    }
    document.getElementById("word").textContent = wordField.join(" ");
}

randomWord();
generateBlanks();


var checkLetter = function(letter) {
    wordArr = word.split("");
    var checkedIndex = wordArr.indexOf(letter);

    if (checkedIndex < 0 && usedLetters.indexOf(letter) < 0) {
        usedLetters.push(letter);
        guesses--;
        }

    while (checkedIndex >= 0) {
        wordField.splice(checkedIndex, 1, letter);
        correctLetters++;
        delete wordArr[checkedIndex];
        checkedIndex = wordArr.indexOf(letter);
    }

    if (correctLetters === word.length) {
        wins++;
        guesses = 5;
        wordField = [];
        correctLetters = 0;
        usedLetters = [];
        randomWord();
        generateBlanks();
    }
    
    document.getElementById("word").textContent = wordField.join(" ");
    document.getElementById("letters").textContent = usedLetters.join(", ");
    document.getElementById("wins").textContent = wins;
    document.getElementById("guesses").textContent = guesses;

}

document.onkeyup = function() {
    var keyPress = event.key;
    checkLetter(keyPress);
    
}


