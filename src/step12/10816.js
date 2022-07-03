let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const [n1, n2] = [+input[0], +input[2]];
const arr = new Map();
const hasCards = input[1].split(' ').map(Number);
const cards = input[3].split(' ').map(Number);
let answer = [];
for(number of hasCards) {
    if(arr.has(number)){
        arr.set(number, arr.get(number) + 1);
    }
    else{
        arr.set(number, 1);
    }
}
for(number of cards){
    if(arr.has(number)){
        answer.push(arr.get(number));
    }
    else{
        answer.push(0);
    }
}
console.log(answer.join(" "));