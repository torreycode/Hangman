
// //game reset logic

// function reset()
// {
// startGame();
// }


function startGame(){

    
//Contains all the spookiest vocabulary known to the human kind.
const words = ['bat', 'costume', 'ghost', 'goblin','haunted', 'mask', 'night', 'pirate', 'spider', 'hero', 'vampire', 'witch'];

//important functionality variables
let randWord = Math.floor(Math.random() * words.length); //Math.floor is rounding off the number of words in the words array to the nearest integer.
let chosenWord = words[randWord]; // Picking a random word from the words array.
console.log(chosenWord);
let underScore = []; // empty array holding underscores
let rightWords = []; //array holding the correct guesses.
console.log(rightWords);
let wrongWords = []; // array holding incorrect guesses.
let guessesLeft = 8; // beginning amount of guesses left
let lettersInWord = chosenWord.split(''); // splits the chosenWord in an array. Can be looped through.
let numBlanks = lettersInWord.length; // This dynamically gets the number of blanks in the split version of chosen word.
let docUnderScore = document.getElementById("underscore"); // gets the html element underscore
let docrightguess = document.getElementById("rightguess"); // gets the right guess html element
let docwrongguess = document.querySelectorAll(".wrongguess"); // gets the wrong guess html element
console.log(wrongWords);
console.log(lettersInWord);


// dynamically generates the correct amount of underscores in the chosen word.
let hangWord = () => {
        for (let i = 0; i < lettersInWord.length; i++) {
            underScore.push(' _ ');
        }
        return underScore;
    }
hangWord();
console.log(hangWord);
console.log(underScore);

docUnderScore.innerHTML = underScore;




  // listening for keypresses
document.addEventListener('keypress', (event) => {   // the event listener is listening to each key that is pressed and displaying that letter associated in the console using fromCharCode and event.keyCode
    let keyword = String.fromCharCode(event.keyCode);
    console.log(keyword);

    rightWords.push(keyword);
    
    underScore[lettersInWord.indexOf(keyword)] = keyword; 
    docUnderScore.innerHTML = underScore.join(' ');
    docrightguess.innerHTML = rightWords.join(' ');
    docwrongguess.innerHTML = wrongWords.join(' ');
 


  if(lettersInWord.indexOf(keyword) > -1){
    console.log('you\'ve guessed correctly')
}
else {
    console.log('wrong')
}
  if(underScore.join('') === chosenWord){
    alert('you win');
}
})



  

};






startGame();












// // Main Variables




//     underScore[lettersInWord.indexOf(keyword)] = keyword; //find the chosenWord and in the code below places the equivalent # of underscores inside of the text/guesses box.
//     docUnderScore[0].innerHTML = underScore.join(' ')
//     docrightguess[0].innerHTML = rightWords.join(' '); // checks if input is right
//     docwrongguess[0].innerHTML = wrongWords.join(' ');


//     if (lettersInWord.indexOf(keyword) > -1) {
//         rightWords.push(keyword);
//         if (underScore.join('') === chosenWord) {
//            alert("You win")
//            reset();
//         }


//     }
//     else if (wrongWords.length >= 5) {
//         alert("You lost");
//         reset();

//     }
//     else {
//          wrongWords.push(keyword) 
//          console.log("guess was wrong")
//         };
// })};

//  startGame();