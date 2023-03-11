const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split(" ");
}
const [a,b] = input;
function gcd (a, b){
    if(b===0)return a;
    else return gcd(b, a%b);
}
let result = BigInt(a*b/gcd(a,b));
console.log(result.toString());