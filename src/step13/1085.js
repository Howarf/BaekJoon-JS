let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("/n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("/r/n");
}
const [x, y, w, h] = [input[0],input[1],input[2],input[3]];
const data = [x, y, w - x, h - y];
console.log(Math.min.apply(null,data));