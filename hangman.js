var fiveLetterWords = ["Brick", "Shout", "Plumb", "Frost", "Glint", "Charp", "Sigma", "Bonds", "Quirk", "Jumps", "Vexil", "Graph", "Tonic", "Dwarf", "Blush", "Midge", "Freak", "Flute", "Hyped", "Cramp", "Zesty", "Nymph", "Joked", "Brisk", "Vault", "Chord", "Minor", "Funky", "Tread", "Glove", "Spurn", "Mothy", "Blend", "Quash", "Vomit", "Fable", "Trick", "Douse", "Grasp", "Juicy", "Exalt", "Clamp", "Sworn", "Tacky", "Bored", "Guilt", "Shave", "Drown", "Faint", "Jolts"];
var wordArray = Math.round((Math.random() * 100) / 2) - 1;
var wordToGuess = fiveLetterWords[wordArray].toUpperCase();
var trials = 5;
var stickmanImage = 0;

console.log(wordToGuess);

function checker(userGuess, idOfLetterGuessed){
    let element = document.getElementById(idOfLetterGuessed);


    if (trials == 1){
        document.getElementById('lose').style.display = "block";
        document.getElementById("correctWord").innerHTML = "The correct word was: " + wordToGuess;
    
    }

    if (userGuess == wordToGuess[0] || userGuess == wordToGuess[1] || userGuess == wordToGuess[2] || userGuess == wordToGuess[3] || userGuess == wordToGuess[4]) {
        element.style.backgroundColor = 'green';

        document.getElementById('letterInput' + (wordToGuess.indexOf(userGuess) + 1)).innerHTML = userGuess;

        document.getElementById("letter" + userGuess).disabled = true;

    
    }else {
        element.style.backgroundColor = 'red';
        element.disabled = true;
        
        trials--;

        stickmanImage++;

        document.getElementById('image').src = "hangman-" + stickmanImage + ".svg";

        document.getElementById("incorrectGuesses").innerHTML = stickmanImage;
    }

    if ((document.getElementById("letterInput1").innerHTML + document.getElementById("letterInput2").innerHTML + document.getElementById("letterInput3").innerHTML + document.getElementById("letterInput4").innerHTML + document.getElementById("letterInput5").innerHTML) === wordToGuess){
        document.getElementById('win').style.display = "block";
    }


}
