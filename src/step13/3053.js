let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const radius = input.shift();
const Pi = Math.PI;
const texi = ((radius * radius) * 2).toFixed(6);
const euclid = ((radius * radius) * Pi).toFixed(6);
console.log(euclid+"\r\n"+texi);