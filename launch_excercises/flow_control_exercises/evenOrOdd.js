function evenOrOdd(num) {
    if (!Number.isInteger(num)) {
        console.log('Is not a number!');
        return;
    }
    if (num % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}

evenOrOdd(6);
evenOrOdd(3);
evenOrOdd('odd');