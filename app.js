alert('Welcome to the secret number game');
let maxNumber = prompt('What is the maximum number to be drawn?');
let secretNumber = parseInt(Math.random() * maxNumber + 1);
let kick;
let attempts = 0;
//while kick != secret number
while( kick != secretNumber){
    kick = prompt(`Choose a number from 1 to ${maxNumber}`);
    //Comment
    //console.log(secretNumber);
    console.log('Resultado da comparação   ', kick==secretNumber);
       // comment attempts = attempts +1;
    attempts++;
    if (secretNumber == kick) {
        break;
    } else {
        if (kick > secretNumber) { 
            alert(`The secret number is smaller your choice ${kick}`);
        } else {
            alert(`The secret number is bigger your choice ${kick}`);
        }
 
    };
}
//Ternary operator
let wordAttempt = attempts>1 ? 'attempts' : 'attempt';
alert(`Great! You discovered the Secret Number ${secretNumber} with ${attempts} ${wordAttempt}`);

attempts=0;

//the same thing
/*
if (attempts > 1){
    alert(`Great! You discovered the Secret Number ${secretNumber} with ${attempts} attempts`);
}else{
    alert(`Great! You discovered the Secret Number ${secretNumber} with ${attempts} attempt`);
}*/
