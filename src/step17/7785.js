let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().split("\n").map((el) => el.split(" "));
}
else{
    input = fs.readFileSync("../data.txt").toString().split("\r\n").map((el) => el.split(" "));
}
input.shift();
let company = new Map(input.map((el) => [el[0], el[1]]));
let result = [];
for(let key of company.keys()){
    if(company.get(key) !== "leave"){
        result.push(key);
    }
}
result.sort().reverse();
console.log(result.join("\n"));