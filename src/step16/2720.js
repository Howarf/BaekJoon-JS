let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n").map(Number);
}
const t = input.shift();
for(let i = 0; i < t; i++){
    let result = new Array(4).fill(0);
    let money = input[i];
    while(money !== 0){
        if(money >= 25){
            result[0] = parseInt(money/25);
            money %= 25;
            continue;
        }
        else if(money < 25 && money >= 10){
            result[1] = parseInt(money/10);
            money %= 10;
            continue;
        }
        else if(money < 10 && money >= 5){
            result[2] = parseInt(money/5);
            money %= 5;
            continue;
        }
        else{
            result[3] = parseInt(money/1);
            money %= 1;
            continue;
        }
    }
    console.log(result.join(" "));
}