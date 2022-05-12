let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const T = input.shift(0);
let data = input[0].split(" ");
let count = T;
for(let i = 0; i < T; i++){
    if(data[i] < 2){
        count--;
    }
    for(let j = 2; j < data[i]; j++){
        if(data[i] % j === 0){
            count--;
            break;
        }
    }
}
console.log(count);