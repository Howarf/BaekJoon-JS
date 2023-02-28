const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim();
}
input = +input;
let blank = " ";
let start = "*";
let awnser = [];
for(let i = 1; i <= input; i++){
    let result = blank.repeat(input-i)+start.repeat(i)+start.repeat(i-1);
    awnser.push(result);
}
for(let i = input-1; i > 0; i--){
    let result = blank.repeat(input-i)+start.repeat(i)+start.repeat(i-1);
    awnser.push(result);
}
console.log(awnser.join("\n"));