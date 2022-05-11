let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const T = input.shift(0);
let count = T;
for(let i = 0; i < T; i++){
    let letter = [];
    for(let j = 0; j < input[i].length; j++){
        if(letter.indexOf(input[i][j]) === -1){
            letter.push(input[i][j]);
        }
        else {
            if(letter.indexOf(input[i][j]) !== letter.length - 1){
                count--;
                break;
            }
        }
    }
}
console.log(count);