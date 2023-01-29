let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split(" ");
}
let [Nt,Nf] = Combination(input[0]);
let [Mt,Mf] = Combination(input[1]);
let [NMt,NMf] = Combination(input[0]-input[1]);
let answer = Math.min((Nt-Mt-NMt),(Nf-Mf-NMf));
function Combination(num){
    let five = 0;
    let two = 0;
    for(let i = 5; i <= num; i *= 5){
        five += parseInt(num / i);
    }
    for(let i = 2; i <= num; i *= 2){
        two += parseInt(num / i);
    }
    return [five,two]
}
console.log(answer);