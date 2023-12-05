let rlSync = require('readline-sync');

let firstName = function () {
    return rlSync.question("What is your first name? ");
}

let lastName = function () {
    return rlSync.question("What is your last name? ");
}


//let firstName = rlSync.question("What is your first name? ");
//let lastName = rlSync.question("What is your last name? ");

console.log("Hello, " + firstName() + " " +  lastName() + "!");
console.log(`Hello, ${firstName()} ${lastName()}!`);