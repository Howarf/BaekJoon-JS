let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n").map(Number);
}
const t = input.shift();
let maxNum = Math.max(...input);
let check = new Array(maxNum+1).fill(false);
let result = [];
for(let i = 2; i <= maxNum; i++){
    if(!check[i]){
        for(let j = i * i; j <= maxNum; j += i){
            check[j] = true;
        }
    }
}
input.map(x =>{
    let count = 0;
    let y = Math.ceil(x / 2);
    if(x === 4){count = 1;}
    else{
        for(let j = 3; j <= y; j += 2){
            if(!check[j] && !check[x - j] && x - j != 1){
                count++;
            }
        }
    }
    result.push(count);
})
console.log(result.join("\n"));