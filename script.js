
//game reset logic

function reset()
{

//Contains all the spookiest vocabulary known to the human kind.
let words = ['bat', 'boo', 'costume', 'ghost', 'goblin', 'haunted', 'mask', 'night', 'pirate', 'spider', 'hero', 'vampire', 'witch'];
randWord = Math.floor(Math.random() * words.length); //Math.floor is rounding off the number of words in the words array to the nearest integer.
 chosenWord = words[randWord]; // Picking a random word from the words array.
 guessesLeft = 5;
 underScore = []; // empty array holding underscores
rightWords = []; //array holding the correct guesses.
 wrongWords = []; // array holding incorrect guesses.
console.log(chosenWord);
lettersInWord = chosenWord.split('');
//Get the number of blanks
numBlanks = lettersInWord.length;
console.log(lettersInWord);

startGame();
}


function startGame(){
//Contains all the spookiest vocabulary known to the human kind.
const words = ['bat', 'costume', 'ghost', 'goblin', 'haunted', 'mask', 'night', 'pirate', 'spider', 'hero', 'vampire', 'witch'];
let randWord = Math.floor(Math.random() * words.length); //Math.floor is rounding off the number of words in the words array to the nearest integer.
let chosenWord = words[randWord]; // Picking a random word from the words array.
let guessesLeft = 5;
let underScore = []; // empty array holding underscores
let rightWords = []; //array holding the correct guesses.
let wrongWords = []; // array holding incorrect guesses.
console.log(chosenWord);

lettersInWord = chosenWord.split('');
//Get the number of blanks
numBlanks = lettersInWord.length;
console.log(lettersInWord);

// Dom Manipulation

let docUnderScore = document.querySelectorAll(".underscore");
let docrightguess = document.querySelectorAll(".rightguess");
let docwrongguess = document.querySelectorAll(".wrongguess");

console.log(docwrongguess);
console.log(docrightguess);
console.log(docUnderScore);


// Main Variables

// The expression below generates an array of underscores equivalent to the amount of characters in the randomly generated word.
let userUnderscore = () => {
    for (let i = 0; i < lettersInWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

//testing
console.log(userUnderscore());
console.log(lettersInWord);


document.addEventListener('keypress', (event) => {   // the event listener is listening to each key that is pressed and displaying that letter associated in the console using fromCharCode and event.keyCode
    let keyword = String.fromCharCode(event.keyCode);
    console.log(keyword);
    underScore[lettersInWord.indexOf(keyword)] = keyword; //find the chosenWord and in the code below places the equivalent # of underscores inside of the text/guesses box.
    docUnderScore[0].innerHTML = underScore.join('')
    docrightguess[0].innerHTML = rightWords.join(''); // checks if input is right
    docwrongguess[0].innerHTML = wrongWords.join('');


    if (lettersInWord.indexOf(keyword) > -1) {
        rightWords.push(keyword);
        if (underScore.join('') === chosenWord) {
           alert("You win")
           reset();
        }


    }
    else if (wrongWords.length >= 5) {
        alert("You lost");
        reset();

    }
    else {
         wrongWords.push(keyword) 
         console.log("guess was wrong")
        };
})};

 startGame();