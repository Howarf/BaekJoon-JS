let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const testCase = input.shift();
let pointNum = input.map(el => el.split(" "));
pointNum = pointNum.sort((a,b) => {
    if(a[1]===b[1]){return a[0]-b[0];}
    else{return a[1]-b[1];}
}).map(el => el.join(" "));
console.log(pointNum.join("\n"));