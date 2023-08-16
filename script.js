let flip = Math.round(Math.random());
let guess = window.prompt('Enter a value of 1 or 0');
guess = guess *1;

if(guess !== 0 && guess !== 1){
    console.log(`Your guess was ${guess}. That is an invalid guess.`)
}
else if(flip === guess){
    console.log(`Your guess was ${guess}. Flip was ${flip}. WINNER`)
}
else{
    console.log(`Your guess was ${guess}. Flip was ${flip}. LOSER.`)
}

flip = Math.round(Math.random());
guess = window.prompt('Enter a value of 1 or 0');
guess = guess *1;

if(guess !== 0 && guess !== 1){
    console.log(`Your guess was ${guess}. That is an invalid guess.`)
}
else if(flip === guess){
    console.log(`Your guess was ${guess}. Flip was ${flip}. WINNER`)
}
else{
    console.log(`Your guess was ${guess}. Flip was ${flip}. LOSER.`)
}

