const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("");
}
let revers = input.reverse();
if(input === revers){
    console.log(1);
}
else{
    console.log(0);
}