
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z'];
//rounds up to 27 when it's 26.5 or higher, else it would sometimes round up on 27 and give undefined
var randomnum= Math.round((Math.random()*26));
var randomLetter = alphabet[randomnum];
console.log('random letter is ' + randomLetter)
var wins = 0;
var lose = 0;
var attempts = 9;
var guesses = [];

function UserKey(event){
 var key = event.key;
 

 
 
 if(key == randomLetter){
     wins++;
     attempts = 9;
     guesses = [];
    
    console.log('win');
    document.getElementById("wins").innerHTML = wins;
    document.getElementById('GuessesLeft').innerHTML = attempts;
    randomnum= Math.round((Math.random()*26));
         randomLetter = alphabet[randomnum];
         console.log('random letter is ' + randomLetter);


 }
 else{
     console.log('loss')
     guesses.push(key);
     document.getElementById('UserGuesses').innerHTML = guesses;
    
     attempts--;
     if(attempts == 0){
         attempts = 9;
         lose++;
         document.getElementById('losses').innerHTML = lose;
         randomnum= Math.round((Math.random()*26));
         randomLetter = alphabet[randomnum];
         console.log('random letter is ' + randomLetter);
     }
     document.getElementById("wins").innerHTML = wins;
     document.getElementById('GuessesLeft').innerHTML = attempts;
//     if(attempts == 0){
//        lose++;
//        document.getElementById('losses').innerHTML = lose;

//     }
   
 }

}


 
//document.onkeyup = function; this runs the function when the user presses the keyboard
//var key = event.key; saves the users key

document.onkeyup = UserKey;

