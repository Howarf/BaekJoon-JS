let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
let x = [];
let y = [];
let result = [];
input.map(el => {
    x.push(Number(el.split(" ")[0]));
    y.push(Number(el.split(" ")[1]));
});
x = x.sort();
y = y.sort();

result.push(x[0] === x[1] ? x[2]:x[0]);
result.push(y[0] === y[1] ? y[2]:y[0]);
console.log(result.join(" "));