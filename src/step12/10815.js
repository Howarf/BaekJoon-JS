let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const [n1, n2] = [+input[0], +input[2]];
const hasCards = new Set(input[1].split(' ').map(Number));
const cards = input[3].split(' ').map(Number);
let answer = '';
for(let i = 0; i < n2; i++) {
    if(hasCards.has(cards[i])) {
        answer += 1 + ' ';
    }
    else {
        answer += 0 + ' ';
    }
}
console.log(answer);