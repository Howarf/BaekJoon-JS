let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const student = (input[0].split(" ")).shift();
const trophy = (input[0].split(" ")).pop();
let score = (input[1].split(" ")).map(el => parseInt(el));
score.sort(function(a, b){
    return a - b;
});
console.log(score[student - trophy]);