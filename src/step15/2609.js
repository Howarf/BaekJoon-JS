let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split(" ");
}
let [n1,n2] = input;
let result = [];
function gcd (a, b){
    if(b===0)return a;
    else return gcd(b, a%b);
}
result.push(gcd(n1, n2));
result.push((n1 * n2) / gcd(n1, n2));
console.log(result.join('\n'));