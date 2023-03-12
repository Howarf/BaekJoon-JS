let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const fraction1 = input[0].split(" ");
const fraction2 = input[1].split(" ");
let [num1,num2] = [(fraction1[0]*fraction2[1])+(fraction1[1]*fraction2[0]),fraction1[1]*fraction2[1]];
let gcdnum = gcd(num1,num2);
function gcd (a, b){
    if(b===0)return a;
    else return gcd(b, a%b);
}
if(gcdnum === 1){
    console.log(num1,num2);
}
else{
    console.log(num1/gcdnum,num2/gcdnum);
}