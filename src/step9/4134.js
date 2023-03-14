let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const t = input.shift();
for(let i = 0; i < t; i++){
    let num = +input[i];
    while(true){
        if(isPrime(num)){
            console.log(num);
            break;
        }
        num++;
    }
}
function isPrime(num){
    if(num <= 1){
        return false;
    }
    if(num % 2 === 0){
        return num === 2 ? true : false;
    }
    for(let i = 3; parseInt(Math.sqrt(num)) >= i; i += 2){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}