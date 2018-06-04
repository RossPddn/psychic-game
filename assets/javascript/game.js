
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z'];
//rounds up to 27 when it's 26.5 or higher, else it would sometimes round up on 27 and give undefined
var randomnum= Math.round((Math.random()*26));
var randomLetter = alphabet[randomnum];
console.log('random letter is ' + randomLetter)
var wins = 0;
var lose = 0;
var attempts = 9;

function UserKey(event){
 var key = event.key;
 
 if(key == randomLetter){
     wins++;
     attempts = 9;
    
    console.log('win');
    document.getElementById("wins").innerHTML = wins;
    document.getElementById('GuessesLeft').innerHTML = attempts;


 }
 else{
     console.log('loss')
    
     attempts--
     document.getElementById("wins").innerHTML = wins;
     document.getElementById('GuessesLeft').innerHTML = attempts;
     if(attempts == 0){
        lose++;
        document.getElementById('losses').innerHTML = lose;

     }
 }

}

 
//document.onkeyup = function; this runs the function when the user presses the keyboard
//var key = event.key; saves the users key

document.onkeyup = UserKey;
