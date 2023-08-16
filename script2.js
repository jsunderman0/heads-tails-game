function getFlip(){
    let rnd = Math.random();
    rnd = Math.round(rnd);
    return rnd;
}

function getGuess(){
    let guess = window.prompt('enter a 1 or 0');
    guess = guess * 1;
    return guess;
}
function displayResult(flip, guess){
    if ( guess !== 1 && guess !==0){
        console.log('guess was invalid')
    }
    else if(flip === guess){
        console.log(`Guess was ${guess}, flip was ${flip}, WINNER`)
    }
    else {
        console.log(`Guess was ${guess}, flip was ${flip}, LOSER`)
    }   
    }
const flip = getFlip();
const guess = getGuess();
displayResult(flip, guess);
