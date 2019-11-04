

//Contains all the spookiest vocabulary known to the human kind.
const words = ['bat', 'boo', 'costume', 'ghost', 'goblin', 'haunted', 'mask', 'night', 'pirate', 'spider', 'hero', 'vampire', 'witch'];
let randWord = Math.floor(Math.random() * words.length); //Math.floor is rounding off the number of words in the words array to the nearest integer.
let chosenWord = words[randWord]; // Picking a random word from the words array.
let guessesLeft = 5;
let underScore = []; // empty array holding underscores
let rightWords = []; //array holding the correct guesses.
let wrongWords = []; // array holding incorrect guesses.
console.log(chosenWord);


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
    for (let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

//testing
console.log(userUnderscore());
console.log(chosenWord);
let splitWord = chosenWord.split(" ");``
console.log(splitWord);

document.addEventListener('keypress', (event) => {   // the event listener is listening to each key that is pressed and displaying that letter associated in the console using fromCharCode and event.keyCode
    let keyword = String.fromCharCode(event.keyCode);
    console.log(keyword);
    // if users guess is right
    underScore[chosenWord.indexOf(keyword)] = keyword; //find the chosenWord and in the code below places the equivalent # of underscores inside of the text/guesses box.
    docUnderScore[0].innerHTML = underScore.join(' ')
    docrightguess[0].innerHTML = rightWords.join(' '); // checks if input is right
    docwrongguess[0].innerHTML = wrongWords.join(' ');
  
    // checks if input is wrong
    if (chosenWord.indexOf(keyword) > -1) {
        // push/add to the right words array.
        rightWords.push(keyword);
        if (underScore.join('') === chosenWord) {
            alert("You Won");
            reset();
        }


    }
    else if (wrongWords.length >= 5) {
        guessesLeft - 1;
        alert("You've Lost the Game");
        reset();

    }
    else { wrongWords.push(keyword) };
});

