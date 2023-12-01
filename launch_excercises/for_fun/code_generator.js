let code;

let randomNumber = () => Math.floor(Math.random() * 10);

code = randomNumber() + (randomNumber() * 10) + (randomNumber() * 100) +  (randomNumber() * 1000);

if(code < 1000) {
  let str1 = '0';
  code = str1.concat(String(code));
} else {
  code = String(code);
}
console.log(code);


