// Global Variables
//Allows a letter to be used more than once.
var doubleWord = ['a','b','c', 'd','e','f', 'g','h','i','j','k','l', 'm','n','o','p','q','r', 's','t','u', 'v','w','x','y','z'];


//Contains all the spookiest vocabulary known to the human kind.
const words = ['apples','bat','blackcat','boo','candycorn','costumes','ghost','goblin','halloween','hauntedhouse','jackolantern','mask','moon','mummy','night','october','pirate','princess','pumpkin','spider','spooky','superhero','trickortreat','vampire','witch'];
let randWord = Math.floor(Math.random() * words.length); //Math.floor is rounding off the number of words in the words array to the nearest integer.
let chosenWord = words[randWord]; // Picking a random word from the words array.
let underScore = []; // empty array holding underscores
let rightWords = []; //array holding the correct guesses.
let wrongWords = []; // array holding incorrect guesses.
console.log(chosenWord);


// Dom Manipulation

let docUnderScore = document.getElementsByClassName('underscore');



// Main Variables

// The expression below generates an array of underscores equivalent to the amount of characters in the randomly generated word.
let userUnderscore = () => {   
    for(let i=0; i < chosenWord.length; i++){
underScore.push('_');

    }
    return underScore;
}
//testing
console.log(userUnderscore());
console.log(chosenWord);

document.addEventListener('keypress', (event) => {   // the event listener is listening to each key that is pressed and displaying that letter associated in the console using fromCharCode and event.keyCode
    let keyword = String.fromCharCode(event.keyCode);
    console.log(keyword);
    // if users guess is right
    if(chosenWord.indexOf(keyword) > -1){
    // push/add to the right words array.
    rightWords.push(keyword);
    docUnderScore;


    // place underscore with correct letter
    underScore[chosenWord.indexOf(keyword)] =  keyword;
    docUnderScore.innerHTML = underScore.join(' ');
    doc
    if (underScore.join('') === chosenWord){
        alert("You Won");
    }
    console.log(underScore);
 
    }
    else{wrongWords.push(keyword)};
});


docUnderScore[0].innerHTML = userUnderscore().join(' ')  // reading the innerHTML and replacing it with the appropriate amount of underscores, corresponding to the tezt in the console.log;

