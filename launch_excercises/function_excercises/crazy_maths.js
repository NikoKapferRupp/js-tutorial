/*function add(a, b) {
    return a + b;
}
*/

function subtract(a, b) {
    return a - b;
}

function times(a, b) {
    return a * b;
}

console.log(add(20, 45));
console.log(subtract(80, 10));

console.log(add(subtract(80, 10), times(subtract(20, 6), add(30, 5))));

let add = (a, b) => a + b;