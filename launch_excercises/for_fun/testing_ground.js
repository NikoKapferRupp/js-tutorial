let array = Array(5);
let wordObj = {greenLetters: array};
let rlSync = require('readline-sync');

function input() {
    wordObj.greenLetters[0] = rlSync.question("Please enter the first letter :" );
    graphics();
    wordObj.greenLetters[1] = rlSync.question("Please enter the second letter :");
    graphics();
    wordObj.greenLetters[2] = rlSync.question("Please enter the third letter :");
    graphics();
    wordObj.greenLetters[3] = rlSync.question("Please enter the forth letter :");
    graphics();
    wordObj.greenLetters[4] = rlSync.question("Please enter the fifth letter :");
    graphics();
    wordObj.yellowLetters = rlSync.question("Please enter all yellow letters :");
    graphics();
}

function graphics() {

for(let i = 0; i < 5; i++) {
    if(wordObj.greenLetters[i] === undefined) {wordObj.greenLetters[i] = ' '; console.log("test")}
}
    console.log(`[ ${wordObj.greenLetters[0]} ][ ${wordObj.greenLetters[1]} ][ ${wordObj.greenLetters[2]} ][ ${wordObj.greenLetters[3]} ][ ${wordObj.greenLetters[4]} ] / ${wordObj.yellowLetters}`)
}

input();

