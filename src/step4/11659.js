let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
input.shift();
const map = input.shift().split(' ').map(Number);
const T = input.map(el => el.split(' ').map(Number));
let anwser = [];
const sumArr = Array.from({length : map.length+1}).fill(0);
map.forEach((v, i) => {
    sumArr[i+1] = sumArr[i] + v;
})
T.forEach((el) => {
    anwser.push((sumArr[el[1]] - sumArr[el[0]-1]));
})
console.log(anwser.join('\n'));