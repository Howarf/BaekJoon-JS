const fs = require('fs');
let input
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(el=>Number(el));
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split('\r\n').map(el=>Number(el));
}
let result = input[0];
let checkNum = 0;
for(let i = 1; i<input.length; i++){
    if(result<input[i]){
        result = input[i];
        checkNum = i;
    }
}
console.log(result);
console.log(checkNum + 1)