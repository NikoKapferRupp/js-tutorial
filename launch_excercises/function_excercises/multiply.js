let rlSync = require('readline-sync');

let firstNumber = function() {
    return rlSync.question("Enter the first number: ");
};

let secondNumber = function() {
    return rlSync.question("Enter the second number: ");
}


function multiply() {
    return firstNumber() * secondNumber();
}

console.log(multiply());

