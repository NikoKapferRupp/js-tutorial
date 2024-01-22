let diceFour = () => Math.floor(Math.random() * 4 + 1);
let diceSix = () => Math.floor(Math.random() * 6 + 1);
let diceTen = () => Math.floor(Math.random() * 10 + 1);
let diceTwenty = () => Math.floor(Math.random() * 20 + 1);
let count = 0;

while(count < 30){
    console.log(diceFour());
    count++;
}

