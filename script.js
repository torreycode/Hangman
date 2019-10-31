const words = ['apples','bat','blackcat','boo','candycorn','costumes','ghost','goblin','halloween','hauntedhouse','jackolantern','mask','moon','mummy','night','october','pirate','princess','pumpkin','spider','spooky','superhero','trickortreat','vampire','witch'];

let randWord = Math.floor(Math.random() * words.length); //Math.floor is rounding off the number of words in the words array to the nearest integer.
let chosenWord = words[randWord]; // Picking a random word from the words array.
let underScore = []; // empty array holding underscores
console.log(chosenWord);


let userUnderscore = () => {
    for(let i=0; i < chosenWord.length; i++){

    }
}