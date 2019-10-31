const words = ['apples','bat','blackcat','boo','candycorn','costumes','ghost','goblin','halloween','hauntedhouse','jackolantern','mask','moon','mummy','night','october','pirate','princess','pumpkin','spider','spooky','superhero','trickortreat','vampire','witch'];

let randWord = Math.floor(Math.random() * words.length); //Math.floor is rounding off the number of words in the words array to the nearest integer.
let chosenWord = words[randWord]; // Picking a random word from the words array.
let underScore = []; // empty array holding underscores
console.log(chosenWord);


// The expression below generates an array of underscores equivalent to the amount of characters in the randomly generated word.
let userUnderscore = () => {   
    for(let i=0; i < chosenWord.length; i++){
underScore.push('_');
    }
    return underScore;
}
console.log(userUnderscore());


document.addEventListener('keypress', (event) => {   // the event listener is listening to each key that is pressed and displaying that letter associated in the console using fromCharCode and event.keyCode
    let keyword = String.fromCharCode(event.keyCode);
    console.log(keyword);
} )