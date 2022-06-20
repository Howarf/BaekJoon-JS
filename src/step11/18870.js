let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
[n, x] = input;
x = x.split(" ").map(el => parseInt(el));
const result = [];
const set = Array.from(new Set([...x])).sort((a, b) => a - b);
const object = {};
set.forEach((item, idx) => object[item] = idx);
for(let i = 0; i < x.length; i++){
    result.push(object[x[i]]);
}
console.log(result.join(" "));