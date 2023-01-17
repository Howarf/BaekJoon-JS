let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const t = input.shift();
const R = input.shift().split(" ").map(el => +el);

function gcd(a, b){
    let r;
    while(b !== 0){
        r = a % b;
        a = b;
        b = r;
    }
    return a;
}
for(let i = 1; i < t; i++){
    let otherR = R[i];
    console.log((R[0]/gcd(R[0],otherR))+"/"+(otherR/gcd(R[0],otherR)));
}