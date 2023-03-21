let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const t = +input.shift();
let x = [], y = [];
let result;
if(t < 2){
    console.log(0);
}
else{
    for(let i = 0; i < t; i++){
        num = input[i].split(" ");
        x.push(num[0]);
        y.push(num[1]);
    }
    result = (Math.min(...x) - Math.max(...x)) * (Math.min(...y) - Math.max(...y));
    console.log(result);
}