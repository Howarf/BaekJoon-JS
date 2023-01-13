let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
let t = input.shift();
let result = [];
for(let i = 0; i < t; i++){
    let [n1,n2] = (input.shift()).split(" ");
    result.push((n1 * n2) / gcd(n1, n2));
}
function gcd (a, b){
    if(b===0)return a;
    else return gcd(b, a%b);
}
console.log(result.join('\n'));