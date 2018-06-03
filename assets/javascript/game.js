var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z'];
//rounds up to 27 when it's 26.5 or higher, else it would sometimes round up on 27 and give undefined
var randomnum= Math.round((Math.random()*26));
var randomLetter = alphabet[randomnum];
console.log('random letter is ' + randomLetter)


function UserKey(event){
 var key = event.key;
 
 if(key == randomLetter){
     
    
    console.log('win')

 }
 else{
     console.log('loss')
 }

}
 
//document.onkeyup = function; this runs the function when the user presses the keyboard
//var key = event.key; saves the users key
document.onkeyup = UserKey;