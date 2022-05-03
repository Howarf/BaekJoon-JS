const fs = require("fs");
let input, move, endPoint;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split(" ");
}
move = Number(input[0])-Number(input[1]);
endPoint = Number(input[2])-Number(input[1]);
console.log(Math.ceil(endPoint / move));