let input,count = 0;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim();
}
let N = Number(input);
let answer = [];
function Hanoi(num, from, other, to){
    if(num === 0) {
        return;
    }
    else{
        Hanoi(num - 1 , from, to, other);
        answer.push([from, to]);
        count++;
        Hanoi(num - 1, other, from, to);
    }
}
Hanoi(N, '1','2','3');
console.log(count);
console.log(answer.map((element) => element.join(" ")).join("\n"));