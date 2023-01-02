const fs = require('fs');
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split('\r\n');
}
let maxcount = input.shift();
let numArr = input.shift().split(" ");
let answer = 0;
for(let i = 0; i < maxcount; i++){
    if(numArr[i] == input){
        answer++;
    }
}
console.log(answer);