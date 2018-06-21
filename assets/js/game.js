// create an array of Words
word = ["goblin", "orc", "owlbear", "otyugh", "mindflayer", "woad", "ogre"];
// choose word randomly
var anyWord = Math.floor(Math.random() * word.length);
var chosenWord = word[anyWord];
var rightGuess = [];
var wrongGuess = [];

var gameBegin= false;
var gameEnd= false;
var victories= 0;
var defeats= 0;
const maxAttempts= 10;
var answerArray= [rightGuess];
var letters = ['a','b','c',
				  'd','e','f',
				  'g','h','i',
				  'j','k','l',
				  'm','n','o',
				  'p','q','r',
				  's','t','u',
				  'v','w','x',
				  'y','z'];

for( var i = 0; i<chosenWord.length; i++) {
    answerArray[i] ="_";
}

document.querySelector(".rightGuess").innerHTML = (answerArray.join(" "));

// get guess letters

document.onkeypress=function(event){
    var keyCode = event.keyCode; 
    var guess = [String.fromCharCode(keyCode)];


    if (chosenWord.indexOf(guess) > -1){
        rightGuess.push(guess);
        answerArray[chosenWord.indexOf(guess)]= guess;
        document.querySelector(".rightGuess").innerText = (answerArray.join(" "));
        (remainingLetters-1)
        if (answerArray.join('') === chosenWord){
            document.querySelector(".rightGuess").innerHTML = ("YOU WIN ")}
    }     
    else{
        wrongGuess.push(guess);
        document.querySelector(".wrongGuess").innerText = wrongGuess;
    
    }
}
var remainingLetters = (answerArray.length - rightGuess.length);


    
console.log(chosenWord)
console.log(answerArray)
console.log(wrongGuess)
console.log(rightGuess)
console.log(remainingLetters)


// Limit input to one press per key, alphabet only
//  Guess === letters
//    
//
// 
// reset game











